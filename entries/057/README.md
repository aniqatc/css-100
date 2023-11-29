## Day 057

**<a href="https://css100.aniqa.dev#day-057">Live Demo</a>**

**Time to Complete**: 1.5 hours

**Key Concepts**: icosahedron 3D shape

**Notes**:

## Setting 3D space

In order to create any type of 3D object with 3D transformations, I have to first initialize the space to support 3D visualizations. To do so, I applied `perspective: 1000px` to the parent element, which sets how deep the 3D space is.

To the element that is a direct child (`.shape`) of this parent, I applied `transform-style: preserve-3d`. This ensures that child elements in the container will have 3D transformations that are relative to the parent container. Without this, the elements will remain flat and child elements will be treated in a 2D plane (which is the default behavior). Any child (`.side`) of `.shape` that uses a `transform` will now be transformed within a 3D space.

## Hover transition

The `.shape` class represents the overall icosahedron shape, holding all the `.side` elements together. This element is slightly tilted using `transform: rotateX() rotateY()`. On the `:hover` state, the shape is turned an additional `360deg` on the `X` and `Y` axis, essentially giving the appearance that the object is spinning and showing all of its faces.

```scss
.shape {
	transform-style: preserve-3d;
	transform: rotateX(30deg) rotateY(30deg);
	height: 280px;
	width: 160px;
	cursor: pointer;
	transition: all 4s ease-in-out;

	&:hover {
		transform: rotateX(-390deg) rotateY(-390deg);
	}
}
```

## Individual side values

