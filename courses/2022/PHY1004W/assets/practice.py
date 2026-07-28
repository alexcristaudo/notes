from vpython import *

# CONSTANTS
oofpez = 9e9
e = 1.6e-19
me = 9e-31
dt = 1e-3

# OBJECTS
q = sphere(pos=vector(0, 0, 0), color=color.green, charge=e)
a = arrow(pos=vector(-1, 0, 0), axis=vector(0, 0, 0), color=color.green)
