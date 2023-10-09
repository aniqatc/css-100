# Day 003

**Time to Complete**: ~2 hour

**Key Concepts**: clip-path property, animations, transform-origin

**Notes**:

**For `clip-path` property**:

- `clip-path` allows us to create custom shapes for an element (we can use this on images, to create shapes, to create unique borders on sections)
  - `clip-path: inset()` rectangle
  - `clip-path: circle()` circle based on radius & position
  - `clip-path: ellipse()` ellipse based on two radii & position
  - `clip-path: polygon()` using set of verticies (where corners of the shape meet)
  - `clip-path: path()` svg path

For this particular challenge, I used `clip-path: polygon()` with three vertices to represent the three corners of a triangle; these values were separated by a `,`:

```css
.triangle {
	clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
```

- First two values (`50% 0%`) represents the top point of the triangle:
  - `50%` horizontally (middle of element's width)
  - `0%` vertically (top edge of element)
- Second two values (`0% 100%`) represents the second point, left edge of the triangle.
  - `0%` horizontally (left edge)
  - `100%` vertically (bottom edge)
- Third two values (`100% 100%`) represents the third point, right edge of the triangle.
  - `100%` horizontally (right edge)
  - `100%` vertically (bottom edge)

Note: You can keep adding additional 'points' to create other shapes (e.g. 4 vertices is 8 values resulting in a 4-sided shape (parallelogram) OR 6 vertices is 12 values resulting in a 6 sided-shape (hexagon)).

<a href="https://bennettfeely.com/clippy/">Here's the CSS clip-path tool</a> that I used to create my pyramid shape along with the animation that moves the shadow across the frame.

**For `transform-origin` property**:

I specifically used `transform-origin` on the pyramid's shadow element so that any transformations that occur will happen **along** the edge that I specified (in this case, I used `center top` so that the top edge of the pyramid's shadow would be aligned with the pyramid at its bottom edge - any rotations and movements would happen below that point).

- `transform-origin` is used to specify the point around which an element is transformed, rotated, scaled, skewed (anything using the `transform` property)
- `transform-origin: center top` = `center` represents the horizontal position (x-axis) and `top` represents vertical (y-axis) position

---

**Note**: I don't feel great about the sun's movement across the frame, it looks way more smooth on the original concept. I'll likely come back to this to improve it once I get more practice with using `transform` and animations together.
