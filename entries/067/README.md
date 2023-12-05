## Day 067

**<a href="https://css100.aniqa.dev#day-067">Live Demo</a>**

**Time to Complete**: 1 hour

**Key Concepts**: styling parasol, 3D transformations, absolute positioning

**Notes**:

## Building the parasol pole and top

#### `.parasol` parent

All of the styles for both the parasol and its shadow are nested within the `.parasol` element. This element is used to position the overall object in the desired position using absolute positioning and is slightly tilted using `rotateX()` and `rotateY()` to give it the 3D appearance. Additionally, `transform-style: preserve-3d` is specified here because I want any nested elements of `.parasol` to be relative to `.parasol` whenever a transformation is applied.

- `rotateX(75deg)` => rotates the object around X-axis - parasol appears to lean towards the viewer showing the top of the parasol
- `rotateY(-20deg)` => rotates element around Y-axis - tilts the parasol to the left at angle (it's no longer perfectly straight)

```scss
.parasol {
	position: absolute;
	top: calc(50% - 150px);
	left: calc(50% - 200px);
	transform-style: preserve-3d;
	transform: rotateX(75deg) rotateY(-20deg);
}
```

#### Parasol's `.pole`

The `.pole` of the `.parasol` is given a 3D rotation in order to align it with the tilt of the `.parasol`. Additionally, it's translated on the Z-axis because part of the pole overlaps with the `.parasol`'s `.top` element and `z-index` can't fix it. Using `translateZ()` pushes the `.pole` away from the viewer and away from the `.top` of the `.parasol`. With some absolute positioning, it is placed at the center of the `.top` element making it look like it is holding the `.parasol` up.

#### Parasol's `.top`

The `.top` element represents the `.parasol`'s fabric. This is given `transform-style: preserve-3d` as well because I need the individual triangles that make up the `.top` to be relative to `.top` specifically.

The `.triangle` elements inside `.top` are created using individual `border` properties. The following values create 12 isosceles triangles that are rotated into different positions to create a complete circle:

Additionally - the `rotateX(-25deg)` is applied so that the base of the triangle can be pushed downwards and the point of the triangle can point slightly upwards - creating the illusion of an open umbrella:

```scss
.triangle {
	position: absolute;
	top: 100px;
	left: 80px;
	border-style: solid;
	border-width: 0 19px 80px 19px;
	transform-origin: center top;

	&:nth-of-type(odd) {
		border-color: transparent transparent #fff transparent;
	}

	&:nth-of-type(even) {
		border-color: transparent transparent #d70707 transparent;
	}

	@for $num from 1 through 12 {
		&:nth-of-type(#{$num}) {
			transform: rotate(360deg / 12 * $num) rotateX(-25deg);
		}
	}
}
```

#### Parasol's shadow

To create the shadow of the `.parasol`, I copied the styles for `.pole` and `.top` and its nested `.triangle` properties and applied it to `shadow-pole` and `shadow-top`. I adjusted the colors and the positioning until it was placed in a position that looked like a natural shadow of the rotating `.parasol`. A `filter` with the `blur()` function was applied to shadow to reduce the sharp lines.
