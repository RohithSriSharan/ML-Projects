from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from face_recognition import recognize_face

app = FastAPI(title="Face Recognition API (Transformer)")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/ping")
async def ping():
    return {"message": "pong"}

@app.post("/recognize")
async def recognize(image: UploadFile = File(...)):
    img_bytes = await image.read()
    return recognize_face(img_bytes)
