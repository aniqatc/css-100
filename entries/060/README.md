## Day 060

**<a href="https://css100.aniqa.dev#day-060">Live Demo</a>**

**Time to Complete**: 20 mins

**Key Concepts**: opacity with blur, mouse events to adjust styling

**Notes**:

## Opacity with blur

The overlay that follows the mouse cursor has a frosted glass appearance - this was done using two properties: `background` and `backdrop-filter`. The `background` uses `rgba()` values to define a white color with a low opacity of 30% making it mostly transparent allowing elements behind it visible. When `backdrop-filter` is added with the `blur()` value, everything behind the element is blurred. Since the `height` is set to `50%`, only half of the elements behind the curtain appear blurred initially.

```scss
.curtain {
	background: rgba(255, 255, 255, 0.3);
	backdrop-filter: blur(4px);
	height: 50%;
}
```

## Mouse events to adjust styling

The original challenge was done by creating 200 `<div>` elements that work as triggers using the `:hover` property but that felt way too tedious to do when a few lines of JavaScript can create the same effect.

I created a function that would update the `.curtain` element's height based on the user's mouse position (as well as the transition property). The transition property requires a different value because when the mouse is actively on the frame, I want the curtain element to move with the mouse without delay but if the mouse leaves the frame, I want the curtain to adjust back to its original height a little slower.

```javascript
function updateCurtain(transition, height) {
	curtain.style.transition = transition;
	curtain.style.height = height;
}
```

The event listener for `mousemove` listens for mouse movement over the frame and can be accessed through the event's `event` object. Since I'm only looking to adjust the height, I only need the value of the mouse movement on the Y-axis (the vertical position). However, the value would be relative to the entire window when I access the mouse position at `event.clientY` so I need to get the frame's position to subtract it from the mouse's Y-axis position so that the resulting value will be relative to the frame (and not the entire window).

```javascript
frame.addEventListener('mousemove', event => {
	const mousePos = event.clientY - frame.getBoundingClientRect().top;
	updateCurtain('all 100ms ease-out', `${mousePos}px`);
});
```

Lastly, as mentioned before, I need the transition to be slower when the mouse moves out of the frame so I used the `mouseleave` event listener to listen for the mouse to leave frame, in which case the curtain would be adjust back to its original height of `50%` and the `transition` would be a little longer.

```javascript
frame.addEventListener('mouseleave', () => {
	updateCurtain('all 350ms ease-in', '50%');
});
```
