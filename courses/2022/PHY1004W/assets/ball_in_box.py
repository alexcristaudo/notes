from vpython import *

# * OBJECTS
ball = sphere(pos=vector(0, 0, 0), radius=0.5, color=color.cyan)
wallR = box(pos=vector(6, 0, 0), size=vector(0.2, 12, 12), color=color.green)
wallL = box(pos=vector(-6, 0, 0), size=vector(0.2, 12, 12), color=color.green)
wallB = box(pos=vector(0, 0, -6), size=vector(12, 12, 0.2), color=color.green)
wallTop = box(pos=vector(0, 6, 0), size=vector(12, 0.2, 12), color=color.green)
wallBot = box(pos=vector(0, -6, 0),
              size=vector(12, 0.2, 12), color=color.green)


# * INITIAL VALUES
deltat = 0.005
t = 0
vscale = 0.1
ball.velocity = vector(25, 5, 15)
ball.trail = curve(color=ball.color)
varr = arrow(pos=ball.pos, axis=vscale*ball.velocity, color=color.yellow)


# * SIMULATING THE BALL BOUNCING
while True:
    # This specifies that the while loop will not be executed more than 100 times per second
    rate(100)
    scene.autoscale = 0  # Turns off autoscaling

    # * CHECKING FOR COLLISIONS:
    # LEFT AND RIGHT WALL
    if ball.pos.x + ball.radius > wallR.pos.x - wallR.size.x or ball.pos.x - ball.radius < wallL.pos.x + wallL.size.x:
        # A collision with the left or right wall only affects the x component of the velocity
        ball.velocity.x = -ball.velocity.x
        varr.axis = vscale * ball.velocity

    # TOP AND BOTTOM WALL
    if ball.pos.y + ball.radius > wallTop.pos.y - wallTop.size.y or ball.pos.y - ball.radius < wallBot.pos.y + wallBot.size.y:
        ball.velocity.y = -ball.velocity.y
        varr.axis = vscale * ball.velocity

    # FRONT AND BACK WALL
    if ball.pos.z + ball.radius > -(wallB.pos.z) - wallB.size.z or ball.pos.z - ball.radius < wallB.pos.z + wallB.size.z:
        ball.velocity.z = -ball.velocity.z
        varr.axis = vscale*ball.velocity

    ball.pos = ball.pos + ball.velocity*deltat  # rf = ri + ν∆t
    ball.trail.append(ball.pos)
    varr.pos = ball.pos
    t = t + deltat  # Increase the total time elapsed
