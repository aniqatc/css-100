# Day 005

**Time to Complete**: 3 hours

**Key Concepts**: SVGs, transitions, tooltips

**Notes**:

#### Transition property on toggle element

**Transitions on `display: none` don't work**

For my tooltip to show up, I originally used `display: none` to remove it from the page and I used JavaScript to bring it back with `display: block` whenever the points on the line graph are hovered over. I wanted it to appear smoothly so I used a `transition` property but it wasn't making the tooltip appear nicely.

This is because using `display:none` removes the element from the **flow** of the page (kind of like absolute positioning except it's not even on the page visually). So we can't get the transition property to work as expected if the element isn't in the DOM - using `display: block` brings it into the DOM and we can't use a transition for that process; however, any transitions applied after it's in the page will work as expected.

**Using `visiblity`, `opacity`, & `height` property instead**

To get around this issue, I used a combination of the `visibility`, `opacity` and `height` properties to get a nice, smooth transition on my tooltip.

- `visibility` shows and hides an element without changing effecting elements around it
- `opacity` changes how transparent or opaque an element is (set to `0`, and then increased to `1` on hover, giving a fade-in effect)
- `height` sets the height (set to `0` and then, increased to intended height on hover)

#### Different ways to achieve a tooltip

**`data-` attribute and pseudoelements**

I learned how to build a tooltip before: I simply set the content inside a custom HTML `data-` attribute and later, used a pseudoelement's `content` property and `attr()` function to get the content to appear:

```html
<div class="tooltip" data-tooltip="Hello World!"></div>
```

```css
.tooltip {
	position: relative;
}

.tooltip::after {
	content: attr(data-tooltip);
	position: absolute;
	display: none;
}

.tooltip:hover::after {
	display: block;
}
```

Not including any extra styling/positioning properties but it's actually pretty straightforward.

**SVG tags cannot have pseudoelements**

I created my graph entirely with SVG elements and it almost seemed too easy... until I spent a good 30 minutes trying to figure out why my SVG `<circle>` elements weren't getting its respective pseudoelement to show up. I finally googled and found that **you can't create pseudoelements from the SVG elements**.

I didn't want to redo my graph entirely so I opted to create all the tooltips in a single `<div>` and I used absolute positioning to get them to appear in the correct spots. With the help of some JS event listeners `mouseover` and `mouseleave`, the tooltips appear rather nicely!

#### Writing SVGs from scratch

Whenever I see SVG code, it's always a bunch of numbers separated by commas and weird shorthand attributes in between. Up until now, I was intimidated by them and thought that everyone just uses generators/programs to create them. But they are actually AMAZING and not so bad to use (for something like this).

**Creating an SVG element**

- Declare the SVG with `<svg>` tag and the `viewBox` attribute:

```html
<svg viewBox="0 0 300 300"></svg>
```

- `viewBox` creates a frame in which our different SVG shapes, lines and content will be contained in.
  - First value: x-coordinate of the top-left corner of the box
  - Second value: y-coordinate of the top-left corner of the box
  - Third value: width of the box
  - Fourth value: height of the box

**Key SVG elements & attributes**

- `<line>` element creates a line; we just need provide the following attributes:

  - `x1` & `y1` first point of the line
  - `x2` & `y2` second point of the line
  - `stroke-width`
  - `stroke` color of the line

- `<circle>` element creates a circle:

  - `cx` x-coordinate for positioning
  - `cy` y-coordinate for positioning
  - `r` radius of the circle
  - `fill` to change default color

- `<g>` element is used to group elements

- `<polyline>` elements takes specific points and creates lines in between those points (perfect for a line graph!):
  - `points` attribute takes multiple `x,y` coordinates that are separated by a space to define multiple points
  - default `fill` is black and fills from the first point to the last point
  - style attributes: `stroke`, `stroke-width`, `stroke-dasharray`, `fill-opacity`

Note about `stroke-dasharray`: takes two values seperated by a space, # of dashes and space between dashes

**Resources**

This short <a href="https://youtu.be/nhieMw1vegc?si=z-qJQR9oxWqcP8As">YouTube video</a> makes it super clear how to create a `<polyline>`.
