## Day 023

**<a href="https://css100.aniqa.dev#day-023">Live Demo</a>**

**Time to Complete**: 40 mins

**Key Concepts**: sequential animations

**Notes**:

This challenge was actually pretty straightforward because of all the things that I've learned in the past 22 challenges.

Looking at the original animation as a guide, I took note of what was occuring:

- First: a circle scales up slightly before scaling down entirely and disappearing
- Second: immediately after the circle disappears, two lines appear from the center and disappears outwards (one going left, one going right before scaling to nothing)
- Third: immediately after the horizontal line disappears, two brackets appear -- one at the left and one at the right which also animates in
- Fourth: once the bracket appears - they remain in place and bold text at the center appears scaling outwards from the center
- Final: lighter text appears above and below the bold text that is translates in (one from the left, one from the right)

Taking note of these animations, I worked through them one-by-one and kept note of the duration of each animation. This is because after one animation ends, the next animation must begin so every subsequent animation must be given a delay value.

All of the animations are pretty basic - individually manipulating opacity, translations, and scaling. But the horizontal line that appears from the center and disappears outwards - that animation required more thinking than the others. Here's why:

```css
.line.right {
	--origin-initial: left center;
	--origin-final: right center;
	right: 50px;
}

.line.left {
	--origin-initial: right center;
	--origin-final: left center;
	left: 50px;
}

@keyframes line-in-out {
	0% {
		transform: scaleX(0);
		transform-origin: var(--origin-initial);
	}
	50% {
		transform: scaleX(1);
	}
	50%,
	100% {
		transform-origin: var(--origin-final);
	}
	100% {
		transform: scaleX(0);
	}
}
```

The `transform-origin` property needed to be included in the animation to get the effect of the line appearing from the center but by the end of the animation, it disappears into the left and the right. This is because the origin point -- the point in which the animation uses as a reference -- changes throughout the animation.

At the beginning (defined in `var(--origin-initial)`), both lines start where the center point of the frame would be (for `.left`, it's as far `right` as possible on x-axis; for `.right`, it's as far `left` as possible on the `x-axis`). On the y-axis, the line doesn't need to change so I keep that value at `center`. Any scaling that happens at the start will begin from those positions.

However, halfway through the animation and until the very end of the animation, the origin point changes to the opposite ends (for `.left`, it's going to change `left` for the x-axis value in `transform-origin`; and vice versa for `.right`).These are represented in `var(--origin-final)`. Any scaling that happens at this point will end towards the new origin point.
