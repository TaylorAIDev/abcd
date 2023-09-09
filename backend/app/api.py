from fastapi import APIRouter
from pathlib import Path
import mistletoe

router = APIRouter()

def load_lessons():
    """Temp data"""
    files = Path("./data").glob("*.md")
    for file in files:
        with open(file, "r") as fin:
            rendered = mistletoe.markdown(fin)
            print(rendered)
            # TODO: parse markdown, to JSON


@router.get("/lessons")
async def read_lessons():
    """Get lessons list."""
    lessons = []
    return {"status": "OK"}


@router.post("/chat")
async def create_chat():
    """Get chat list."""
    chat = []
    return {"status": "OK"}