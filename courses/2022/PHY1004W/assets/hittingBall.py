from vpython import *
import math

ball = sphere(pos=vector(0, 0, 0), radius=10, color=color.yellow)
dt = 0.01

angleHit = 45
force = 100
contactTime = 1
ball.m = 5
ball.p = force*contactTime
ball.v = ball.p/ball.m
ball.v = ball.v * vector(math.cos(angleHit), math.sin(angleHit), 0)
ball.trail = curve(pos=ball.pos, color=color.yellow)

while ball.pos.y >= 0:
    rate(100)
    ball.pos += ball.v*dt
    ball.trail.append(ball.pos)
    ball.v += vector(0, -9.8, 0)*dt
