## Day 050

**<a href="https://css100.aniqa.dev#day-050">Live Demo</a>**

**Time to Complete**: 25 mins

**Key Concepts**: border-radius, multi-step animation

**Notes**:

## `border-radius`

On <a href="https://github.com/aniqatc/css-100/tree/main/entries/008">Day 8</a>, I worked with 8-value `border-radius` to create a <a href="https://css100.aniqa.dev/#day-008">rotating, morphing blob</a>. In that day's note, I briefly go over what each value represents when 8 values are used for `border-radius`. Ultimately, I used a generator to create the shapes for that challenge.

For today's challenge, I used the following values for the `border-radius`:

```css
.egg {
	height: 130px;
	width: 100px;
	border-radius: 100% / 125% 125% 80% 80%;
}
```

All values before the `/` represent the horizontal radii of the each corner and the values after the `/` represent the vertical radii. In this case, `100%` is applied to all the horizontal radii of each corner, whereas, `125% 125% 80% 80%` represent the following corners:

- `125%` for `top-left` and `top-right`
- `80%` for `bottom-right` and `bottom-left`

More specifically, here's how it would be written if we targeted them individually:

- `border-top-left-radius: 100% 125%`
- `border-top-right-radius: 100% 125%`
- `border-bottom-right-radius: 100% 80%`
- `border-bottom-left-radius: 100% 80%`

This ultimately creates an egg-like shape, with the top part being more round, making it appear more narrow (due to the `125%` value) and the bottom part being wider (`80%` value still creates a round shape but less than top part of the element).

## Multi-step animations

The animation for the egg brings it in from the top of the frame and drops it halfway with a slight bounce before being centered in the frame -- at that point, there's a gentle wobble before it drops down to the bottom and out of the frame.

I used `transform: translateY()` to control the vertical positioning throughout the animation; `transform: rotate()` to create a slight wobble (`transform-origin: center bottom` ensures that the rotation occurs at the bottom center of the element - instead of around the center of the element); and `transform: scale()` to create the slight bounce effect.
