# CRSALE010
# Alexander Cristaudo
# 02 August 2022
# A simulation of an extended body with a thruster that exerts a tangential force

from vpython import *
from math import pi

theta = 3*pi/2
theta_0 = 3*pi/2
omega = 0
omega_0 = 0
dt = 0.01
t = 0.0
c = 0.7
M = 3.2
R = 0.87
F = 3.4
pcm = vector(0, 0, 0)
rcm = vector(0, 0, 0)
trail = curve(pos=rcm, color=color.yellow, radius=0.05)
vx = gcurve()
vy = gcurve()
thrustpoint = curve(pos=rcm + vector(R*cos(theta), R *
                    sin(theta), 0), color=color.green, radius=0.03)


while t < 10.0:
    rate(100)
    t = t + dt
    Fvector = vector(F*cos(theta + pi/2), F*sin(theta + pi/2), 0)
    omega = omega + (F*R / (c*M*R**2))*dt
    theta = theta_0 + omega_0*t + (F*R)/(c*M*R**2)*t**2
    pcm = pcm + Fvector*dt
    rcm = rcm + (pcm / M) * dt

    trail.append(pos=rcm)
    vx.plot(pos=(t, pcm.x/M))
    vy.plot(pos=(t, pcm.y/M))
    thrustpoint.append(pos=rcm + vector(R*cos(theta), R*sin(theta), 0))
v_f = mag((pcm)/M)
Ktrans = (M*v_f**2)/2
Krot = (c*M*R**2)*(omega**2)/2
print("Translational Kinetic Energy: " + str(Ktrans) +
      "\nRotational Kinetic Energy: " + str(Krot))
