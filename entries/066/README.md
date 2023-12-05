## Day 066

**<a href="https://css100.aniqa.dev#day-066">Live Demo</a>**

**Time to Complete**: 15 mins

**Key Concepts**: box-sizing and border-width transition, setting different positions to elements around a specified point, trigger transitions on checked state of checkbox

**Notes**:

## `box-sizing` and `border-width` transitions

In order to get the effect that the checkbox border is "filling" inwards into the center with a white color, I used the `border-width` property to increase the width to `15px` from `2px` when the checkbox is checked. With a transition, this shows the border increasing in a nice slow transition.

Now, without the `box-sizing` property, the `border-width` will make the border grow outwards giving us the following appearance vs the appearance that I want to achieve:

<img src="/entries/066/images/box-sizing.png">

`box-sizing` => determines how the width and height of an element is calculated

With the default value of `content-box` for `box-sizing`, the height and width of the element only includes the content, so padding and border sizes are added to the **total rendered size** of the element. Meaning, if the border size is increase, the entire element increases as well. That's why the border grows outwards...

However, when `box-sizing` is changed to `border-box`, the width and height of an element includes the content, padding **and** the border. The **total rendered size** will always stay the same even if the padding and border is changed. So when the `border-width` is changed to a larger number, it grows inwards ensuring that it doesn't effect the element's overall width and height.

## Setting different positions to elements around a specified point

When the checkbox is checked off, I want sparkles to come outwards from the checkbox that fade away almost immediately. In order to do this, I need to set the sparkles around the checkbox equally. I chose to use 12 sparkles - similar to the 12 hour positions of a clock.

- I used absolute positioning to center each of the `.sparkle` elements to the center of its parent container
- I applied `0 0` to the `transform-origin` so that any transformations applied to the `.sparkle` elements would occur from the top left corner of the element and **not** the center of the element
- Using an `@for` loop, I applied a different `rotate()` value to each `.sparkle` so that they can be placed around the checkbox evenly:

```scss
@for $num from 1 through 12 {
	&:nth-child(#{$num}) {
		transform: rotate(360deg / 12 * $num) translateX(20px) scaleX(0);
	}
}
```

- `rotate(360deg / 12 * $num)` ensures that the 12 sparkles are evenly distrbuted around a circle
- `translateX(20px)` moves the element 20 pixels to the right from its rotated position - since the `transform-origin` is set to `0 0`, the element would move outwards from the center of its parent container
- `scaleX(0)` makes the element invisible (once the checkbox is checked, this scaling will be changed to give a growing-in effect; e.g. scaling from 0 to 1 on the X-axis)

## Trigger transitions on checked state of checkbox

```scss
#sparkle-checkbox {
	display: none; // remove default checkbox

	&:checked + .sparkle-label {
		border: 15px solid #fff; // grow border-width
		background: #5fd17a; // green dot at center
		box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25); // remove inset shadow

		@for $num from 1 through 12 {
			& ~ .sparkles .sparkle:nth-child(#{$num}) {
				transform: rotate(360deg / 12 * $num) translateX(40px) scaleX(1); // grows outwards
				opacity: 0; // fades away
				transition: all 500ms ease-in-out; // changes occur over .5s
			}
		}
	}
}
```
