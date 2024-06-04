from pyfirmata import Arduino, util
import time
import keyboard

board = Arduino('/dev/ttyACM0')
it = util.Iterator(board)
it.start()
board.analog[0].enable_reporting()

keyboard.add_hotkey('m', lambda : print(board.analog[0].read()))
keyboard.wait()