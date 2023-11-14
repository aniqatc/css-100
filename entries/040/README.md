## Day 040

**<a href="https://css100.aniqa.dev#day-040">Live Demo</a>**

**Time to Complete**: 25 mins

**Key Concepts**: transform-origin with scale()

**Notes**:

Each of the images in the gallery scale up until it fills the frame entirely, covering the other grid items. To trigger this, I use JavaScript to toggle the active property.

```css
.active {
	transform: scale(3.1);
}
```

The only other detail that matters is to make sure that each image scales up while respecting its edges. The `transform-origin` property defines the point around which a transformation is applied and by default, transformations occur from the center of the element. By changing the value based on where the image is in the grid, we can specify the point from which each image should scale - controlling the direction and origin.

Here's how I defined it:

```css
img:nth-child(1) {
	transform-origin: top left;
}

img:nth-child(2) {
	transform-origin: top center;
}

img:nth-child(3) {
	transform-origin: top right;
}

img:nth-child(4) {
	transform-origin: center left;
}

img:nth-child(5) {
	transform-origin: center center;
}

img:nth-child(6) {
	transform-origin: center right;
}

img:nth-child(7) {
	transform-origin: bottom left;
}

img:nth-child(8) {
	transform-origin: bottom center;
}

img:nth-child(9) {
	transform-origin: bottom right;
}
```
