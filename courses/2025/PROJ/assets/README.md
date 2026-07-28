Make sure youre in the my-manim-environment: conda environment

Example running: manim -pql example.py HelloWorld
Format:
manim [OPTIONS] <file.py> <SceneClassName>

🔧 Commonly Used Options
| Option | Meaning | Example |
| ------------------- | ----------------------------- | --------------------------- |
| `-p` | Preview video after rendering | `-p` |
| `-q[lmhk]` | Quality: low/medium/high/4K | `-ql`, `-qm`, `-qh`, `-qk` |
| `--fps` | Frames per second | `--fps 60` |
| `--renderer=opengl` | Use OpenGL instead of Cairo | `--renderer=opengl` |
| `--output_file` | Set output file name | `--output_file myvideo.mp4` |

📌 Examples
Render in low quality and preview:
manim -pql example.py MyScene

Render in high quality (30fps, 1080p):
manim -pqh example.py MyScene

Render all scenes in the file:
manim -pql example.py

Render with OpenGL:
manim -pql --renderer=opengl example.py MyScene

✅ Pro Tip
To see all available options:
manim --help
