from pathlib import Path
import schemas, torch, os
from diffusers import StableDiffusionPipeline
from dotenv import load_dotenv
from PIL.Image import Image

load_dotenv()

# Get API access token from HuggingFace
HF_STABLE_DIFFUSION_MODEL_KEY = os.getenv("HF_STABLE_DIFFUSION_MODEL_KEY")

pipeline = StableDiffusionPipeline.from_pretrained(
    "CompVis/stable-diffusion-v1-4",
    torch_dtype=torch.float32,
    use_auth_token=HF_STABLE_DIFFUSION_MODEL_KEY)

if torch.backends.mps.is_available():
    device = "mps"
else:
    device = "cuda" if torch.cuda.is_available() else "cpu"

pipeline.to(device)

async def generate_image(imgPrompt: schemas.ImageCreate) -> Image:
    generator = None if imgPrompt.seed is None else torch.Generator().manual_seed(int(imgPrompt.seed))
    image: Image = pipeline(imgPrompt.prompt,
                            guidance_scale=imgPrompt.guidance_scale,
                            num_inference_steps=imgPrompt.num_inference_steps,
                            generator=generator,
                        ).images[0]
    return image