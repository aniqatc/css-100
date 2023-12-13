## Day 073

**<a href="https://css100.aniqa.dev#day-073">Live Demo</a>**

**Time to Complete**: 20 mins

**Key Concepts**: word carousel with overflow and transform property

**Notes**:

To create a word carousel, the most important properties are:

- `overflow` property to ensure that all the words, except for the one being cycled and shown, is hidden from the user
- `transform: translate()` property to adjust the position of the words so that the next word can be displayed

In order for this to have a smooth transition, I used `@keyframes` animation to adjust the position of all the words:

```scss
@keyframes switch-words {
	0%,
	20% {
		transform: translateY(0);
	}
	25%,
	45% {
		transform: translateY(-100%);
	}
	50%,
	70% {
		transform: translateY(-200%);
	}
	75%,
	95% {
		transform: translateY(-300%);
	}
	100% {
		transform: translateY(-400%);
	}
}
```

This animation is based on percentages, translating the element by a proportion of the height of its parent container. In this scenario, since the individual words don't have a predefined height, the parent's height (`42px`, in this case) is used as the reference. Thus, `translateY(-100%)` effectively moves the element up by `42px`, `translateY(-200%)` moves it by `84px`, and so on, perfectly aligning each word within the carousel's viewable area.

Moreover, each transformation step is defined within a concise timeframe (e.g., between `0%` and `20%`, `25%` and `45%`). This strategy ensures that the transition between words appears swift, akin to a 'snap' into place (which occurs within the `5%` timeframe between each step), rather than a gradual shift.
