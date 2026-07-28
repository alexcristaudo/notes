from vpython import *
import random

# * OBJECTS
ball1 = sphere(pos=vector(random.randint(-6, 6), random.randint(-6, 6),
               random.randint(-6, 6)), radius=0.5, color=color.cyan)
wallR = box(pos=vector(6, 0, 0), size=vector(0.2, 12, 12), color=color.green)
wallL = box(pos=vector(-6, 0, 0), size=vector(0.2, 12, 12), color=color.green)
wallB = box(pos=vector(0, 0, -6), size=vector(12, 12, 0.2), color=color.green)
wallTop = box(pos=vector(0, 6, 0), size=vector(12, 0.2, 12), color=color.green)
wallBot = box(pos=vector(0, -6, 0),
              size=vector(12, 0.2, 12), color=color.green)


ball2 = sphere(pos=vector(random.randint(-6, 6), random.randint(-6, 6),
               random.randint(-6, 6)), radius=0.5, color=color.red)

# * INITIAL VALUES
deltat = 0.005
t = 0
vscale = 0.1
ball1.velocity = vector(random.randint(
    0, 30), random.randint(0, 30), random.randint(0, 30))
#ball1.trail = curve(color=ball1.color)
varr1 = arrow(pos=ball1.pos, axis=vscale*ball1.velocity, color=color.yellow)

ball2.velocity = vector(random.randint(
    0, 30), random.randint(0, 30), random.randint(0, 30))
#ball2.trail = curve(color=ball2.color)
varr2 = arrow(pos=ball2.pos, axis=vscale*ball2.velocity, color=color.black)
isAlive = True

# * SIMULATING THE BALL BOUNCING UNTIL THEY COLLIDE
while isAlive:
    # This specifies that the while loop will not be executed more than 100 times per second
    rate(100)
    scene.autoscale = 0  # Turns off autoscaling

    # * COLLISION BETWEEN BALLS
    if ball1.pos.x - ball1.radius <= ball2.pos.x <= ball1.pos.x + ball1.radius and ball1.pos.y - ball1.radius <= ball2.pos.y <= ball1.pos.y + ball1.radius and ball1.pos.z - ball1.radius <= ball2.pos.z <= ball1.pos.z + ball1.radius:
        isAlive = False

    # * CHECKING FOR COLLISIONS:
    # LEFT AND RIGHT WALL
    if ball1.pos.x + ball1.radius > wallR.pos.x - wallR.size.x or ball1.pos.x - ball1.radius < wallL.pos.x + wallL.size.x:
        # A collision with the left or right wall only affects the x component of the velocity
        ball1.velocity.x = -ball1.velocity.x
        varr1.axis = vscale * ball1.velocity
    # TOP AND BOTTOM WALL
    if ball1.pos.y + ball1.radius > wallTop.pos.y - wallTop.size.y or ball1.pos.y - ball1.radius < wallBot.pos.y + wallBot.size.y:
        ball1.velocity.y = -ball1.velocity.y
        varr1.axis = vscale * ball1.velocity

    # FRONT AND BACK WALL
    if ball1.pos.z + ball1.radius > -(wallB.pos.z) - wallB.size.z or ball1.pos.z - ball1.radius < wallB.pos.z + wallB.size.z:
        ball1.velocity.z = -ball1.velocity.z
        varr1.axis = vscale*ball1.velocity

    # FOR BALL 2
    if ball2.pos.x + ball2.radius > wallR.pos.x - wallR.size.x or ball2.pos.x - ball2.radius < wallL.pos.x + wallL.size.x:
        # A collision with the left or right wall only affects the x component of the velocity
        ball2.velocity.x = -ball2.velocity.x
        varr2.axis = vscale * ball2.velocity
    # TOP AND BOTTOM WALL
    if ball2.pos.y + ball2.radius > wallTop.pos.y - wallTop.size.y or ball2.pos.y - ball2.radius < wallBot.pos.y + wallBot.size.y:
        ball2.velocity.y = -ball2.velocity.y
        varr2.axis = vscale * ball2.velocity

    # FRONT AND BACK WALL
    if ball2.pos.z + ball2.radius > -(wallB.pos.z) - wallB.size.z or ball2.pos.z - ball2.radius < wallB.pos.z + wallB.size.z:
        ball2.velocity.z = -ball2.velocity.z
        varr2.axis = vscale*ball2.velocity

    ball1.pos = ball1.pos + ball1.velocity*deltat  # rf = ri + ν∆t
    ball2.pos += ball2.velocity*deltat
    # ball1.trail.append(ball1.pos)
    # ball2.trail.append(ball2.pos)
    varr1.pos = ball1.pos
    varr2.pos = ball2.pos
    t = t + deltat  # Increase the total time elapsed
