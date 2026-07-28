from vpython import *

# * OBJECTS AND CONSTANTS

sun = sphere(pos=vector(0, 0, 0), radius=1.5e10, color=color.yellow)
earth = sphere(pos=vector(1.5e11, 0, 0), radius=6.4e9, color=color.blue)
earth.M = 2e30  # 6e24
earth.trail = curve(pos=earth.pos, color=earth.color)
sun.M = 2e30
G = 6.67e-11
dt = 24 * 60 * 60
deltaT = 0
magPos = mag(earth.pos - sun.pos)
scene.autoscale = 0

theta = 30
earth.p = earth.M*vector(sin(30), cos(30), 0)*sqrt((G*sun.M)/magPos)
sun.p = vector(0, 0, 0)  # -earth.p

sun.trail = curve(pos=sun.pos, color=sun.color)

while deltaT < dt*1000:
    rate(50)
    magPos = mag(earth.pos - sun.pos)
    force = -(G*earth.M*sun.M/magPos**3)*(earth.pos - sun.pos)
    earth.p += force*dt
    sun.p += (-force)*dt
    earth.pos += (earth.p/earth.M)*dt
    sun.pos += (sun.p/sun.M)*dt
    earth.trail.append(pos=earth.pos)
    sun.trail.append(pos=sun.pos)
