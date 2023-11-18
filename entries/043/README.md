## Day 043

**<a href="https://css100.aniqa.dev#day-043">Live Demo</a>**

**Time to Complete**: 20 mins

**Key Concepts**: box-shadow for glow effect

**Notes**:

In order to get the glow effect around the light bulb SVG, I used `box-shadow` on a `<div>` element to create a blurred shadow with a yellow hue:

```css
.glow {
	height: 70px;
	width: 65px;
	border-radius: 50%;
	box-shadow: 6px 8px 20px 20px rgba(255, 240, 0, 0.5);
	position: absolute;
	top: 2px;
}
```

`box-shadow` property takes up to 4 pixel values and then, a color -- explained from left-to-right:

- `x` offset - shifts shadow horizontally
- `y` offset - shifts shadow vertically
- blur radius - how blurred the shadow is
- spread radius - size of the shadow (optional value)
- color (with alpha for transparency)
