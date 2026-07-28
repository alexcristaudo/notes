#based on Orbit1-5.py
from vpython import *
sun   = sphere( pos=vector(-5e10,0,0), radius=1.5e10, color=color.yellow )
star = sphere( pos=vector(5e10,0,0), radius=1.5e10, color=color.red )
#star.pos=(4.5e10,0,0)
planet = sphere( pos=vector(2.5e11,0,0), radius=6.4e9, color=color.blue )
sun.M=2e30
star.M=2e30
planet.M=6e24
G = 6.67e-11
t=0
dt=24*360
star.p=star.M*vector(0,0.5*sqrt(G*sun.M/mag(star.pos-sun.pos)),0)
sun.p=sun.M*vector(0,-0.5*sqrt(G*sun.M/mag(star.pos-sun.pos)),0)
planet.p=planet.M*vector(0,sqrt(G*(sun.M+star.M)/mag(planet.pos-sun.pos)),0)
ptot=sun.p+star.p
vtot=ptot/(sun.M+star.M)
rtot=(star.M*star.pos+sun.M*sun.pos+planet.M*planet.pos)/(star.M+sun.M+planet.M)
sun.pos-=rtot
star.pos-=rtot
planet.pos-=rtot
star.trail=curve(pos=star.pos, color=star.color)
planet.trail=curve(pos=planet.pos, color=planet.color)
sun.trail=curve(pos=sun.pos, color=sun.color)
sun.p=sun.p-vtot*sun.M
star.p=star.p-vtot*star.M
scene.autoscale=0
while t < 50000*dt:
    rate(200)
    R1=star.pos-sun.pos     # star by sun
    magR1=mag(R1)
    R2=star.pos-planet.pos  # star by planet
    magR2=mag(R2)
    R3=sun.pos-planet.pos    # sun by planet
    magR3=mag(R3)
    f1=-G*sun.M*star.M*R1/magR1**3
    f2=-G*planet.M*star.M*R2/magR2**3
    f3=-G*planet.M*sun.M*R3/magR3**3
    star.p=star.p+(f1+f2)*dt
    star.pos=star.pos+(star.p/star.M)*dt
    star.trail.append(pos=star.pos)
    
    sun.p=sun.p+(f3-f1)*dt
    sun.pos=sun.pos+(sun.p/sun.M)*dt
    sun.trail.append(pos=sun.pos)

    planet.p=planet.p+(-f2-f3)*dt
    planet.pos=planet.pos+(planet.p/planet.M)*dt
    planet.trail.append(pos=planet.pos)
    t=t+dt
