from vpython import *

# constants
oofpez = 9e9
qproton = 1.6e-19
scale = 5e-20
d = 0.5e-9

# objects
minus = sphere(pos=vector(0.1e-9, 0, 0), radius=0.3e-10,
               color=vector(0, 0, 1), charge=-qproton)
plus = sphere(pos=vector(-0.1e-9, 0, 0), radius=0.3e-10,
              color=vector(1, 0, 0), charge=qproton)
charges = [minus, plus]
locations = []

for i in [-2, -1, 1, 2]:
    locations += [vector(i*d, 0, 0), vector(0, i*d, 0), vector(
        i*d, i*d, i*d), vector(0, 0, i*d)]

for loc in locations:
    Enet = vector(0, 0, 0)
    for i in charges:
        r = loc - i.pos
        rmag = sqrt(r.x**2 + r.y**2 + r.z**2)
        rhat = r/rmag
        E = oofpez * i.charge * rhat / rmag**2
        Enet += E
        print('relative position vector is', r)
        print('magnitude of r is', rmag)
        print('unit vector rhat is', rhat)
    print(Enet)
    Earrow = arrow(pos=loc, axis=scale*Enet,
                   color=color.orange, shaftwidth=0.02e-9)
