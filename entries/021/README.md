# Day 021

**<a href="https://css100.aniqa.dev#day-021">Live Demo</a>**

**Time to Complete**: 45 mins

**Key Concepts**: animating SVGs

**Notes**:

#### PacMan Chomp

For me, getting the chomping animation for the Pac-Man to work was the hardest part. To get it right, I made us of the `stroke-width`, `stroke-dasharray` and `stroke-dashoffset` properties for the Pac-Man svg.

```css
.day-021 .pacman {
	/* styling & positioning properties removed for brevity */
	fill: none;
	stroke-width: 50px;
	stroke-dasharray: 200;
	animation: pac-mouth 1.2s ease-in infinite;
}
```

- `stroke-width` is set to 50px which makes it so thick that it cover's the circle's circumference, giving the illusion of a filled circle
- `stroke-dasharray` is set to 200 (creating a dash that is 200px long)

Since `stroke-width` is set to such a high number of `50px`, even though there should be an implicit visible gap (based on the value of `stroke-dasharray`), there is none. The line is too thick to create a visual gap.

Here's what the animation looks like when the `stroke-width` isn't so thick at `10px`:

<img src="/entries/021/pacman-stroke.gif" width="400"/>

The gap becomes visible which makes us see how the `stroke-dasharray` and `stroke-dashoffset` work together.

```css
@keyframes pac-mouth {
	0%,
	100% {
		stroke-dashoffset: 0;
		transform: rotate(0deg);
	}
	50% {
		stroke-dashoffset: 75;
		transform: rotate(30deg);
	}
}
```

- `0%, 100%` specifies the starting and ending point of the animation where there should be no rotation or `stroke-dashoffset` applied
- `50%` specifies the halfway point:
  - `stroke-dashoffset: 75` shifts the gap pattern 75 pixels around the circle, enough to open up the stroke (but since the stroke width is so thick, the opening isn't actually 75 pixels open, it only opens up enough to give the illusion I'm looking for)
  - `transform: rotate(30deg)` rotates the circle by 30 degrees gives the chomping effect

#### PacMan Dots

For the dots, I created a single horizontal line using the `<polyline>` element (where I defined two points where the line should connect).

Through CSS properties specific to SVG elements, I transformed the line into multiple dots:

- `stroke-width` defines how thick each dot will be
- `stroke-linecap` defines that the end of the dots will be rounded off
- `stroke-dasharray` creates a pattern where there is no dash (`0`) but there will be a gap of `50px` -- creating the impression of spaced-out individual dots

The animation that is applied to the dots so that they appear to move into the PacMan's mouth continuously:

```css
@keyframes pac-dots {
	100% {
		stroke-dashoffset: 50;
	}
}
```

This shifts the dash gap pattern by `50` pixels (which is also the length of the gap defined in `stroke-dasharray`). This will create a loop where the dots seem like they are being regenerated from the start after being shifted out, creating the illusion of an infinite series of dots.
