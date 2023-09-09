from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from mangum import Mangum
import uvicorn

from app.api import router

# app config
app = FastAPI(
    title="API",
)

# routes
app.include_router(router, prefix="/api")
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


handler = Mangum(app)


if __name__ == "__main__":
    uvicorn.run(app)
