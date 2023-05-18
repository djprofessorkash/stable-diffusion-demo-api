from fastapi import FastAPI
from fastapi.responses import StreamingResponse
import fastapi as fast
import schemas, services
import io

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hi there!"}

@app.get("/api")
async def root():
    return {"message": "Welcome to the Stable Diffusion Demo API!"}

@app.get("/api/generate/")
async def generate_image(imgPromptCreate: schemas.ImageCreate = fast.Depends()):
    image = await services.generate_image(imgPrompt=imgPromptCreate)
    memory_stream = io.BytesIO()
    image.save(memory_stream, format="PNG")
    memory_stream.seek(0)
    return StreamingResponse(memory_stream, media_type="image/png")