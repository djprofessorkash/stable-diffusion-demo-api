# Pydantic import for better Python validation
import pydantic
from typing import Optional

# Create superclass for stricter model data type validation
class PromptBase(pydantic.BaseModel):
    seed: Optional[int] = 42
    num_inference_steps: int = 10
    guidance_scale: float = 7.5

# Create subclass for strict validation of created images
class ImageCreate(PromptBase):
    prompt: str