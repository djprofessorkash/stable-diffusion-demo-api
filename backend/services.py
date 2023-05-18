# Get schemas and diffusion model for generation services
from pathlib import Path
import schemas, torch, os
from diffusers import StableDiffusionPipeline
from dotenv import load_dotenv
from PIL.Image import Image

# Load environment variables as dependencies
load_dotenv()

# Get API access token from HuggingFace
HF_STABLE_DIFFUSION_MODEL_KEY = os.getenv("HF_STABLE_DIFFUSION_MODEL_KEY")

# Create model pipeline using pretrained algorithm and auth token
pipeline = StableDiffusionPipeline.from_pretrained(
    "CompVis/stable-diffusion-v1-4",
    torch_dtype=torch.float32,
    use_auth_token=HF_STABLE_DIFFUSION_MODEL_KEY)

# Set up backend engine (dependent on local machine capabilities)
if torch.backends.mps.is_available():
    device = "mps"
else:
    # device = "cuda" if torch.cuda.is_available() else "cpu"       # Setup CPU usage for lower-power devices
    device = "cuda" if torch.cuda.is_available() else "gpu"         # Setup GPU usage for higher-power devices

# Connect backend engine to model pipeline
pipeline.to(device)

# Define asynchronous image generation function anchoring frontend to backend
async def generate_image(imgPrompt: schemas.ImageCreate) -> Image:
    generator = None if imgPrompt.seed is None else torch.Generator().manual_seed(int(imgPrompt.seed))
    image: Image = pipeline(imgPrompt.prompt,
                            guidance_scale=imgPrompt.guidance_scale,
                            num_inference_steps=imgPrompt.num_inference_steps,
                            generator=generator,
                        ).images[0]
    return image