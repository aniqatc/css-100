## Day 055

**<a href="https://css100.aniqa.dev#day-055">Live Demo</a>**

**Time to Complete**: 40 mins

**Key Concepts**: conic-gradient()

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
