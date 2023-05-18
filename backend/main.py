# Get FastAPI and other schemas and services
from fastapi import FastAPI
from fastapi.responses import StreamingResponse
import fastapi as fast
import schemas, services
import io

# Set up FastAPI application wrapper
app = FastAPI()

# Create root route
@app.get("/")
def read_root():
    return {"message": "Hi there!"}

# Create API route to load main page
@app.get("/api")
async def root():
    return {"message": "Welcome to the Stable Diffusion Demo API!"}

# Create image generation route to retrieve image from server
@app.get("/api/generate/")
async def generate_image(imgPromptCreate: schemas.ImageCreate = fast.Depends()):
    image = await services.generate_image(imgPrompt=imgPromptCreate)
    memory_stream = io.BytesIO()
    image.save(memory_stream, format="PNG")
    memory_stream.seek(0)
    return StreamingResponse(memory_stream, media_type="image/png")