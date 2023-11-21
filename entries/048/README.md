## Day 048

**<a href="https://css100.aniqa.dev#day-048">Live Demo</a>**

**Time to Complete**: 30 mins

**Key Concepts**: 3D cube with transformations

**Notes**:

## Markup for cube

A cube has six faces so I created a `<div>` to represent each side of a face: top, bottom, left, right, front and back. These cube faces are wrapped in a `<div>` that represents the entire shape:

```html
<div class="cube">
	<div class="cube-face cube--front"></div>
	<div class="cube-face cube--back"></div>
	<div class="cube-face cube--right"></div>
	<div class="cube-face cube--left"></div>
	<div class="cube-face cube--top"></div>
	<div class="cube-face cube--bottom"></div>
</div>
```

The `.cube` itself is nested in `div` that has the `perspective` applied to it. As mentioned on <a href="https://github.com/aniqatc/css-100/tree/main/entries/014">Day 14</a>, the `perspective` property creates a 3D space in which 3D transformations can take place. In order for the `perspective`'s depth to apply to all the child elements, `transform-style: preserve-3d` is applied to `.cube` ensure that all the `cube-face` transformations will be relative to the `.cube`.

## Styling for cube faces

Each of the cube faces are given the same height and width and are positioned on top of each other using `position: absolute`:

```css
.cube-face {
	width: 200px;
	height: 200px;
	position: absolute;
}
```

Each individual cube face is then rotated into position (as each cube face represents a different side). The sides that rest on top of the cube and at the bottom of the cube are rotated on the `X` axis, while, the rest are rotated on `Y` axis.

Note: I created a <a href="https://codepen.io/aniqatc/pen/gOqpYGz">Codepen visualizing transformations</a> that shows how an element moves/turns/changes based on the transformation being applied to it.

All of these cube faces will be translated on the `Z-axis` by `100px` because each cube face must be translated out from the center of their default position. The default position will have all of the cube faces resting at the center - intertwined with each other. Here's how it looks without `translateZ()` applied:

<img src="/entries/048/images/cube-without-translatez.png"/>

Since each cube face is `200px` wide, we can translate for half of that distance on the Z-axis which will push them out, allowing each cube faces's edges to be connected instead of being stacked at the center.

```css
/* no rotate */
.cube--front {
	transform: translateZ(100px);
}

/* Y-axis: pushed to the back (parallel to front) */
.cube--back {
	transform: rotateY(180deg) translateZ(100px);
}

/* Y-axis: turned to the right side */
.cube--right {
	transform: rotateY(90deg) translateZ(100px);
}

/* Y-axis: turned to the left side */
.cube--left {
	transform: rotateY(-90deg) translateZ(100px);
}

/* X-axis: rotated upwards */
.cube--top {
	transform: rotateX(90deg) translateZ(100px);
}

/* X-axis: rotated downwards */
.cube--bottom {
	transform: rotateX(-90deg) translateZ(100px);
}
```

## Cube rotate on hover

By default, I want the cube to be sitting an angle where we'll be able to see a little bit of the top, and two sides. To do so, I applied the following transformation:

- `translateZ` moves the entire cube 150px away from viewer and further into the screen
- `rotateX` rotates the cube around the horizontal axis
- `rotateZ` rotates the cube around the Z-axis (which is meant to be perpendicular to the screen)

```css
.cube {
	transform: translateZ(-150px) rotateX(75deg) rotateZ(-35deg);
}
```

When the cube is hovered over, the cube will spin around showing all of its other sides:

- `translateZ` moves the cube slightly closer to the view
- `rotateX` rotates the cube around the horizontal axis -- larger number means a larger rotation from its initial position
- `rotateZ` rotates the cube around the Z-axis changing its initial orientation

```css
.cube:hover {
	transform: translateZ(-100px) rotateX(-120deg) rotateZ(135deg);
}
```

## Reference

<a href="https://3dtransforms.desandro.com/cube">Intro to CSS 3D Transforms: Cube by David DeSandro</a>
