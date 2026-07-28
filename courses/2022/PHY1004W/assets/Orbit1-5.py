from visual import *
def GravForce(r1,m1,r2,m2):
    G=6.67e-11
    eps=-0.00
    R=r2-r1
    magR=mag(R)
    return -(1+eps)*G*m1*m2*R/magR**(3.00+eps)
G=6.67e-11
r_sun1   = vector(0.5e11,0,0)
r_sun2   = vector(-0.5e11,0,0)

r_earth = vector(1.5e11,0,0)
M_sun1   = 2e30
M_sun2   = 2e30
M_earth = 6e24
vs=sqrt(0.5*G*M_sun1/mag(r_sun1-r_sun2))
sun1   = sphere( pos=r_sun1, radius=1.5e10, color=color.yellow )
sun2   = sphere( pos=r_sun2, radius=1.5e10, color=color.yellow )
earth = sphere( pos=r_earth, radius=6.4e9, color=color.blue )
trail = curve( pos=r_earth)
t=0
dt=24*3600
v0=sqrt(G*M_sun1/mag(r_earth-r_sun1))
theta=10.0*pi/180.0
v_earth=vector(v0*sin(theta),v0*cos(theta),0)
v_sun1=vector(0,vs,0)
v_sun2=vector(0,-vs,0)
p_sun1=M_sun1*v_sun1
p_sun2=M_sun2*v_sun2
p_earth=M_earth*v_earth
while t < 5*365*dt:
    rate(50)
    forcee = GravForce( r_sun1, M_sun1, r_earth, M_earth )+GravForce( r_sun2, M_sun2, r_earth, M_earth )
    force1 = GravForce( r_sun2, M_sun2, r_sun1, M_sun1 )+GravForce( r_earth, M_earth, r_sun1, M_sun1 )
    force2 = GravForce( r_sun1, M_sun1, r_sun2, M_sun2 )+GravForce( r_earth, M_earth, r_sun2, M_sun2 )
    p_earth=p_earth+forcee*dt
    r_earth=r_earth+(p_earth/M_earth)*dt
    p_sun1=p_sun1+force1*dt
    r_sun1=r_sun1+(p_sun1/M_sun1)*dt
    p_sun2=p_sun2+force2*dt
    r_sun2=r_sun2+(p_sun2/M_sun2)*dt
    t=t+dt
    earth.pos = r_earth
    sun1.pos = r_sun1
    sun2.pos = r_sun2
    trail.append( pos=r_earth)
    #print force
