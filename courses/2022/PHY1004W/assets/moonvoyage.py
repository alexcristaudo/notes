from vpython import *

# * SCALE THE WINDOW TO FILL THE SCREEN
scene.width = 1000
scene.height = 700

# * OBJECTS

earth = sphere(pos=vector(0, 0, 0), radius=6.4e6, color=color.blue)
moon = sphere(pos=vector(4.0e8, 0, 0), radius=1.75e6, color=color.white)
craft = sphere(pos=vector(0, 50e3+earth.radius, 0),
               radius=1.0e6, color=color.red)

# * CONSTANTS
G = 6.67e-11
moon.M = 7e22
earth.M = 6e24
craft.M = 175.0

craft.trail = curve(pos=craft.pos, color=craft.color)
# 1.3e4
craft.v = vector(5.8e4, 0, 0)
craft.p = craft.M*craft.v

dt = 10
t = 0
scene.autoscale = 0
work = 0.0
kinetic = (1/2) * craft.M * mag(craft.v)**2
reached = False
try:
    while not reached:
        rate(50)
        R_e = mag(craft.pos - earth.pos)
        R_m = mag(craft.pos - moon.pos)
        forceEarth = -G*earth.M*craft.M/(R_e**3)*(craft.pos - earth.pos)
        forceMoon = -G*moon.M*craft.M/(R_e**3)*(craft.pos - moon.pos)
        craft.p += (forceEarth + forceMoon) * dt
        craft.pos += craft.p/craft.M * dt
        t += dt
        craft.trail.append(pos=craft.pos)

        deltar = (craft.p/craft.M)*dt
        work += dot(deltar, forceEarth+forceMoon)

        rmag = mag(craft.pos-earth.pos)
        if rmag <= earth.radius:
            print("Oops, crashed into the Earth")
            reached = True
        rmag = mag(moon.pos - craft.pos)
        if rmag <= moon.radius:
            print("Mission accomplished, crashed into the moon in time", t, "s")
            reached = True
    print("Work Done:", work)
    print(craft.v)
    print("Change in Kinetic:", kinetic - ((1/2) * craft.M * mag(craft.v)**2))
except Exception as e:
    print(e)
