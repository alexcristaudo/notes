from vpython import *
# GlowScript 3.1 VPython

# Written by Bruce Sherwood, licensed under Creative Commons 4.0.
# All uses permitted, but you must not claim that you wrote it, and
# you must include this license information in any copies you make.
# For details see http://creativecommons.org/licenses/by/4.0

scene.width = 1000
scene.height = 400
scene.fov = 0.001
scene.range = 4
scene.visible = False


def disk(pos=vector(0, 0, 0), radius=1, diskcolor=color.red):
    D = 2*radius
    T = 0.1*R
    stripe = color.yellow
    objects = []
    # center of disk is at z=0
    objects.append(cylinder(pos=pos+vector(0, 0, -W/2),
                   axis=vector(0, 0, W), radius=radius, color=diskcolor))
    objects.append(box(pos=pos+vector(0, 0, W/2+T/2),
                   size=vector(D, T, T), color=stripe))
    objects.append(box(pos=pos+vector(0, 0, W/2+T/2),
                   size=vector(T, D, T), color=stripe))
    diskobj = compound(objects)
    diskobj.rotate(axis=vector(0, 0, 1), angle=0.07*pi)
    return diskobj


xi = -8      # starting pos.x
yi = 2       # starting pos.y of upper (rotating) disk
a = 1        # linear acceleration
alpha = -0.6  # angular acceleration
R = 1.2      # radius of disk
L = 1.5*R    # initial length of string
r = 0.2*R    # radius of ball marking end of string
W = 0.2      # thickness of disk
F = 2        # length of force arrow
rs = .03*R   # radius of string
dt = 0.005
rot = disk(vector(0, 0, 0), R, color.magenta)
wrap = ring(pos=vector(0, 0, 0), axis=vector(
    0, 0, 1), radius=R+rs, thickness=rs)
nonrot = disk(vector(0, 0, 0), R, color.green)
rot.ball = sphere(radius=r, color=color.yellow)
nonrot.ball = sphere(radius=r, color=color.yellow)
rot.string = cylinder(radius=rs)
nonrot.string = cylinder(axis=vector(L-R, 0, 0), radius=rs)
rot.force = arrow(axis=vector(F, 0, 0), color=color.red)
nonrot.force = arrow(axis=vector(F, 0, 0), color=color.red)
instruct = label(pos=vector(xi, 0, 0), text='Click to start', box=0)

clicked = False


def getclick():
    global clicked
    clicked = True


scene.bind('click', getclick)

first = True
while True:
    rate(100)
    if first:
        first = False
        run = False
        v = 0
        omega = 0
        rot.pos = vector(xi, yi, 0)
        wrap.pos = rot.pos
        nonrot.pos = vector(xi, -yi, 0)
        rot.ball.pos = rot.pos+vector(L, R, 0)
        nonrot.ball.pos = nonrot.pos+vector(L, 0, 0)
        rot.string.pos = rot.pos+vector(0, R+rs, 0)
        rot.string.axis = vector(L, 0, 0)
        nonrot.string.pos = nonrot.pos+vector(R, 0, 0)
        rot.force.pos = rot.ball.pos
        nonrot.force.pos = nonrot.ball.pos
        scene.visible = True

    if not run:
        if not clicked:
            continue
        else:
            clicked = False
            run = True
            instruct.visible = False

    if rot.pos.x >= 0:
        instruct.text = 'Click to restart'
        instruct.visible = True
        if not clicked:
            continue
        first = True
        continue

    v += a*dt
    omega += alpha*dt
    da = omega*dt
    dx = vector(v*dt, 0, 0)
    rot.pos = rot.pos+dx
    nonrot.pos = nonrot.pos+dx
    wrap.pos = rot.pos
    rot.rotate(axis=vector(0, 0, 1), angle=da)
    wrap.rotate(axis=vector(0, 0, 1), angle=da)
    rot.ball.pos = rot.ball.pos+dx+vector(-R*da, 0, 0)
    nonrot.ball.pos = nonrot.ball.pos+dx
    rot.string.pos = rot.string.pos+dx
    rot.string.axis = rot.ball.pos-rot.string.pos
    nonrot.string.pos = nonrot.string.pos+dx
    rot.force.pos = rot.ball.pos
    nonrot.force.pos = nonrot.ball.pos
