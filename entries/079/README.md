## Day 079

**<a href="https://css100.aniqa.dev#day-079">Live Demo</a>**

**Time to Complete**: 20 mins

**Key Concepts**: rotating, synchronous animation

**Notes**:

I took inspiration from the [original Codepen by the creator of the challenge](https://codepen.io/roydigerhund/pen/aNjror) and made a simpler animation. Replicating the entire thing seems a little too tedious for me at the moment!

#### Synchronous Animation

Each `.line` element represents one of the lines that will be animated. The lines are `40px` wide and `10px` tall, with an `absolute` position. The `transform-origin: center;` ensures that the lines rotate around their center, creating a balanced effect.

The following loop is used to generate 10 different animation sequences for each of the line elements in the markup. The `$degree` variable is calculated as `36deg * $base`, where `$base` is the loop index minus 1. This ensures that each line **starts at a different angle**, spaced evenly around the center.

The animation is symmetrical because each line follows the same keyframe sequence, but they are offset by different initial angles (`$degree`). This creates a harmonious visual effect where all lines move in unison, but with varied starting points.

```scss
@for $i from 1 through 10 {
	$base: $i - 1;
	$degree: 36deg * $base;

	&.line-#{$i} {
		animation: line-#{$i} 6s ease-in-out infinite;
	}

	@keyframes line-#{$i} {
		0%,
		100% {
			// original line shape turned into square shape
			transform: rotate($degree) translate(100px) scale(0.5);
			border-radius: 0;
		}
		25% {
			// line rotates moves further out and scales up into a circular shape
			transform: rotate($degree + 90deg) translate(150px) scale(1);
			border-radius: 50%;
		}
		50% {
			// line is turned into a square (height property), slightly shrinks  and moves inwards while rotating
			transform: rotate($degree + 180deg) translate(100px) scale(0.75);
			border-radius: 0;
			height: 40px;
		}
		75% {
			// moves closer to the center, scales up larger than original size and switches to a circular shape
			transform: rotate($degree + 270deg) translate(50px) scale(1.25);
			border-radius: 50%;
		}
	}
}
```
