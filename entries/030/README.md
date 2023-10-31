## Day 030

**<a href="https://css100.aniqa.dev#day-030">Live Demo</a>**

**Time to Complete**: 20 mins

**Key Concepts**: `pathLength` attribute & animating `<path>` lines

**Notes**:

- On <a href="https://github.com/aniqatc/css-100/tree/main/entries/028">Day 28</a>, I wrote about how we define the `<path>` element's `d` attribute with commands to create lines, curves, arcs and all types of shapes.

- On <a href="https://github.com/aniqatc/css-100/tree/main/entries/027#polyline-svg--calculating-stroke-dasharray">Day 27</a>, I wrote about how you can calculate the length of different SVG elements by scratch -- for lines: getting the distance between different points and adding them up and for circles: calculating circumference. In addition to that, I shared how we can get the value using JavaScript's built-in method (`getTotalLength()`).

For today's challenge, I learned another trick that makes animating SVGs easier -- which is using the `pathLength` attribute. The `pathLength` attribute lets us specify a unitless total length value for the path. It can be used on all of the SVG tags: `line`, `circle`, `polyline`, `rect`, and `polygon`.

If we can define the length of our element, then we can skip calculating `stroke-dasharray` from scratch or using JavaScript. The value set in `pathLength` doesn't actually apply any type of constraint to the element itself -- it's simply a way to make it easier for us to calculate values for `stroke-dasharray` and `stroke-dashoffset`.

For example, the `<path>` element used for this challenge has a fixed height and weight defined in the `svg-wrapper` class. It is unaffected by the `pathLength` attribute.

```html
<svg class="svg-wrapper">
	<path
		class="path"
		pathLength="1"
		d="M0,4.67941475 C0,4.67941475 42.5049504,21.0558251 95.0896109,21.0558243 C147.674271,21.0558235 149.896403,2 196.011077,2 C242.125751,2 242.386923,58.3217419 200.000004,58.3217392 C157.613085,58.3217365 163.18433,13.5133498 212.755329,13.5133498 C262.326328,13.5133498 284.162205,38.9236796 335.140774,38.9236794 C386.119343,38.9236791 399.999996,30.1608696 399.999996,30.1608696"
	></path>
	<circle class="circle" r="10" cx="400" cy="35" />
</svg>
```

Instead, we can now set `stroke-dasharray` and `stroke-dashoffset` based on the number in `pathLength`:

```css
.path {
	stroke-dasharray: 0.05 0.95;
	stroke-dashoffset: 0;
	animation: path-line 3s ease-out infinite reverse;
}

@keyframes path-line {
	to {
		stroke-dashoffset: 1;
	}
}
```

- `0.05` represents the dash value which in this case is 5% of the length of the element - so only 5% will be visible and `0.95` or 95% of the element will be a gap
- `stroke-dashoffset` is set to `0` so that nothing can be seen
- the @keyframes declaration for `path-line` defines that the `stroke-dashoffset` is `1` meaning the 5% gap will run along 100% of the line

## Resources

- <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pathLength">MDN Reference: pathLength Attribute</a>
- <a href="https://css-tricks.com/a-trick-that-makes-drawing-svg-lines-way-easier/">CSS Tricks: A Trick That Makes Drawing SVG Lines Way Easier</a>
