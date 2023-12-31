## Day 022

**<a href="https://css100.aniqa.dev#day-022">Live Demo</a>**

**Time to Complete**: 1 hour

**Key Concepts**: animating SVGs for progress bar (stroke-dasharray & stroke-dashoffset)

**Notes**:

For most of the positioning and layout, I used absolute positioning and flexbox. The bigger challenge was figuring out which values to use for `stroke-dasharray` and `stroke-dashoffset` to represent a percentage on the circular progress bar. Getting the progress bar to represent a percentage isn't a requirement for this design but I think knowing how to do it could be really helpful for when I want to make a functional and dynamic circular progress bar in the future.

## `stroke-dasharray`

Since the progress bar is circular, we need to get the circumference of the circle (the space around the circle) to define the `stroke-dasharray` which represents the length of the dashed line pattern. If the circumference of the circle is set to `stroke-dasharray` - it would represent 100% on the progress bar.

The circumference formula: `2 * radius * pi`.

- For the larger circle, we would do `2 * 55 * 3.14` which results in `345.6`
- For the smaller circles, we would do `2 * 35 * 3.14` which results in `219.8`

Note: the radius is defined in the HTML markup in the `r` attribute of the `<circle>` elements.

Then we can set the circumference for `stroke-dasharray`:

```css
.lg-circle .completed-bar {
	stroke-dasharray: 345.6;
}

.sm-circle .completed-bar {
	stroke-dasharray: 219.8;
}
```

## `stroke-dashoffset`

**Now**, we need to set the `stroke-dashoffset` which will move progress bar out of our view depending on the value:

- If `stroke-dashoffset` is `0`, then progress is `100%`
- If `stroke-dashoffset` is the same as the circumference, then progress is `0%`

So, if I want to set the progress bar to show a specific percentage, I can simply multiply the circumference by the percentage that I want to remove. I'll convert the percentage to a decimal for the calculations.

Basically, I would want to remove 20% of the progress bar if I wanted to show 80% completion on the progress bar.

Here's the exact values I used for the `stroke-dashoffset` in the animations for each:

```css
@keyframes progress-circle-large {
	from {
		/* 2 * 55 * 3.14 */
		stroke-dashoffset: 345.4;
	}
	to {
		/* 345.4 * 0.2 = 69.08 */
		stroke-dashoffset: 69.08; /* 80% complete; offsets by 20% */
	}
}

@keyframes progress-circle-sm-one {
	from {
		/* 2 * 35 * 3.14 */
		stroke-dashoffset: 219.8;
	}
	to {
		/* 219.8 * 0.3 = 64.94 */
		stroke-dashoffset: 65.94; /* 70% complete; offsets by 30% */
	}
}

@keyframes progress-circle-sm-two {
	from {
		/* 2 * 35 * 3.14 */
		stroke-dashoffset: 219.8;
	}
	to {
		/* 219.8 * 0.4 = 87.92 */
		stroke-dashoffset: 87.92; /* 60% complete; offsets by 40% */
	}
}
```

## Reusing animations with CSS Variables

There's something very obvious happening with my original keyframe declarations (in the code block above). I am repeating the same single property (`stroke-dashoffset`) for the same duration **three** times. The only difference is that all three of the animations have a different starting and ending value for the `stroke-dashoffset`. There's a way to declare a single keyframe that'll achieve the same goal: using CSS variables to define the values.

```css
/* A single keyframe declaration that'll work for all three progress circles */
@keyframes progress-circle {
	from {
		stroke-dashoffset: var(--circumference);
	}
	to {
		stroke-dashoffset: var(--offset);
	}
}
```

The only thing left to do is to declare the `--circumference` and `--offset` values in the selector that is also declaring the animation (so that the animation can inherit the variable's respective values).

```css
/* Large circle */
.lg-circle .completed-bar {
	--circumference: 345.4;
	--offset: 69.08; /* 20% offset */
	stroke-dasharray: var(--circumference);
	animation: progress-circle 2s ease-out forwards;
}

/* Small circles */
.sm-circle .completed-bar {
	--circumference: 219.8;
	stroke-dasharray: var(--circumference);
	animation: progress-circle 2s ease-out forwards;
}

/* Individual circles (smaller size) */
.sm-one {
	left: -24px;
	--offset: 65.94; /* 30% offset */
}

.sm-two {
	left: -28px;
	--offset: 87.92; /* 40% offset */
}
```
