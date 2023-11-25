## Day 052

**<a href="https://css100.aniqa.dev#day-052">Live Demo</a>**

**Time to Complete**: 25 mins

**Key Concepts**: chaining dotted border animations

**Notes**:

## Creating dotted rings

In order to create several rings of dotted circles, I utilized the `border` property's `dotted` option in conjuction with `border-radius: 50%` which would create a rounded element as long as the `width` and `height` property are the same values.

Because there would be multiple rings that would need to be lined up one after another - I used absolute positioning to have them all centered in the frame.

```scss
.rings {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border: 6px dotted #fff;
	border-radius: 50%;
}
```

## SCSS loop for individual rings

Now, for each of the rings (there are 10), I needed them to each have a different `height` and `width` value. I used SCSS `@for` loop to use `:nth-child()` pseudo-selector that would target each ring and add `20px` to the `height` and `width` after each iteration. The `+ 50px` is to set the base size of the starting ring - meaning that the all rings start at a minimum size of `70px` and will increase.

Additionally, each individual ring is given the same animation (which is meant to give a pulsing effect) but they begin after a delay based on the loop iteration. Ultimately, when the animation plays, it creates wave pattern (due to the staggered start time for each animation) which creates a dynamic, rippling effect across the rings.

```scss
@for $ring from 1 through 11 {
	&:nth-child(#{$ring}) {
		width: ($ring * 20px) + 50px;
		height: ($ring * 20px) + 50px;
		animation: rings-wave 3s ease-in infinite both ($ring * 500ms) alternate;
	}
}
```
