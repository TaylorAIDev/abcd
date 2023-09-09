from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from pathlib import Path
import uvicorn
from mangum import Mangum
import mistletoe
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
    """Temp data"""
    files = Path("./data").glob("*.md")
    for file in files:
        with open(file, "r") as fin:
            rendered = mistletoe.markdown(fin)
            # TODO: parse markdown, to JSON


@app.get("/lessons")
async def read_lessons():
    """Get lessons list."""
    lessons = []
    return {"status": "OK"}


handler = Mangum(app)


if __name__ == "__main__":
    uvicorn.run(app)
