## Day 065

**<a href="https://css100.aniqa.dev#day-065">Live Demo</a>**

**Time to Complete**: 20 mins

**Key Concepts**: border-radius animation

**Notes**:

## Manipulating `border-radius` in an animation

While this animation may look complicated, it's actually incredibly straightforward. I added 25 `<div>` elements into the markup with the class `ellipse`. Each of these ellipses were given the same `height` and `width` of `250px` and a border of `1px solid`.

Then, each of the 25 ellipses were given its own individual keyframe declaration using an `@for` loop. The `@keyframes` declaration specifies a different end rotation angle and a `border-radius` value that would turn it into a elongated ellipse from a square.

```scss
.ellipse {
	@extend %center-position;
	border: 1px solid #fff;
	width: 250px;
	height: 250px;

	@for $num from 1 through 25 {
		&:nth-child(#{$num}) {
			animation: ellipse-to-sq-#{$num} 4s ease-in infinite alternate both;
		}

		@keyframes ellipse-to-sq-#{$num} {
			0% {
				transform: rotate(0);
				border-radius: 0%;
			}
			100% {
				transform: rotate($num * 15deg);
				border-radius: 25% 150%;
			}
		}
	}
}
```

All of the ellipses are given the same `border-radius` value of `25% 150%` by the end of the animation.

- `25%` refers to the horizontal radius of the corners (`25%` of the `width` of the element)
- `150%` refers to the vertical radius of the corner (`150%` of the `height` of the element)

Based on these elements, the shape will appear more elongated vertically due to the high radius value. Here's what one of these ellipses look like without the other ellipses overlapping it:

<img src="/entries/065/images/ellipse-shape.png">

Now, if all the ellipses assume this shape, all we have to do is ensure that they aren't stacked on each other so we can give them a different `rotate()` value so that they can spin into a position that staggers them nicely - hence, the dynamic `transform: rotate()` value of `$num * 15deg`.
