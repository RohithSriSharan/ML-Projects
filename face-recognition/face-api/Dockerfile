# Use a lightweight python image
FROM python:3.11-slim



# Set working directory
WORKDIR /app

# Install system dependencies needed by PyTorch, Pillow, etc.
RUN apt-get update && apt-get install -y --no-install-recommends \
    libgl1 libglib2.0-0 \
 && rm -rf /var/lib/apt/lists/*


 # Copy requirements first (layer caching optimization)
COPY requirements.txt .

# Upgrade pip and install dependencies
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy the rest of the project
COPY . .

# Create a cache volume for Hugging Face models
VOLUME ["/cache/hf"]


# Expose API port
EXPOSE 8000

# Run the FastAPI app with Uvicorn
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]