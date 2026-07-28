import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from mpl_toolkits.mplot3d.art3d import Poly3DCollection
import matplotlib.colors as mcolors

# Create figure and 3D axis
fig = plt.figure(figsize=(12, 12))
ax = fig.add_subplot(111, projection='3d')

# Function to draw a wireframe sphere


def draw_wireframe_sphere(ax, center, radius, num_lines=12, color='darkblue', alpha=0.3, linestyle='--'):
    # Draw longitude lines (vertical great circles)
    for i in range(num_lines):
        angle = i * np.pi / num_lines
        u = np.linspace(0, 2 * np.pi, 100)

        # X-Z plane rotated around Y
        x = center[0] + radius * np.sin(u) * np.cos(angle)
        y = center[1] + radius * np.sin(u) * np.sin(angle)
        z = center[2] + radius * np.cos(u)
        ax.plot(x, y, z, color=color, linestyle=linestyle,
                alpha=alpha, linewidth=0.8)

    # Draw latitude lines (horizontal circles)
    for i in range(1, num_lines//2):
        v = i * np.pi / num_lines
        u = np.linspace(0, 2 * np.pi, 100)

        x = center[0] + radius * np.cos(u) * np.sin(v)
        y = center[1] + radius * np.sin(u) * np.sin(v)
        z = center[2] + radius * np.cos(v) * np.ones_like(u)
        ax.plot(x, y, z, color=color, linestyle=linestyle,
                alpha=alpha, linewidth=0.8)

# Function to draw a transparent sphere


def draw_transparent_sphere(ax, center, radius, color='lavender', alpha=0.15, resolution=30):
    u = np.linspace(0, 2 * np.pi, resolution)
    v = np.linspace(0, np.pi, resolution)

    x = center[0] + radius * np.outer(np.cos(u), np.sin(v))
    y = center[1] + radius * np.outer(np.sin(u), np.sin(v))
    z = center[2] + radius * np.outer(np.ones(np.size(u)), np.cos(v))

    # Plot the surface
    surf = ax.plot_surface(x, y, z, color=color, alpha=alpha, shade=True,
                           antialiased=True, linewidth=0)

    return surf

# Function to draw a solid cube


def draw_solid_cube(ax, center, size, color='lightsteelblue', alpha=0.7, edgecolor='gray'):
    # Define the vertices of the cube
    r = [center[0] - size/2, center[0] + size/2]
    s = [center[1] - size/2, center[1] + size/2]
    t = [center[2] - size/2, center[2] + size/2]

    # Define the vertices of the cube
    vertices = [
        [r[0], s[0], t[0]],
        [r[1], s[0], t[0]],
        [r[1], s[1], t[0]],
        [r[0], s[1], t[0]],
        [r[0], s[0], t[1]],
        [r[1], s[0], t[1]],
        [r[1], s[1], t[1]],
        [r[0], s[1], t[1]]
    ]

    # Define the faces using indices of vertices
    faces = [
        [0, 1, 2, 3],  # bottom
        [4, 5, 6, 7],  # top
        [0, 1, 5, 4],  # front
        [2, 3, 7, 6],  # back
        [0, 3, 7, 4],  # left
        [1, 2, 6, 5]   # right
    ]

    # Create the polygon collection
    poly3d = [[vertices[idx] for idx in face] for face in faces]
    collection = Poly3DCollection(
        poly3d, linewidths=0.5, edgecolors=edgecolor, alpha=alpha)
    collection.set_facecolor(color)

    # Add the collection to the plot
    ax.add_collection3d(collection)


# Set sphere parameters
sphere_center = [0, 0, 0]
sphere_radius = 1.0

# Draw a wireframe sphere for reference
draw_wireframe_sphere(ax, sphere_center, sphere_radius)

# Draw a transparent sphere for reference
draw_transparent_sphere(ax, sphere_center, sphere_radius)

# Parameters for small cubes
small_cube_size = 0.15  # Size of the small cubes
resolution = 20  # Higher values create more cubes and better approximation

# Calculate positions for small cubes in a grid
grid_size = sphere_radius * 2
grid_half = grid_size / 2
grid_step = grid_size / resolution

positions = []
centers = []

# Create positions in a grid
for x in np.linspace(-grid_half + grid_step/2, grid_half - grid_step/2, resolution):
    for y in np.linspace(-grid_half + grid_step/2, grid_half - grid_step/2, resolution):
        for z in np.linspace(-grid_half + grid_step/2, grid_half - grid_step/2, resolution):
            # Check if this cube is inside or near the sphere surface
            distance = np.sqrt(x**2 + y**2 + z**2)

            # Only include cubes whose centers are within a shell near the sphere surface
            # The shell thickness is determined by the small_cube_size to create a good visual
            if sphere_radius - small_cube_size <= distance <= sphere_radius + small_cube_size*0.5:
                positions.append([x, y, z])
                centers.append([x, y, z])

# Create a gradient color effect based on position
core_color = np.array(mcolors.to_rgb('royalblue'))
edge_color = np.array(mcolors.to_rgb('lightsteelblue'))

# Calculate distance from center for each position (normalized)
distances = [np.sqrt(x**2 + y**2 + z**2) /
             sphere_radius for x, y, z in positions]

# Draw all the small cubes with color based on distance
for position, distance in zip(positions, distances):
    # Normalize the distance for coloring
    norm_distance = min(max(distance - 0.9, 0) / 0.2, 1.0)

    # Interpolate between core color and edge color
    color = edge_color * norm_distance + core_color * (1-norm_distance)

    # Calculate alpha based on how close the cube is to the sphere surface
    # Cubes exactly on the surface get maximum alpha
    # Will be 1.0 at distance=1.0, decreasing as we move away
    surface_proximity = 1.0 - abs(distance - 1.0) * 2
    alpha = 0.8 * max(0, surface_proximity)

    draw_solid_cube(ax, position, small_cube_size,
                    color=color, alpha=alpha + 0.2)

# Set viewing angle and limits with a bit more margin
margin = 1.3
ax.view_init(elev=20, azim=30)
ax.set_xlim(-sphere_radius*margin, sphere_radius*margin)
ax.set_ylim(-sphere_radius*margin, sphere_radius*margin)
ax.set_zlim(-sphere_radius*margin, sphere_radius*margin)

# Remove axes for cleaner look
ax.set_axis_off()

# Set equal aspect ratio
ax.set_box_aspect([1, 1, 1])

# Add a title
plt.title('Sphere Approximation with Smaller Cubes', fontsize=16, pad=20)

plt.tight_layout()
plt.savefig('sphere_approximation_with_cubes.png',
            dpi=300, bbox_inches='tight', transparent=True)
plt.show()
