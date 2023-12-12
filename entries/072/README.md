## Day 072

**<a href="https://css100.aniqa.dev#day-072">Live Demo</a>**

**Time to Complete**: 15 mins

**Key Concepts**: staggered animations with animation-delay

**Notes**:

On <a href="https://github.com/aniqatc/css-100/tree/main/entries/065">Day 65</a>, I created a staggered animation that involved providing a different `transform: rotate()` value so that each ellipse would rotate at a different rate giving a staggered effect.

In this case, I would like to achieve a staggered effect but I do by providing `animation-delay` values for each of the elements. Each of the `animation-delay` increases by `100ms` - creating a progressive delay which creates the desired staggered animation effect.

```scss
// Nested in the `.circle` class
@for $num from 1 through 11 {
	&:nth-child(#{$num}) {
		animation: circle-spin-#{$num} 5s ease infinite alternate;
		animation-delay: $num * 100ms;
	}

	@keyframes circle-spin-#{$num} {
		100% {
			transform: rotateX(360deg) rotateY(360deg);
		}
	}
}
```
