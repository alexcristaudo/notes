from vpython import *
G = 6.67e-11   # grav. const.
t=0            # initial time (in s)
dt=24*3600     # time step 1 day
# simulation objects
sun   = sphere( pos=vector(0,0,0), radius=1.5e10, color=color.yellow )
earth = sphere( pos=vector(1.5e11,0,0), radius=6.4e9, color=color.cyan )
sun.M=2e30
earth.M=6e24
earth.p=earth.M*vector(0,sqrt(G*sun.M/mag(earth.pos-sun.pos)),0)
earth.trail=curve(pos=earth.pos, color=earth.color)
# scene administration
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
    t=t+dt

#%%
