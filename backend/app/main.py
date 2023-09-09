from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from pathlib import Path
import uvicorn
from mangum import Mangum
import openai

# app config
app = FastAPI(
    title="API",
)

# routes
# app.include_router(v1.router, prefix="/v1")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    # allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def home():
    """General API information."""
    return {"status": "OK"}


def load_lessons():
    files = Path("./data").glob("*.md")


@app.get("/lessons")
async def lessons():
    """Get lessons list."""
    lessons = []
    return {"status": "OK"}



# AWS
handler = Mangum(app)


if __name__ == "__main__":
    uvicorn.run(app)
