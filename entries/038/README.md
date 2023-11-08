## Day 038

**<a href="https://css100.aniqa.dev#day-038">Live Demo</a>**

**Time to Complete**: 20 mins

**Key Concepts**: transitions and transforms

**Notes**:

Today's challenge was super easy:

There are two shapes that are identical except for having a different fill color. They're both stacked on top of each other using absolute positioning.

One of them is meant to expand, filling the entire screen - while the other shape is meant to grow into the position of the original shape's initial position and size.

Here's how I tackled it:

- The original shape that we see will scale up when the user click's anywhere on the frame:

```css
.expand {
	transform: scale(20);
}
```

- The second shape will scale up just enough to fill the original position of the first shape:

```css
.normal {
	transform: scale(1);
	opacity: 1;
}
```

Note: the second shape's initial styling renders it invisible at first (`transform: scale(0)` and `opacity: 0`).

Lastly, I applied the following transition to both the shapes: `all 500ms ease-out`. This is what gives a smooth animation when `.expand` and `.normal` are toggled on and off the shapes.
