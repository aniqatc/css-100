# Day 005

**Time to Complete**: 3 hours

**Key Concepts**: SVGs, transitions, tooltips

**Notes**:

#### Transition property on toggle element

**Transitions on `display: none` don't work**

For my tooltip to show up, I originally use `display: none` to remove it from the page and I use JavaScript to bring it back with `display: block` whenever the points on the line graph are hovered over. I wanted it to appear smoothly so I used a `transition` property but it wasn't making the tooltip appear nicely.

This is because using `display:none` removes the element from the **flow** of the page (kind of like absolute positioning except it's not even on the page visually).

**Using `visiblity`, `opacity`, & `height` property instead**

To get around this issue, I used a combination of the `visibility`, `opacity` and `height` properties to get a nice, smooth transition on my tooltip.

- `visibility` shows and hides an element without changing effecting elements around it
- `opacity` changes how transparent or opaque an element is
- `height` sets the height

#### Different ways to achieve a tooltip

**`data-` attribute and pseudoelements**

I learned how to build a tooltip before and I simply set the content inside a custom HTML `data-` attribute and later, used a pseudoelement's `content` property to get the content to appear:

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

Note including any extra styling properties so it's actually pretty straightforward.

**SVG tags cannot have pseudoelements**

I created my graph entirely with SVG elements and it almost seemed too easy... until I spent a good 30 minutes trying to figure out why my SVG `<circle>` elements weren't getting its respective pseudoelement to show up. I finally googled and found that **you can't create pseudoelements from the SVG elements**.

I didn't want to redo my graph entirely so I opted to create all the tooltips in a single `<div>` and I used absolute positioning to get them to appear in the correct spots. With the help of some JS event listeners `mouseover` and `mouseleave`, the tooltips appear rather nicely!

#### Writing SVGs from scratch
