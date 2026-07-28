from vpython import *

from random import randint

print(randint(0,5))

print("Running")
# constants 
G = 6.67e-11   # grav. const.
t=0            # initial time (in s)
dt=24*3600     # time step 1 day

# simulation objects
sun   = sphere( pos=vector(0,0,0), radius=1.5e10, color=color.yellow )
earth = sphere( pos=vector(1.5e11,0,0), radius=6.4e9, color=color.cyan )
planet = sphere( pos=vector(-1.5e11,0,0), radius=6.4e9, color=color.blue)
sun.M=2e30
earth.M=6e24
planet.M=6e24

sun.p=sun.M*vector(0,0,0)
earth.p=earth.M*vector(0,sqrt(G*sun.M/mag(earth.pos-sun.pos)),0)
planet.p = planet.M*vector(0,-sqrt(G*sun.M/mag(planet.pos - sun.pos)),0)

#earth.p = earth.M*vector(0,0,0)
earth.trail=curve(pos=earth.pos, color=earth.color)
sun.trail = curve(pos = sun.pos, color=sun.color)
planet.trail = curve(pos = planet.pos, color=planet.color)

"""
F = -GM1M2/|r|^3 * R
"""

# scene administration
scene.autoscale=0

while t < 100000*dt:
    rate(50)

    # earth - sun = 
    R_es = earth.pos - sun.pos
    R_ep = earth.pos - planet.pos
    R_ps = planet.pos - sun.pos
    sizeR_es = mag(R_es)
    sizeR_ep = mag(R_ep)
    sizeR_ps = mag(R_ps)

    F_es = -G*earth.M*sun.M*R_es/(sizeR_es**3)
    F_pe = -G*earth.M*sun.M*R_ep/(sizeR_ep**3)
    F_ps = -G*earth.M*sun.M*R_ps/(sizeR_ps**3)

    earth.p += (F_es + F_pe)*dt 
    sun.p+=(-F_es -F_ps)*dt
    planet.p += (F_ps - F_pe)*dt

    earth.pos += (earth.p/earth.M)*dt
    sun.pos += (sun.p/sun.M)*dt
    planet.pos += (planet.p/planet.M)*dt

    earth.trail.append(earth.pos)
    sun.trail.append(sun.pos)
    planet.trail.append(planet.pos)
