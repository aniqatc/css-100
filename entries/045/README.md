## Day 045

**<a href="https://css100.aniqa.dev#day-045">Live Demo</a>**

**Time to Complete**: 20 mins

**Key Concepts**: animating polyline svg

**Notes**:

```html
<svg
	width="200px"
	height="70px"
	class="border">
	<polyline points="0,0 200,0 200,70 0,70 0,0" />
	<polyline
		points="0,-70 0,0 200,0 200,70 0,70 0,0 -70,0"
		pathLength="1"
		class="hover-border" />
</svg>
```

The first `<polyline>` is the background, static border that we see initially.

```css
.border {
	fill: transparent;
	stroke: #91c9ff;
	stroke-width: 1px;
}

.button:hover .border {
	fill: #4f95da;
	transition: fill 750ms ease-in;
}
```

The second `<polyline>` represents the border on hover: when a small line runs through the path of the `polyline`. This `<polyline>` has `pathLength` attribute (I wrote about this on <a href="https://github.com/aniqatc/css-100/tree/main/entries/030">Day 30</a>) that lets me define a unitless number that can be used to simplify values for `stroke-dashoffset` and `stroke-dasharray`.

Initially, the dashed stroke of the button's border is set up such that 10% (`0.1`) of the stroke dash is aligned along the path. This alignment is achieved through the `stroke-dasharray: 0.1 0.9`; property, which specifies the pattern of the dash. However, the dashed border is not visible initially due to the `stroke-dashoffset: -1`; setting. This offset effectively shifts the start of the dash pattern, keeping the dashed portion hidden.

When the user hovers over the button, the stroke-dashoffset is reset to `0`. This change brings the dashed section into view by aligning it with the border's path. As a result, the dashed border animates around the button.

```css
.hover-border {
	stroke-dashoffset: -1;
	stroke-width: 2px;
	stroke-dasharray: 0.1 0.9;
	stroke: #fff;
	transition: stroke-dashoffset 750ms ease-in;
}

.button:hover .hover-border {
	stroke-dashoffset: 0;
	stroke-dasharray: 0.1 0.9;
}
```
