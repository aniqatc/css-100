# Day 017

**Time to Complete**: 35 mins

**Key Concepts**: rotations, absolute positioning, SVG polygons

**Notes**:

To create a Penrose triangle, I used an SVG to map out a polygon shape that would be used for each of the sides of the triangle. I originally tried using `clip-path` to create the polygon shape but mapping out coordinates for a `<polygon>` SVG element felt more intuitive.

I could've done a separate SVG polygon for each of the sides but I figured I could get away with using a single one that I use three times in the markup and then, I'd use CSS transforms to rotate them:

<img src="/entries/017/svg-rotation.png" style="max-width:400px">

At this point, I just needed to connect them together to create the triangular shape. I couldn't position the SVG `<polygon>` directly so I had to wrap each of the `<polygon>` elements in their own `<svg>` tag and then, I positioned those tags with absolute positioning instead. I used Chrome's Dev Tools to get the exact values to position them with `top` and `left`.

Now, the only issue was that there was a piece of the polygon shape sticking out at each vertice. So, I wrapped the entire element and used `overflow: hidden` to cut off any edge that was sticking out -- finally giving me a complete Penrose triangle.
