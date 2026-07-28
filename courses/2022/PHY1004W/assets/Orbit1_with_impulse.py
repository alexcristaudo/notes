from vpython import *

G = 6.67e-11
R = 1.5e11
dt = 360;               # Time step = 6 minutes
Rev = 0;                # Number of revolutions completed

Sun   = sphere( pos = vector(0,0, 0), M = 2e30, radius = 1.5e10, color = color.yellow )
Earth = sphere( pos = vector(R,0, 0), M = 6e24, radius = 6.4e9,  color = color.blue)
Earth.p = Earth.M * sqrt(G*Sun.M/R) * vector(0,1,0)

TR = [ curve(color=Earth.color), curve(color=color.cyan) ];        # Different traces for the two orbits

magimp = 3e28     # change magnitude of impulse here
th = 90           # change angle of impulse here

while (Rev < 2):
    force = G*Sun.M*Earth.M*(Sun.pos-Earth.pos)/mag(Sun.pos-Earth.pos)**3
    Earth.p = Earth.p + force*dt
    Earth.pos = Earth.pos + (Earth.p/Earth.M)*dt
    TR[Rev].append( Earth.pos )
    if (Earth.pos.y > 0) and (Earth.pos.y - (Earth.p.y/Earth.M)*dt) < 0:
        Rev = Rev + 1
        if Rev == 1:                # Just completed first revolution
            Imp = magimp * vector( cos(th*pi/180), sin(th*pi/180), 0)
            Earth.p = Earth.p + Imp
            Arr = arrow( pos = Earth.pos, axis = Imp/1e18 )
