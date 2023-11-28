## Day 056

**<a href="https://css100.aniqa.dev#day-056">Live Demo</a>**

**Time to Complete**: 1 hour

**Key Concepts**: using @for loop to dynamically create individual @keyframe animations

**Notes**:

## `@for` loop to dynamically create `@keyframes` animations for each petal

I used a SCSS `@for` loop to generate 20 unique `@keyframes` animation that are named from `petal-1` up to `petal-20`. Ideally, I'd use one `@keyframes` animation and use CSS native variables to adjust the values inside the `@keyframes` but I wanted to stick to SCSS. SCSS variables are calculated once they are compiled so the values inside the `@keyframes` would be set to one single value and would not be adjusted. To work around this, I created an individual `@keyframes` for each petal.

```scss
@for $num from 1 through 20 {
	&:nth-child(#{$num}) {
		animation: petal-#{$num} 6s ease infinite both;
		animation-delay: ($num * 50) + 0ms;
	}

	// Rotate value: 360 / 20 = 18
	// TranslateX value: 30px to push it outwards from its current position
	// Scaling to give a growth appearance
	@keyframes petal-#{$num} {
		0% {
			transform: rotate(($num * 18) + 0deg) translateX(30px) scale(0.75);
		}
		25% {
			transform: rotate(($num * 18) + 0deg) translateX(30px) scale(1.5);
		}
		100% {
			transform: rotate(($num * 18) + 0deg) translateX(30px) scale(1);
		}
	}
}
```

Each petal receives a unique animation with a slight delay, creating a sequential animation effect. The scaling creates the effect that the petal is expanding outwards and back inwards -- while also rotating (because the entire flower element itself has a different animation applied: see below).

```scss
.flower {
	animation: flower-rotation 6s ease infinite both;

	@keyframes flower-rotation {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}
}
```

Lastly, because all the petals are given an opacity of `0.7`, they are slightly see-through which is why we are able to see the petals overlapping on top of each other.
