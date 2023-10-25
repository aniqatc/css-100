# Day 011

**<a href="https://css100.aniqa.dev#day-011">Live Demo</a>**

**Time to Complete**: 25 mins

**Key Concepts**: importing external SVGs, transform-origin property, radial-gradient

**Notes**:

**Importing external SVG files**

An article by CSS-Tricks with <a href="https://css-tricks.com/using-svg/">everything about using SVGs</a>.

I had to use the SVG link provided by the challenge to get the shoe design and while there was many options, I opted to import the SVG using the `<image>` tag. I wasn't making any changes to the SVG itself and I don't need the SVG to scale any smaller or larger so treating it as an image works for me here.

**Radial Gradients**

Radial gradients join colors from the center going outwards:

```css
.syntax {
	background: radial-gradient(
		_shape_ _size_ at _position_,
		start-color,
		...,
		last-color
	);
}
```

- shape defines whether ending shape is an ellipse or a circle (ellipse is the default)
- size defines the size of the gradient (farthest corner is default)
- position defines the gradient's position -- similar to `transform-origin` or `background-position` (center is default)
- minimum 2 colors need to be defined, the starting color and the final color

**Understanding `transform-origin` property values**

<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin">MDN's Documentation on Transform Origin</a>

```css
.shoe {
	/* 50% of element's width & 0% of element's height */
	transform-origin: 50% 0%;
	/* 50% of x-axis (center) from 0% of y-axis (top) */
	transform-origin: center top;
}
```

- I've found the best way to understand how to use percentage values for `transform-origin` is to understand how they compare to the keyword values (`center`, `bottom`, `left`, etc).
