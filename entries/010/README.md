## Day 010

**<a href="https://css100.aniqa.dev#day-010">Live Demo</a>**

**Time to Complete**: 1 hour

**Key Concepts**: outline vs border property, conic-gradient(), animating SVG borders

**Notes**:

## Outline vs border property

I originally used `border` to create the white dotted border but unfortunately, there's no way to offset the border outwards or inwards the element that it is applied to. The workaround would be to add an empty `<div>` with the border styling and then use absolute positioning to position it exactly where I need it to be.

**But I discovered the `outline` and `outline-offset` property**

```css
.content-frame {
	outline: 3px dotted #fff;
	outline-offset: -10px;
}
```

I was still able to create a visual dotted border with the same styling that the `border` property provides but with the `outline` property, I can control how far outwards or how far inwards I want the border to be with `outline-offset`.

**Difference between `outline` and `border` property**:

- `border` is computed along with the width/height of the element; it's part of the box model (goes between margin & padding); can style individual sides
- `outline` is drawn outside of the element and do not take up any space; cannot style individual sides

## Conic-gradients

A conic gradient goes clockwise around a chosen point (default is the center) following a 360-degree path.

To create a loading spinner animation, my original idea was to use a `conic-gradient()` that would be stacked below other content only revealing the border. I would then try to animate the `conic-gradient()` by gradually increase the red color value until it reaches 100% (which would mean the color goes around its 360-degree path).

```css
.spin-border {
	background: conic-gradient(transparent 100%, #f85b5b 0%);
	height: 197px;
	width: 197px;
	border-radius: 50%;
	animation: conic-spin 3s linear infinite;
}
```

But the issue was that the animation `conic-spin` wasn't working how I wanted (even with different variations of the animation). I tried animating the `conic-gradient` property, starting with `0%` for the red color and `100%` for the transparent with the animation building up to `100%` for the red and `0%` for the transparent. But it wasn't animating - it was abruptly appearing on and off the screen like I was toggling `display: none` and `display: block` on it.

My other attempt to animate this was to rotate it from `0deg` to `360deg` and while it looks okay, it's not quite like the original design.

**So, I had to opt for an SVG trick instead - which is what the original design uses.**

## Animating SVG borders

For my SVG, I am using a `<circle>` element with a transparent fill and red stroke. The red stroke is what I animated into a continuous loading spinner animation.

```css
.spin-border {
	stroke: #f85b5b;
	stroke-width: 6;
	stroke-dasharray: 800;
	stroke-dashoffset: 800;
	stroke-linecap: round;
	fill: transparent;
	transform-origin: center center;
	transform: rotate(-90deg); /* start animation at north-most edge of circle */
	animation: spin 4s linear infinite;
}
```

- `stroke-dasharray` specifies the pattern of dashes AND gaps in the stroke (by setting mine to 800, I have 800 dashes but there's so many that it looks like a solid line)
- `stroke-dashoffset` specifies where the stroke pattern begins (by setting mine to 800, I am pushing the stroke away from its visible path)
  - Note: if I assigned a value less than the `stroke-dasharray` value, then we would still see some of the red stroke on the visible path. I don't want it to appear until I animate so that's why it needs to be the same value or more

```css
@keyframes spin {
	0%,
	100% {
		stroke-dashoffset: 800;
	}
	50% {
		stroke-dashoffset: 0;
	}
}
```

So, what's happening here is that we're starting off without the red stroke being visible because it was offset its entire length away from the visible path. When I animate it by setting the `stroke-dashoffset` to `0`, then the red stroke will come through its defined path, creating a smooth animation.
