from fastapi import FastAPI
import uvicorn
from starlette.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:8000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/default")
async def default():
    # GPIO 사용
    return {}

@app.get("/sample")
async def sample():
    # GPIO 사용
    return {}

@app.get("/unknown")
async def unknown():
    # GPIO 사용
    return {}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0")