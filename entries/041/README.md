## Day 041

**<a href="https://css100.aniqa.dev#day-041">Live Demo</a>**

**Time to Complete**: 20 mins

**Key Concepts**: animation on active class

**Notes**:

To summarize, this challenge includes a modal card element that has a button that will trigger an animation effect before having the card disappear.

This animation scales the card up slightly to 1.15 times its size at 15% of the animation duration and then scales it down to disappear (by scaling down to 0) by the end of the animation (750ms). Additionally, using `forwards` for the `animation-fill-mode` property indicates that the element should retain the style values from the last keyframe of the animation when it ends.

```css
.active.card {
	animation: modal-disappear 750ms ease-in forwards;
}

@keyframes modal-disappear {
	0% {
		transform: scale(1);
	}
	15% {
		transform: scale(1.15);
	}
	100% {
		transform: scale(0);
	}
}
```
