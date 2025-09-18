import os
import torch
import torch.nn.functional as F
from transformers import AutoImageProcessor, AutoModel
from PIL import Image, UnidentifiedImageError
import io

# -------------------------------
# Config
# -------------------------------
device = "cuda" if torch.cuda.is_available() else "cpu"
THRESHOLD = 0.6
DATA_PATH = "data"

# -------------------------------
# Load Model
# -------------------------------
processor = AutoImageProcessor.from_pretrained("google/vit-base-patch16-224")
model = AutoModel.from_pretrained("google/vit-base-patch16-224").eval().to(device)

def get_embedding(img_bytes):
    """Extract embedding using ViT CLS token"""
    try:
        img = Image.open(io.BytesIO(img_bytes)).convert("RGB")
    except UnidentifiedImageError:
        return None
    inputs = processor(images=img, return_tensors="pt").to(device)
    with torch.no_grad():
        outputs = model(**inputs)
        return outputs.last_hidden_state[:, 0, :]  # CLS token

def cosine_similarity(vec1, vec2):
    """Cosine similarity between embeddings"""
    vec1, vec2 = vec1.view(-1), vec2.view(-1)
    return F.cosine_similarity(vec1.unsqueeze(0), vec2.unsqueeze(0)).item()

# -------------------------------
# Build Face Database
# -------------------------------
faces_db = {}

if os.path.exists(DATA_PATH):
    for person in os.listdir(DATA_PATH):
        person_folder = os.path.join(DATA_PATH, person)
        if os.path.isdir(person_folder):
            embeddings = []
            for file in os.listdir(person_folder):
                if file.lower().endswith((".jpg", ".jpeg", ".png")):
                    try:
                        with open(os.path.join(person_folder, file), "rb") as f:
                            emb = get_embedding(f.read())
                            if emb is not None:
                                embeddings.append(emb)
                    except Exception as e:
                        print(f"❌ Error with {file}: {e}")
            if embeddings:
                faces_db[person] = torch.stack(embeddings).mean(dim=0, keepdim=True)
                print(f"✅ Loaded {len(embeddings)} images for {person}")
else:
    print("⚠️ No 'data' folder found. Recognition will return Unknown.")

# -------------------------------
# Recognition Function
# -------------------------------
def recognize_face(img_bytes: bytes):
    """Recognize a face and return best match"""
    query_emb = get_embedding(img_bytes)
    if query_emb is None:
        return {"match": "Unknown", "similarity": 0.0, "threshold": THRESHOLD, "error": "Invalid image"}

    best_match, best_score = "Unknown", -1
    for name, emb in faces_db.items():
        score = cosine_similarity(query_emb, emb)
        if score > best_score:
            best_score, best_match = score, name

    if best_score < THRESHOLD:
        best_match = "Unknown"

    return {
        "match": best_match,
        "similarity": round(best_score, 4),
        "threshold": THRESHOLD,
        "model": "google/vit-base-patch16-224 (Transformer)"
    }
