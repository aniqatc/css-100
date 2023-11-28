## Day 055

**<a href="https://css100.aniqa.dev#day-055">Live Demo</a>**

**Time to Complete**: 40 mins

**Key Concepts**: conic-gradient(), transform-origin

**Notes**:

## `conic-gradient()`

```scss
.gradient {
	@include position-center();
	background: conic-gradient(
		from -135deg at center,
		#712c90 0deg,
		#c02e67 270deg,
		#fff 270deg -135deg
	);
	box-shadow: inset 2px 4px 12px rgba(0, 0, 0, 0.35);
	border-radius: 50%;
	height: 180px;
	width: 180px;
}
```

`conic-gradient()` creates a gradient that radiates from around the center of an element - similar to how slices in a pie are arranged.

- `from -135deg at center` defines the starting angle and the position the gradient should radiate from
- color stops:
  - `#712c90 0deg` defines the gradient start color
  - `#c02e67 270deg` defines the gradient end color
  - `#fff 270deg -135deg` defines that a white color will appear exactly between 270 degrees until -135 degrees - creating a sharp transition (it looks like a big slice of the circle is missing)

Ultimately, this gives the appearance of a thick border that is incomplete.

## `transform-origin` on the thermostat indicator

```scss
.temp-details {
	@include position-center();
	@include flex-center();
	gap: 2px;
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
	background: #fff;
	border-radius: 50%;
	height: 125px;
	width: 125px;
	cursor: pointer;
	overflow: hidden;

	& .indicator {
		height: 10px;
		width: 2px;
		background: #ccc;
		position: absolute;
		top: 0;
		// ----------------------
		transform-origin: 0 62.5px;
		transform: rotate(-40deg);
		transition: all 500ms ease 300ms;
	}

	&:hover .indicator {
		transform: rotate(-20deg);
	}
}
```

`transform-origin` property is used to set the point around which a transformation is applied. In this case, I want the thin line, meant to serve as an indicator, should move along the border of the `.temp-details` element. The circular `.temp-details` element is given a height and width of `125px` making its radius `62.5px`. The radius value minus the height of the indicator element is the value used to move the transform's origin point on the Y-axis: `transform-origin: 0 53px`.

This declaration means that the any rotation transformations that are applied to the `.indicator` element will move around the inner border of the circle.
