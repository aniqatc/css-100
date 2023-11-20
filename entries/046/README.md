## Day 046

**<a href="https://css100.aniqa.dev#day-046">Live Demo</a>**

**Time to Complete**: 50 mins

**Key Concepts**: transform-origin, staggered rotating animation

**Notes**:

This challenge is for a multi-ring animation with several dots inside each ring. Each ring and each dot have their own unique scaling, rotation, and color properties.

## General styling

For the rings and dots, both are centered using absolute positioning. The dots are set at `10px` by `10px` and are made circular by the `border-radius` property.

## `transform-origin` on the dots

I used `transform-origin: 0 100px` combined with `transform: translateY(-100px)` to position each dot 100 pixels outward from the center of the ring, which places them on the ring's circumference. This ensures that the rotation of each dot occurs around a point 100px vertical from its original center and **on** the ring's circumference (instead of within the dot's space).

## Rotation for dots

Each dot is spaced out evenly around the ring by rotating each by `30deg`.

```css
.ring {
	/* .dot classes will inherit from .ring */
	--position: -100px;
}
/* Positioning the individual dots inside each ring */
.dot:nth-child(1) {
	transform: translateY(var(--position)) rotate(0deg);
}
.dot:nth-child(2) {
	transform: translateY(var(--position)) rotate(30deg);
}
.dot:nth-child(3) {
	transform: translateY(var(--position)) rotate(60deg);
}
.dot:nth-child(4) {
	transform: translateY(var(--position)) rotate(90deg);
}
.dot:nth-child(5) {
	transform: translateY(var(--position)) rotate(120deg);
}
.dot:nth-child(6) {
	transform: translateY(var(--position)) rotate(150deg);
}
.dot:nth-child(7) {
	transform: translateY(var(--position)) rotate(180deg);
}
.dot:nth-child(8) {
	transform: translateY(var(--position)) rotate(210deg);
}
.dot:nth-child(9) {
	transform: translateY(var(--position)) rotate(240deg);
}
.dot:nth-child(10) {
	transform: translateY(var(--position)) rotate(270deg);
}
.dot:nth-child(11) {
	transform: translateY(var(--position)) rotate(300deg);
}
.dot:nth-child(12) {
	transform: translateY(var(--position)) rotate(330deg);
}
```

## Ring rotating animation

Instead of having 6 different animations, I used one animation with CSS variables to adjust how the animation works:

```css
@keyframes ring-rotate {
	from {
		transform: scale(var(--scale-start)) rotate(var(--rotate-start));
	}
	to {
		transform: scale(var(--scale-end)) rotate(var(--rotate-end));
	}
}
```

Each `ring-` class from `1` through `6` has their own unique values for `--scale-start`, `--scale-end`, `--rotate-start` and `--rotate-end`. As the rings get smaller, the rotation is increased slightly (so that the position is more skewed and staggered towards the end of the animation) and there is slight scaling but each rings starting scale size is smaller than the one before it.

```css
.ring-1 {
	--scale-start: 0.92;
	--scale-end: 1.05;

	--rotate-start: 0deg;
	--rotate-end: 360deg;
}

.ring-2 {
	--scale-start: 0.8;
	--scale-end: 0.95;

	--rotate-start: 3deg;
	--rotate-end: 370deg;
}

.ring-3 {
	--scale-start: 0.7;
	--scale-end: 0.85;

	--rotate-start: 5deg;
	--rotate-end: 380deg;
}

.ring-4 {
	--scale-start: 0.6;
	--scale-end: 0.75;

	--rotate-start: 7deg;
	--rotate-end: 390deg;
}

.ring-5 {
	--scale-start: 0.5;
	--scale-end: 0.65;

	--rotate-start: 9deg;
	--rotate-end: 400deg;
}

.ring-6 {
	--scale-start: 0.4;
	--scale-end: 0.55;

	--rotate-start: 11deg;
	--rotate-end: 410deg;
}
```
