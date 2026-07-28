from visual import *
G = 6.67e-11   # grav. const.
t=0            # initial time (in s)
dt=24*3600     # time step 1 day
# simulation objects
sun   = sphere( pos=(0,0,0), radius=1.5e10, color=color.yellow )
earth = sphere( pos=(1.5e11,0,0), radius=6.4e9, color=color.cyan )
sun.M=2e30
earth.M=1e30
earth.p=earth.M*vector(0,sqrt(G*sun.M/mag(earth.pos-sun.pos)),0)
earth.trail=curve(pos=earth.pos, color=earth.color)
sun.p=sun.M*vector(0,0,0)
sun.trail=curve(pos=sun.pos, color=sun.color)
# transform so initial momentum is zero
ptot=sun.p+earth.p
vtot=ptot/(sun.M+earth.M)
sun.p=sun.p-vtot*sun.M
earth.p=earth.p-vtot*earth.M
scene.autoscale=0
# integration loop
while t < 1000*dt:
    rate(50)  # limit frame rate 
    R=earth.pos-sun.pos
    magR=mag(R)
    force = -G*sun.M*earth.M*R/magR**3
    earth.p=earth.p+force*dt
    earth.pos=earth.pos+(earth.p/earth.M)*dt
    earth.trail.append(pos=earth.pos)
    sun.p=sun.p-force*dt
    sun.pos=sun.pos+(sun.p/sun.M)*dt
    sun.trail.append(pos=sun.pos)
    t=t+dt
