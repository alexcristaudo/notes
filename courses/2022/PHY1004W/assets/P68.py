from vpython import *

try:
    sphere(pos = vector(-1,0,0), radius = 0.5, color = color.green)
    sphere(pos = vector(1,1,0), radius = 0.5, color = color.green)
    sphere(pos = vector(1,-1,0), radius = 0.5, color = color.green)
    print("A")
    arrow(pos = vector(-1,0,0), axis = vector(0, -1, 0), color = color.red)
    arrow(pos = vector(1,1,0), axis = vector(-1,0,0), color = color.red)
    arrow(pos = vector(1, -1, 0), axis = vector(1,1,0), color = color.red)
except Exception:
    print("Error")