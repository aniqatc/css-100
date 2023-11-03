## Day 035

**<a href="https://css100.aniqa.dev#day-035">Live Demo</a>**

**Time to Complete**: 15 mins

**Key Concepts**: stroke-dashoffset starting value, stroke-dashoffset with transform: rotate()

**Notes**:

## References

Another challenge manipulating the `stroke-dasharray` and `stroke-dashoffset` properties of an SVG `<circle>` element. Here are some of the other days that I worked on these particular properties and their notes:

- <a href="https://github.com/aniqatc/css-100/tree/main/entries/010">Day 10: Watch (Animating SVG Stroke)</a>
- <a href="https://github.com/aniqatc/css-100/tree/main/entries/020">Day 20: Send Mail (Animating SVG Polylines)</a>
- <a href="https://github.com/aniqatc/css-100/tree/main/entries/021">Day 21: PacMan Chomp (Animating PacMan's Chomp with stroke-dashoffset)</a>
- <a href="https://github.com/aniqatc/css-100/tree/main/entries/022">Day 22: Fitness Tracker (Animating Incomplete Progress Bar Circle)</a>
- <a href="https://github.com/aniqatc/css-100/tree/main/entries/024">Day 24: Success Button (Circle SVG Attributes)</a>
- <a href="https://github.com/aniqatc/css-100/tree/main/entries/027#polyline-svg--calculating-stroke-dasharray">Day 27: Checklist (Polyline SVG & Calculating stroke-dasharray)</a>
- <a href="https://github.com/aniqatc/css-100/tree/main/entries/030">Day 30: Animated Path (pathLength Attribute)</a>

## `cx` and `cy` attributes

As mentioned on <a href="https://github.com/aniqatc/css-100/tree/main/entries/024#circle-svg-element">Day 24</a>, `cx` and `cy` represent the "center x" and "center y" coordinates of the circle. By using `50%` for both these values, I ensure that the center point of the circle will always be centered with the SVG container (regardless of its height and widgth).

## Circle starting point (-90deg)

```css
.circle-loading {
	transform: rotate(-90deg);
}
```

The circle is rotated -90 degrees (or counter-clockwise 90 degrees) to move the starting point of the circle to the 12 o'clock position. The default starting point for SVG circle elements are at the 3 o'clock position which is 90 degrees clockwise from where I need it to be.

For animation, the circle will rotate 360 degrees, 1 full turn so the ending position would have to be `transform: rotate(270deg)`.

## `stroke-dashoffset` starting value

In the markup for this challenge, I defined the `pathLength` of both circles to be `1` unit so that I can animate the `stroke-dash-` properties using the value I defined. So, I defined the `stroke-dasharray` to be `1` so that the dash and path length are the same meaning there will be no visible gaps.

**Now**, the thing that makes this animation different from all the other animations I've created using these properties is that the `stroke-dashoffset` initial value is set to `2`. This gives the appearance of the `stroke-dashoffset` being set to `0` but there's a difference.

When `stroke-dashoffset` is set to `0`, the `stroke` is set at the beginning of the path and that's why the entire stroke is visible. When it is set to `1`, the stroke is offset by the its entire length, making the stroke start at the end of its own length and that's why we don't see it -- because it's starting point begins where the line ends.

So, when the `stroke-dashoffset` is set to `2`, it is offset the length around the cycle twice: once to make it invisible and the second time making it visible. When it gets animated down to `0`, the stroke will reduce itself (bringing the `stroke-dashoffset` to `1`), then it'll reappear (bringing the `stroke-dashoffset` to `1`).

Why is this relevant? I think a visual will make it clear. Here's what it looks like when the animation uses the following CSS (notice how it resets at the end...):

```css
@keyframes circle-loading-turn {
	from {
		transform: rotate(-90deg);
		stroke-dashoffset: 1;
	}
	to {
		transform: rotate(270deg);
		stroke-dashoffset: 0;
	}
}
```

<img src="/entries/035/images/loading-example-1.gif"/>

Here's what the desired animation looks like (and it's corresponding `@keyframes` declaration):

```css
@keyframes circle-loading-turn {
	from {
		transform: rotate(-90deg);
		stroke-dashoffset: 2;
	}
	to {
		transform: rotate(270deg);
		stroke-dashoffset: 0;
	}
}
```

<img src="/entries/035/images/loading-example-2.gif"/>
