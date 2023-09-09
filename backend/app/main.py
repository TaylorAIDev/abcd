from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
import uvicorn

# aws
from mangum import Mangum

# from app import config


# app config
app = FastAPI(
    title="API",
    # docs_url=f"{config.API_ROOT}/docs",
    # openapi_url=f"{config.API_ROOT}/openapi.json",
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


# AWS
handler = Mangum(app)


if __name__ == "__main__":
    uvicorn.run(app)
