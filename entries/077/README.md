## Day 077

**<a href="https://css100.aniqa.dev#day-077">Live Demo</a>**

**Time to Complete**: 15 mins

**Key Concepts**: @for loop for animations

**Notes**:

#### Ball Movement

The `ball-movement` animation:

- `0%` and `100%` represent the start and end of the animation: ball is positioned `130px` to the left of its original position (the center of the container)
- `50%` represents the midway point of the animation (1 second in) where the ball should move `130px` to the right of its original position (the center of the container)

```scss
.ball {
	background: #fff;
	height: 50px;
	width: 50px;
	border-radius: 50%;
	animation: ball-movement 2s ease infinite;

	@keyframes ball-movement {
		0%,
		100% {
			transform: translateX(-130px);
		}
		50% {
			transform: translateX(130px);
		}
	}
}
```

#### Blurring Effect

There are 6 `blur` elements nested inside the `ball` element mentioned earlier. These `blur` elements are semi-transparent (`rgba(255, 255, 255, 0.25)`) and are positioned absolutely (`position: absolute` with `inset: 0`) on top of the ball. Their purpose is to mimic the effect of motion blur as the ball moves.

The motion blur effect is achieved by applying a slightly different position to each `blur` element. Since these elements are nested within the `ball` div, they naturally move along with the ball. However, to create a more convincing illusion of motion blur, each `blur` element is animated to move in a slightly staggered fashion. This staggered movement makes it appear as though the ball is dragging or blurring as it moves.

This staggered effect is implemented using an `@for` loop, which assigns each `blur` element its own animation. The amount of positional shift increases with the `$num` value, meaning that the higher-numbered blur layers move more than the lower-numbered ones. This subtle difference in movement between the layers enhances the overall illusion of motion blur, making the animation more dynamic and realistic.

```scss
.blur {
	position: absolute;
	inset: 0;
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.25);

	@for $num from 1 through 6 {
		&.blur-#{$num} {
			animation: blur-movement-#{$num} 2s ease-in infinite;
		}

		@keyframes blur-movement-#{$num} {
			0%,
			50%,
			100% {
				transform: translateX(0);
			}
			25% {
				transform: translateX($num * -4px);
			}
			75% {
				transform: translateX($num * 4px);
			}
		}
	}
}
```
