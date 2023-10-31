## Day 027

**<a href="https://css100.aniqa.dev#day-027">Live Demo</a>**

**Time to Complete**: 45 mins

**Key Concepts**: multiple labels for checkbox input, polyline svg & calculating stroke-dasharray

**Notes**:

## Multiple labels for the checkbox input

When I saw this challenge, I immediately knew that I was going to use checkbox `<input>` elements with two `<label>` elements dedicated to it. One would represent the unchecked state and the other would show a custom checkmark. I learned about this method when I did <a href="https://github.com/aniqatc/css-100/tree/main/entries/020">Day 20's challenge</a> where one button triggered an animation and the other reset the animation -- in reality, a checkbox was being checked and unchecked - they were just disguised as buttons.

Unsure if I mentioned this in Day 20's writeup, but when we wrap an `<input>` inside a `<label>` element or if we attribute the `<label>` element using the `for` attribute, that `<label>` element will trigger the checkbox as if we clicked directly on the checkbox itself. This is actually the case for other `<input>` elements.

Here's what the markup looks like (some details omitted for brevity):

```html
<input type="checkbox" id="item-1" />
<label for="item-1" class="label">Create a list</label>
<label for="item-1" class="circle"></label>
<svg class="checkmark">
	<polyline />
</svg>
```

Each of these elements are siblings to one another, housed inside a `<li>` element. Whenever the checkbox is checked, each of these will be targeted using the **general sibling combinator**. This combinator lets us target general siblings looking forward -- so, `input` can target `.label`, `.circle` and `.checkmark` but `.checkmark` can't use the general sibling combinator to target the `input` styles.

(There is also the **adjacent sibling combinator** which targets siblings that are immediately next to each other... This could work if `input` only needed to target `.label` since they are adjacent but it won't let us target the remaining two siblings.)

Here's what the declarations look like:

```css
input:checked ~ .label {
	color: #c8d4d9;
	transition: color 300ms ease-in;
}

input:checked ~ .circle {
	transform: scale(1.3);
	opacity: 0;
	transition: all 300ms ease-in;
}

input:checked ~ .checkmark {
	stroke-dashoffset: 0;
	transition: all 450ms ease-in 300ms;
}
```

## Polyline SVG & Calculating `stroke-dasharray`

**Figuring out the points for the polyline**

The first time I wrote my own `<polyline>` points from scratch was when I did <a href="https://github.com/aniqatc/css-100/tree/main/entries/005">Day 5's challenge</a> which was a double line graph. I remember being amazed at how easy it was.

For a `<polyline>` element, we define `x` and `y` coordinates in a list that specify different points that a line will pass through. I noticed that they can be written in two ways that are acceptable:

```html
<polyline points="x1, y1 x2, y2 x3, y3" />
```

- each coordinate pair is separated by a space while each matching `x` and `y` values are separated by a comma

```html
<polyline points="x1 y1, x2 y2, x3 y3" />
```

- each coordinate pair is separated by a comma while each matching `x` and `y` values are separated by a space

For this challenge, I first set a `height` of `20px` and `width` of `20px` to the `svg` container that would house my `polyline`. Then, I started to map out the coordinates until it looked right - like a checkmark! I noticed I wasn't using the entire `svg` container so then I adjusted the `height` to match the highest `y` value and the `width` to match the highest `x` value in my `points` attribute.

The result:

```html
<svg height="18" width="16">
	<polyline points="0 12, 6 18, 16 4" />
</svg>
```

**Formula for `stroke-dasharray`**

Okay, let's start with another reference: for <a href="https://github.com/aniqatc/css-100/tree/main/entries/022">Day 22's challenge</a>, I created circular progress bars by using the `<circle>` element and manipulating the `stroke-dasharray` and `stroke-dashoffset` properties. The most important part of it was to figure out what values would create enough dashes that the gaps aren't visible. The same needs to be done for the `<polyline>` element in this challenge.

For `<circle>` elements, I calculated the circumference of the `<circle>` element using the `r` attribute that I specified which represents the radius. Whatever the circumference is would be the value that I set `stroke-dasharray` to.

The equivalent for a `<polyline>` element would be to find the exact length of the line it creates. Whatever the distance is will be the value I used for the `stroke-dasharray`. This will allow me to animate it in a way that makes it look like it's being drawn and erased.

So here's my understanding of how to calculate the distance of the line:

- First point is `(0, 10)`
- Second point is `(6, 18)`
- Third point is `(18, 4)`

These points create two lines:

- First line is from `(0, 10)` to `(6, 18)`
- Second line is from `(6, 18)` to `(18, 4)`

We have to get the length of both lines and add them together = the sum value is what I'll set `stroke-dasharray` to.

Here's comes the formula: √((x2 – x1)² + (y2 – y1)²)

- First line distance = `10`
- Second line distance = `18.44`

The `stroke-dasharray` would be `28.44` but I'll round up and set it to `29`. It worked perfectly! There were no visible gaps. I also set the `stroke-dashoffset` to `29` as well so that the checkmark wouldn't be visible until the checkbox is checked. Once the checkbox is checked, the `stroke-dashoffset` would be set to `0`.

**Calculate `stroke-dasharray` value using JavaScript**

Okay, guess what? There's a **super easy** way to calculate the distance of any SVG element using JavaScript and it really only requires one line (if we skip declaring variables)! I only went through the trouble of writing how to calculate it the long way because I really like to know how and why things work -- it just helps me make sense of what I'm creating.

Anyways, here is the quick and magical way of getting the distance:

```javascript
let polyline = document.querySelector('polyline');
let length = polyline.getTotalLength();
console.log(length); // This will give you the total length of the polyline
```

- `getTotalLength()` returns the total length of the SVG path (and it does this for all SVG elements)

Apparently, there are dozens of native JavaScript functions that pertain to SVG elements. This really opens up a world of possibilities since I didn't know these existed. It makes me more excited to create more custom SVG elements knowing I have JavaScript to do these crazy calculations for me!

## Reference: Additional SVG Methods and Properties:

- <a href="https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement">MDN Reference: SVGGeometryElement represents SVG elements</a>
