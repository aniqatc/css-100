# Day 016

**Time to Complete**: 1.5 hours

**Key Concepts**: chaining animations

**Notes**:

This is definitely my least favorite challenge so far. I spent at least 45 minutes trying to get the animations in sync with the right speed and transformations as the one that was made <a href="https://100dayscss.com/days/16/">by the creator</a> **without** peaking at his code. Although I got all the transformations more-or-less right, I just couldn't get the timing down for the circle's bounce and the subsequent ripple. So, I eventually took a look at the creator's code to guide me on the right path (in addition to the resource linked below).

#### Chaining Animations

I'll be writing my notes inside the following code block:

```css
@keyframes circle-in-out {
	/* Circle's starting position + scaled up on the Y-axis to make it give an illusion that the ball is falling -- the weight is pulling the shape down */
	0% {
		transform: translate(-50%, -300px) scaleY(1.2);
	}
	/* Circle hits its lowest point -- scaled on Y-axis to make it seem like it bounced */
	10% {
		transform: translate(-50%, 40px) scaleY(0.8);
	}
	/* Circle bounces upwards to the center of the screen and scales up */
	14% {
		transform: translate(-50%, -40px) scaleY(1.1);
	}
	/* Return size to normal -- no scale */
	22% {
		transform: var(--center-position) scaleY(1);
	}
	/* Small increase on both x, y axis */
	/* RIPPLE ANIMATION FOR CIRCLE OCCURS HERE */
	26% {
		transform: var(--center-position) scale(1.2);
	}
	/* Circle scales down until it appears to disappear */
	32%,
	74% {
		transform: var(--center-position) scale(0);
	}
	/************************************************************/
	/* In between 32% and 74% of this circle animation, 
    the hexagon appears at 42% & disappears around 53% with its ripple effect,
    then, the triangle appears at 62% and disappears around 73% with its ripple effect */
	/************************************************************/

	/* Circle reappears with a ripple effect */
	/* RIPPLE ANIMATION FOR CIRCLE OCCURS HERE */
	80% {
		transform: var(--center-position) scale(1.2);
	}
	/* Subtle scaling between 86% and 92% to give the dropping (drag) effect */
	86%,
	88% {
		transform: var(--center-position) scale(1);
	}
	92% {
		transform: translate(-50%, -30px) scaleY(0.9);
	}
	/* Circle drops out of the frame */
	100% {
		transform: translate(-50%, 300px) scaleY(1.2);
	}
}
```

The big takeaway for me is that if I want to animate multiple elements at the same time to create one big animation -- they all need to have the same duration and easing function and the timing needs to match up. For this specific animation, each shape appeared after the shape before was scaled down to 0, basically disappearing into the center of the screen.

- From `0` to `32%`, the circle appeared into the frame, bounced down, scaled up and then, disappeared
- From `42%` to `53%`, the hexagon scaled up and then, disappeared
- From `62%` to `73%`, the triangle scaled up and then, disappeared
- From `74%` to `100%`, the circle scaled back up and then dropped out of the frame

Each element had its own animation that matched these percentages so that they could appear at the right time.

Another thing that I noticed with scaling elements in an animation: if we don't specify the starting point of the scaling, then the scaling might start at a point that we don't want.

For example (below), having all these percentages assigned to the first declaration is very intentional -- I want the scaling up and down effect to happen very quickly, I don't want it to start scaling prematurely:

```css
@keyframes hexagon-in-out {
	/* initial state */
	0%,
     /* ensures that element hasn't started scaling and is still at 0; 
    if I don't specify 39% here then the scaling will begin at 0% up to 42% instead of 39% to 42% */ 
	39%,
    /* ensures that element scales down to 0 immediately,
    if I don't specify 53% here then the scaling down will happen slowly from 50% to 100% */
	53%,
	100% {
		transform: var(--center-position) scale(0);
		opacity: 0.5;
	}
	/* scaling up happens between 39% and 42% */
	42% {
		transform: var(--center-position) scale(1.2);
		opacity: 1;
	}
	/* scaling down happens between 50% and 53% */
	50% {
		transform: var(--center-position) scale(1);
	}
}
```

#### Note about transformations & animations:

Don't use `transform` to center an element if we're going to apply an animation that includes a transformation! The transformations inside the animation will cancel out the transformation that is used to position the element -- which would shift our starting and/or ending position of the element. It's better to center/position the element using any other method.

For now, I didn't want to re-do the positioning because then I'd have to change all the transformations AND the absolute positioning of certain elements so I just opted to put my default transformation position into a variable so that the code could be a little cleaner.

```css
.day-016 {
	--center-position: translate(-50%, -50%);
}
```

#### Resources

- <a href="https://css-tricks.com/using-multi-step-animations-transitions/">CSS-Tricks: Using Multi-Step Animations & Transitions</a>
