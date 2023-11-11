## Day 039

**<a href="https://css100.aniqa.dev#day-039">Live Demo</a>**

**Time to Complete**: 25 mins

**Key Concepts**: pointer-events, variables in animations

**Notes**:

## Pointer Events

The `pointer-events` property comes in handy when elements are stacked on top of each other that are clickable, especially at different states of user interaction. For example, in this challenge, the menu icon (the two lines) are stacked on top of the navigation links that are hidden (due to their `opacity` being set to `0`). So even though the navigation links are hidden, they are still available on the page and can be triggered when we're trying to click on the element on top of it (the menu icon).

By setting the navigation links to have `pointer-events: none`, we stop mouse and touch events from occurring on that element. This lets my menu icon have the space without triggering any events on the elements layered beneath it.

However, once the menu icon is clicked, I set the `pointer-events` property to `none` for the icon because I need to give that space to the navigation links now. So, conversely, the navigation links will have their `pointer-events` set to `auto` which is the initial value, allowing the element to be a target for events.

## Variables in Animations

Using CSS variables is a great way to re-use an animation for multiple elements.

If I didn't use CSS variables, I would need 4 animations: an expand animation and a collapse animation for the top and bottom line.

```css
@keyframes expand-menu-line-top {
	0% {
		transform: translateY(0) scaleX(1);
	}
	50% {
		transform: translateY(-20px) scaleX(1) scaleY(0.5);
	}
	100% {
		transform: translateY(-20px) scaleX(6) scaleY(0.5);
	}
}

@keyframes collapse-menu-line-top {
	0% {
		transform: translateY(-20px) scaleX(6) scaleY(0.5);
	}
	50% {
		transform: translateY(-20px) scaleX(1) scaleY(0.5);
	}
	100% {
		transform: translateY(0) scaleX(1);
	}
}

@keyframes expand-menu-line-bottom {
	0% {
		transform: translateY(0) scaleX(1);
	}
	50% {
		transform: translateY(20px) scaleX(1) scaleY(0.5);
	}
	100% {
		transform: translateY(20px) scaleX(6) scaleY(0.5);
	}
}

@keyframes collapse-menu-line-bottom {
	0% {
		transform: translateY(20px) scaleX(6) scaleY(0.5);
	}
	50% {
		transform: translateY(20px) scaleX(1) scaleY(0.5);
	}
	100% {
		transform: translateY(0) scaleX(1);
	}
}
```

But these animations are basically the same except for the `translateY()` value - that's because one line goes up before expanding and the other goes down before expanding. Here's how CSS variables can be used to reduce repetiton:

```css
.line-top {
	--translate-value: -20px;
}

.line-bottom {
	--translate-value: 20px;
}

@keyframes expand-menu-lines {
	0% {
		transform: translateY(0) scaleX(1);
	}
	50% {
		transform: translateY(var(--translate-value)) scaleX(1) scaleY(0.5);
	}
	100% {
		transform: translateY(var(--translate-value)) scaleX(6) scaleY(0.5);
	}
}

@keyframes collapse-menu-lines {
	0% {
		transform: translateY(var(--translate-value)) scaleX(6) scaleY(0.5);
	}
	50% {
		transform: translateY(var(--translate-value)) scaleX(1) scaleY(0.5);
	}
	100% {
		transform: translateY(0) scaleX(1);
	}
}
```

The animation will inherit the `--translate-value` from wherever the animation is declared.
