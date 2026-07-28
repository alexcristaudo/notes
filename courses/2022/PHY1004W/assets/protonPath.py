from vpython import *

# constants
oofpez = 9e9
qproton = 1.6e-19
scale = 5e-20
d = 0.5e-9

proton = sphere(pos=vector(0, 0.3e-9, 0),
                radius=0.2e-10, color=vector(0, 1, 0), charge=1.6e-19, m=1.7e-27, p=vector(0, 0, 0), make_trail=True)

minus = sphere(pos=vector(0.1e-9, 0, 0), radius=0.3e-10,
               color=vector(0, 0, 1), charge=-qproton)
plus = sphere(pos=vector(-0.1e-9, 0, 0), radius=0.3e-10,
              color=vector(1, 0, 0), charge=qproton)
charges = [minus, plus]

dt = 1e-17
t = 0
while t < 1.5e-12:
    rate(1000)
    t += dt
    E = vector(0, 0, 0)

    for q in charges:
        r = proton.pos - q.pos
        E = E + oofpez*q.charge*norm(r)/mag(r)**2

    F = proton.charge*E
    proton.p += F*dt
    proton.pos += (proton.p/proton.m)*dt