I must confess, this is the first time in **57** days that I had to copy exact values from the original design -- while I understand why the properties were used and their overall purpose, it was very hard to find the formula to calculate the transform values myself (I asked ChatGPT 4 and it kept telling me to use Three.js and that it's 'complex'...). So the best I could do in this case was to reverse-engineer it.

**Dimensions of each `.side`**

All 20 triangles must be equilateral. `border-left/right` properties set the sides of triangle - determining the width (`80px`) of the triangle. `border-top/bottom` sets the height of the triangle - this value is based on the formula to calculate the height of an equilateral triangle: `width * √3/2` which would come out to `138.56px`.

```scss
.side {
	position: absolute;
	filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.2));
	transform-origin: 50% 100%;
	border-left: 80px solid transparent;
	border-right: 80px solid transparent;

	@for $num from 1 through 12 {
		&:nth-child(#{$num}) {
			border-bottom: 138.56px solid hsla(200, random(75), random(75), 0.75);
			border-top: 0;
		}
	}

	@for $num from 13 through 20 {
		&:nth-child(#{$num}) {
			border-top: 138.56px solid hsla(200, random(75), random(75), 0.75);
			border-bottom: 0;
		}
	}
}
```

**Understanding the `.side` `@for` loop values:**

- 1 through 12 (red in example gif)
  - the height is applied to `border-bottom`
  - the top and bottom triangles of icosahedron
  - `border-bottom` forms base of the triangle at the bottom and point of triangle is upwards
- 13 through 20 (blue in example gif)
  - the height is applied to `border-top`
  - the sides of the icosahedron and connect the top & bottom faces
  - bases are not aligned at the bottom but are aligned at the top instead

<img src="/entries/057/images/icosahedron-sides.gif"/>

**Positioning of each `.side`**

Here's the values of each `.side` element that represents a face of the icosahedron shape:

```scss
&:nth-child(1) {
	transform: translateZ(129.2px) rotateZ(90deg) rotateX(159.095deg);
}

&:nth-child(2) {
	transform: translateZ(129.2px) rotateZ(-90deg) rotateX(159.095deg);
}

&:nth-child(3) {
	transform: translateZ(-129.2px) rotateZ(90deg) rotateX(-159.095deg);
}

&:nth-child(4) {
	transform: translateZ(-129.2px) rotateZ(-90deg) rotateX(-159.095deg);
}

&:nth-child(5) {
	transform: rotateY(-90deg) translateZ(129.2px) rotateX(20.905deg);
}

&:nth-child(6) {
	transform: rotateY(-90deg) translateZ(129.2px) rotateX(159.095deg);
}

&:nth-child(7) {
	transform: rotateY(-90deg) translateZ(-129.2px) rotateX(-20.905deg);
}

&:nth-child(8) {
	transform: rotateY(-90deg) translateZ(-129.2px) rotateX(-159.095deg);
}

&:nth-child(9) {
	transform: translateY(129.2px) rotateX(69.095deg);
}

&:nth-child(10) {
	transform: translateY(129.2px) rotateX(-69.095deg);
}

&:nth-child(11) {
	transform: translateY(-129.2px) rotateX(110.905deg);
}

&:nth-child(12) {
	transform: translateY(-129.2px) rotateX(-110.905deg);
}

&:nth-child(13) {
	transform: translateY(-129.2px) translateX(80px) rotateX(-135deg) rotateY(-35.264deg) rotateZ(-8deg);
}

&:nth-child(14) {
	transform: translateY(-129.2px) translateX(80px) rotateX(135deg) rotateY(35.264deg) rotateZ(-8deg);
}

&:nth-child(15) {
	transform: translateY(-129.2px) translateX(-80px) rotateX(-135deg) rotateY(35.264deg) rotateZ(8deg);
}

&:nth-child(16) {
	transform: translateY(-129.2px) translateX(-80px) rotateX(135deg) rotateY(-35.264deg) rotateZ(8deg);
}

&:nth-child(17) {
	transform: translateY(129.2px) translateX(80px) rotateX(45deg) rotateY(-35.264deg) rotateZ(-8deg);
}

&:nth-child(18) {
	transform: translateY(129.2px) translateX(80px) rotateX(-45deg) rotateY(35.264deg) rotateZ(-8deg);
}

&:nth-child(19) {
	transform: translateY(129.2px) translateX(-80px) rotateX(45deg) rotateY(35.264deg) rotateZ(8deg);
}

&:nth-child(20) {
	transform: translateY(129.2px) translateX(-80px) rotateX(-45deg) rotateY(-35.264deg) rotateZ(8deg);
}
```

Here's what each transformation is doing:

**`translate()`** values are related to the radius of the circumscribed sphere around the icosahedron (as if the shape was within a sphere):

- `translateZ()`: moves the side forward or backward (depth)
- `translateY()`: adjust position along Y-axis (vertical)
- `translateX()`: adjust position along X-axis (horizontal)
  **`rotate()`** values are related to the geometric angles between the faces of the icosahedron:
- `rotateX()`: rotates face around X-axis (horizontal) = tilting faces up or down
- `rotateY()`: rotates face around Y-axis (vertical) = turning faces left or right
- `rotateZ()`: rotates face around Z-axis (depth) = twist faces into correct orientation so that edges align

## References

**Other challenges I completed involving 3D transforms**:

- <a href="https://github.com/aniqatc/css-100/tree/main/entries/014">Day 014: Byciclopter, Flip Card</a>
- <a href="https://github.com/aniqatc/css-100/tree/main/entries/018">Day 018: Elastic Bounce</a>
- <a href="https://github.com/aniqatc/css-100/tree/main/entries/037">Day 037: Carousel</a>
- <a href="https://github.com/aniqatc/css-100/tree/main/entries/048">Day 048: 3D Cube</a>

**Inspiration and guides**

- <a href="https://threejs.org/docs/#api/en/geometries/IcosahedronGeometry">Three.js Documentation: IcosahedronGeometry</a> (did not use this but good to have saved for the future)
- <a href="https://codepen.io/mblase75/pen/BjBmzE">Codepen by M Blase: CSS 3D Spinning Icosahedron w/ Commented Calculations</a>
- <a href="https://codepen.io/roydigerhund/pen/QNqZWp">Codepen by Matthias Martin: Original Icosahedron for Day 57</a>
