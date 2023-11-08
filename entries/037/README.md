## Day 037

**<a href="https://css100.aniqa.dev#day-037">Live Demo</a>**

**Time to Complete**: 45 mins

**Key Concepts**: 3D transforms for carousel animation

**Notes**:

## References

I originally looked at this <a href="https://3dtransforms.desandro.com/carousel">tutorial on how to create a 3D carousel</a> but it's a different type of carousel than the one I would need to re-create for this challenge.

It still helped me to figure out which properties I would need to work with:

- `perspective` to create a 3D space
- `transform-style` with the value `preserve-3d` to make sure that the child elements in the 3D space will be relative to the parent container otherwise the elements will remain flat (I wrote about this in more detail on <a href="https://github.com/aniqatc/css-100/tree/main/entries/014">Day 14</a>)
- `rotateY()` if I wanted to change the starting position of the element in the 3D space (I don't use this property for the final animation)
- `translateZ()` which moves an element in the Z-axis or "depth axis" in the 3D space which is either more forward or backward

## 3D Transform Animation

I'll focus on the part that matters the most - the animation of each card. Here's how I set it up:

```css
.card:nth-child(1) {
	--translate-start-end: 0, 0, 0;
	--translate-mid-1: 140px, 0, -40px;
	--translate-mid-2: -140px, 0, -40px;
}

.card:nth-child(2) {
	--translate-start-end: 140px, 0, -40px;
	--translate-mid-1: -140px, 0, -40px;
	--translate-mid-2: 0, 0, 0;
}

.card:nth-child(3) {
	--translate-start-end: -140px, 0, -40px;
	--translate-mid-1: 0, 0, 0;
	--translate-mid-2: 140px, 0, -40px;
}

@keyframes carousel-rotate {
	0%,
	100% {
		transform: translate3d(var(--translate-start-end));
	}
	33% {
		transform: translate3d(var(--translate-mid-1));
	}
	66% {
		transform: translate3d(var(--translate-mid-2));
	}
}
```

I used a single `@keyframes` but each of the `transform: translate3d()` values is different for each card. This is because each card moves between 3 different locations - one is the initial starting point when the card is closest to the user, the second is when it's pushed back to the right and then lastly, it's pushed to the right before ending at the initial starting point. This is reflected in the animation as there are 4 steps `0%`, `33%`, `66%` and `100%`.

So if card 1 is at the starting point (at the front), then card 2 is on the right behind card 1 and card 3 would also be behind card 1 but on the left side.

To understand why I chose each of the values, it's important to understand what each value does:

- `translate3d(x, y, z)` takes values for each axis:
  - `x` - the horizontal axis responsible for left and right movement
  - `y` - the vertical axis responsible for up and down movements
  - `z` - the depth axis responsible for forward and backwards movements (in a 3D space)

Here's each of the values written out explicitly, using their individual `translate#()` functions so that it's more clear how each card moves throughout the animation:

```css
.card:nth-child(1) {
	--translate-start-end: translateX(0) translateY(0) translateZ(0);
	--translate-mid-1: translateX(140px) translateY(0) translateZ(-40px);
	--translate-mid-2: translateX(-140px) translateY(0) translateZ(-40px);
}

.card:nth-child(2) {
	--translate-start-end: translateX(140px) translateY(0) translateZ(-40px);
	--translate-mid-1: translateX(-140px) translateY(0) translateZ(-40px);
	--translate-mid-2: translateX(0) translateY(0) translateZ(0);
}

.card:nth-child(3) {
	--translate-start-end: translateX(-140px) translateY(0) translateZ(-40px);
	--translate-mid-1: translateX(0) translateY(0) translateZ(0);
	--translate-mid-2: translateX(140px) translateY(0) translateZ(-40px);
}
```
