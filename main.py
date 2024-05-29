from fastapi import FastAPI

app = FastAPI()

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