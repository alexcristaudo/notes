import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from matplotlib.colors import LightSource

# Create figure and 3D axis
fig = plt.figure(figsize=(10, 10))
ax = fig.add_subplot(111, projection='3d')

# Function to draw a sphere


def draw_sphere(ax, center, radius, color='lightsteelblue', alpha=0.7, resolution=30):
    u = np.linspace(0, 2 * np.pi, resolution)
    v = np.linspace(0, np.pi, resolution)

    x = center[0] + radius * np.outer(np.cos(u), np.sin(v))
    y = center[1] + radius * np.outer(np.sin(u), np.sin(v))
    z = center[2] + radius * np.outer(np.ones(np.size(u)), np.cos(v))

    # Create light source for shading
    ls = LightSource(azdeg=225, altdeg=45)

    # Plot the surface
    surf = ax.plot_surface(x, y, z, color=color, alpha=alpha, shade=True,
                           antialiased=True, linewidth=0)

    return surf, x, y, z

# Draw dashed cube (edges only)


def draw_cube(ax, center, size):
    # Define the vertices of the cube
    r = [center[0] - size/2, center[0] + size/2]
    s = [center[1] - size/2, center[1] + size/2]
    t = [center[2] - size/2, center[2] + size/2]

    # Define the edges
    edges = [
        # Bottom face
        [(r[0], s[0], t[0]), (r[1], s[0], t[0])],
        [(r[0], s[0], t[0]), (r[0], s[1], t[0])],
        [(r[1], s[0], t[0]), (r[1], s[1], t[0])],
        [(r[0], s[1], t[0]), (r[1], s[1], t[0])],

        # Top face
        [(r[0], s[0], t[1]), (r[1], s[0], t[1])],
        [(r[0], s[0], t[1]), (r[0], s[1], t[1])],
        [(r[1], s[0], t[1]), (r[1], s[1], t[1])],
        [(r[0], s[1], t[1]), (r[1], s[1], t[1])],

        # Connecting edges
        [(r[0], s[0], t[0]), (r[0], s[0], t[1])],
        [(r[1], s[0], t[0]), (r[1], s[0], t[1])],
        [(r[0], s[1], t[0]), (r[0], s[1], t[1])],
        [(r[1], s[1], t[0]), (r[1], s[1], t[1])]
    ]

    # Plot the edges
    for edge in edges:
        ax.plot3D(*zip(*edge), color='darkblue', linestyle='--', alpha=0.6)

# Function to draw dashed lines across a sphere to emphasize 3D structure


def draw_sphere_wireframe(ax, center, radius, num_lines=8):
    # Draw longitude lines (vertical great circles)
    for i in range(num_lines):
        angle = i * np.pi / num_lines
        u = np.linspace(0, 2 * np.pi, 100)

        # X-Z plane rotated around Y
        x = center[0] + radius * np.sin(u) * np.cos(angle)
        y = center[1] + radius * np.sin(u) * np.sin(angle)
        z = center[2] + radius * np.cos(u)
        ax.plot(x, y, z, 'k--', alpha=0.3, linewidth=0.8)

    # Draw latitude lines (horizontal circles)
    for i in range(1, num_lines//2):
        v = i * np.pi / num_lines
        u = np.linspace(0, 2 * np.pi, 100)

        x = center[0] + radius * np.cos(u) * np.sin(v)
        y = center[1] + radius * np.sin(u) * np.sin(v)
        z = center[2] + radius * np.cos(v) * np.ones_like(u)
        ax.plot(x, y, z, 'k--', alpha=0.3, linewidth=0.8)


# Set cube parameters
cube_center = [0, 0, 0]
cube_size = 2  # Length of cube edge
sphere_radius = 0.5  # Radius of smaller spheres

# Draw the dashed cube
draw_cube(ax, cube_center, cube_size)

# Define the cube vertices for placing spheres
vertices = []
for x in [-cube_size/2, cube_size/2]:
    for y in [-cube_size/2, cube_size/2]:
        for z in [-cube_size/2, cube_size/2]:
            vertices.append([x, y, z])

# Draw a sphere at each cube vertex
# for vertex in vertices:
#     draw_sphere(ax, vertex, sphere_radius)

# Draw one large sphere encompassing the entire cube
# The radius needs to be large enough to contain the cube
# For a cube with edge length 2, diagonal = 2√3
# So we need a radius slightly larger than √3 ≈ 1.732
large_sphere_radius = cube_size / 2  # Adding a little extra
sphere_surf, sphere_x, sphere_y, sphere_z = draw_sphere(
    ax, cube_center, large_sphere_radius, color='lavender', alpha=0.3)

# Add dashed wireframe lines to the large sphere
draw_sphere_wireframe(ax, cube_center, large_sphere_radius, num_lines=12)

# Set viewing angle and limits
ax.view_init(elev=20, azim=30)
ax.set_xlim(-2, 2)
ax.set_ylim(-2, 2)
ax.set_zlim(-2, 2)

# Remove axes for cleaner look
ax.set_axis_off()

# Set equal aspect ratio
ax.set_box_aspect([1, 1, 1])

plt.tight_layout()
plt.savefig('cube_with_spheres_and_wireframe_sphere.png',
            dpi=300, bbox_inches='tight', transparent=True)
plt.show()
