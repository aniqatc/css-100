## Day 063

**<a href="https://css100.aniqa.dev#day-063">Live Demo</a>**

**Time to Complete**: 30 mins

**Key Concepts**: animating borders, negative delay on animations

**Notes**:

In this challenge, I added 50 `<div>` elements with the class of `.ring` using JavaScript. Each of these rings are given a fixed `width` and `height` of `200px` and `border-radius` of `50%` given them the circular shape. With a `border` styling of `dotted`, each ring looks like they are made up of tiny circles.

The initial position of the rings are set in the center of the frame using absolute positioning. This initial position is where the animation will begin from.

## Animating borders

The animation itself:

```scss
@keyframes hypnotic-ring {
	0% {
		transform: scale(0) translate(-200px, -200px);
		opacity: 0.25;
	}
	100% {
		transform: scale(3.5) translate(0, 0);
		opacity: 1;
	}
}
```

At `0%` (the start of the animation), each ring is scaled down to zero (`transform: scale(0)`) and translated 200px right and 200px up (`translate(200px, -200px)`). This makes the ring start from a point offset from its central position and is almost invisible (due to `opacity: 0.25`). The start position helps defines the path that the elements will take as it gets to the end of the animation which is towards `translate(0, 0)`.

At `100%` (the end of the animation), the ring is scaled up to 3 times its original size (`transform: scale(3)`) and translated back to its original position (`translate(0, 0)`). The opacity is increased to `1`, making the ring fully visible.

## Negative delays for animations

This animation causes the borders to expand as it moves from the translated position to its initial centered position. In order to ensure that each of these rings are staggered so that each ring animates one after another - a dynamically calculated delay is given using a `@for` loop in the SCSS file. This delay ensures that each ring starts its animation slightly after the previous one, creating a sequential, ripple-like effect:

```scss
@for $num from 1 through 50 {
	&:nth-of-type(#{$num}) {
		animation: hypnotic-ring 7s ease-in infinite ($num / -7) + 0s both;
	}
}
```

However, you'll notice that there is a negative value given for the delay. This is because a negative delay means that the animation will start `x` amount of time into the animation. For example, my `hypnotic-ring` animation has a duration of `7s` and the delay calculation is `$num /  -7s` so each animation will appear `$num / -7s` **into the animation timeline** rather than beginning at the very start position of the animation. If I used a positive number, the delay between each ring would be the same **but** the animation would begin at the very start `0%` of the keyframe.

Right now, with a negative delay, when we first load the animation, it looks like as though the animation has been playing for some time already - giving the illusion that the animation started before the actual start time of the element.

Here's what the delay values come out to once it's compiled:

```css
.ring:nth-of-type(1) {
	animation: hypnotic-ring 7s ease-in infinite -0.14286s both;
}

.ring:nth-of-type(2) {
	animation: hypnotic-ring 7s ease-in infinite -0.28571s both;
}

.ring:nth-of-type(3) {
	animation: hypnotic-ring 7s ease-in infinite -0.42857s both;
}
// ...
// ...
// ... .ring:nth-of-type(4-47) ...
// ...
// ...
.ring:nth-of-type(48) {
	animation: hypnotic-ring 7s ease-in infinite -6.85714s both;
}

.ring:nth-of-type(49) {
	animation: hypnotic-ring 7s ease-in infinite -7s both;
}

.ring:nth-of-type(50) {
	animation: hypnotic-ring 7s ease-in infinite -7.14286s both;
}
```
