from pyfirmata import Arduino, util
import time
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import RedirectResponse

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

board = Arduino('/dev/ttyACM0')
it = util.Iterator(board)
it.start()
board.analog[0].enable_reporting()

@app.get("/")
async def quantitative():
    return {"value": f"{board.analog[0].read()}"}
