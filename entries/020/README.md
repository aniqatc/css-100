## Day 020

**<a href="https://css100.aniqa.dev#day-020">Live Demo</a>**

**Time to Complete**: 50 mins

**Key Concepts**: checkbox input, animating svg polylines

**Notes**:

## Checkbox Input to Trigger & Reset Animation

```html
<style>
	#checkbox {
		display: none;
	}

	.btn {
		/* Button Styling for Labels */
	}
</style>

<input type="checkbox" id="checkbox" />
<label for="checkbox" class="btn send">Send Mail</label>
<label for="checkbox" class="btn reset">Reset</label>
```

For this challenge, the `<input>` is a `type="checkbox"` which allows us to have two different states: the unchecked state and the checked state. Since I am hiding the default checkbox styling with `display: none`, I'll be using the `<label>` element to interact with the `<input>` element. By using two `<label>` elements for the same checkbox - one can be used to start the animation (the button that says "Send Mail" will have all the animations applied to it and will represent the `checked` state) and the other will be used to start the animation over again (the button that says "Reset" will be used to uncheck the checkbox).

**Send Mail** Animation

The first `<label>` element lets us start a "Send Mail" animation because we applied certain declarations using the `:checked` pseudoselector and the general sibling combinator.

Note: the general sibling combinator only allows us to select subsequent siblings (but not siblings that are written before it in the markup).

- `mail` svg disappears over 1 second
- `plane` svg appears after a delay of 1 second (after mail svg disappears), then it appears to fly away in an animation over 2 seconds
- `circle` background disappears by scaling down to 0 over 750 milliseconds
- `send` button disappears after 2 seconds (around the same time that the plane svg is flying away)
- `reset` button appears after 3 seconds (when all other animations have ended)

**Reset** Button

The second `<label>` element represents the reset button -- this simply unchecks the checkbox which takes us back to our initial starting state.

## Animating SVG Polylines

```html
<svg class="mail">
	<polyline points="120,1 120,70 1,70 1,1"></polyline>
	<polyline points="120,1 60,45 1,1 120,1"></polyline>
</svg>
<svg class="plane">
	<polyline points="120,1 1,60 106,80 120,1"></polyline>
	<polyline points="120,1 40,67 43,105 69,73"></polyline>
</svg>
```

**Mail** SVG

1. First polyline creates a rectangle which represents the body of the envelope
2. Second polyline creates the top flag of the envelope

**Plane** SVG

1. First polyline is the body and wings of the plane
2. Second polyline is the tail and rear section of the plane

**Animating these polyline figures**

In order to animate these polyline figures, I'll use `stroke-dasharray` and `stroke-dashoffset` to get a drawing in effect when I want the SVG to appear and an erasing effect when I want the SVG to disappear.

- `stroke-dasharray` defines pattern of dashes and gaps used to paint an outline of a shape

```css
.mail {
	stroke-dasharray: 350 350; /* 350 dashes, 350 gaps */
}
```

- `stroke-dashoffset` specifies distance into the dash pattern to start the dash. A positive value will offset the start of the dash pattern based on the specified value (so the dash pattern will move along the path)

```css
.mail {
	stroke-dashoffset: 0; /* dash pattern starts the beginning so path is visible */
}
```

If the `stroke-dashoffset` was set to `350` which is the length of the entire polyline path, then the entire figure will no longer be visible because it is moved 350 units off the path (which is also the same amount as the stroke dashes).

To get the effect of the mail svg being erased and the plane svg appearing, I did not need to use `@keyframes` - instead, I applied the appropriate `stroke-dashoffset` values for both SVGs so that they can be moved off or into their path along with a `transition` so that the change can be smooth.
