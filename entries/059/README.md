## Day 059

**<a href="https://css100.aniqa.dev#day-059">Live Demo</a>**

**Time to Complete**: 1 hour

**Key Concepts**: background properties, @extend directive, modulo operator, adjustment via JavaScript

**Notes**:

## Background properties

Since I'll be working with two images using `background-image` to manipulate them with SCSS, I went over all the available `background-` properties to see what I can do and what my limitations might be.

- `background-color` => sets background color
- `background-image` => sets one or more background images and/or gradients
- `background-position` => sets starting position of a background image using x- and y-coordinates
- `background-size` => sets size of background image (width and height values or use one of the default values - `cover`, `contain`)
- `background-repeat` => sets how and if background image is repeated
- `background-origin` => sets the origin position (`border-box`, `padding-box`, `content-box`)
- `background-clip` => sets how far background should extend within an element (`border-box`, `padding-box`, `content-box`)
- `background-attachment` => sets whether background image scrolls with the rest of the page or is fixed (`fixed`, `scroll`, `local`)
- `background` => shorthand property for all the above

## `@extend` directive

As mentioned before, I'll be working with two images and these two images will have the same base styling in terms of sizing and positioning. Instead of repeating the same property and value pairs, I opted to create a <a href="https://sass-lang.com/documentation/style-rules/placeholder-selectors/">placeholder selector</a> which starts with a `%` to signify that it's a declaration of styles that are only intended to be extended.

```scss
%background {
	position: relative;
	background-repeat: no-repeat;
	background-position: center center;
	height: 400px;
}
```

The two classes that declare a `background-image` also use `@extend` directive to apply the `%background` placeholder styling to those images:

```scss
.slices {
	@extend %background;
	background-size: 800px 400px;
	background-image: url('/entries/059/images/slice-1.jpeg');

	& .slice {
		@extend %background;
		background-image: url('/entries/059/images/slice-2.jpeg');
		float: left;
		opacity: 0;
		transition: all 1s ease-out;
	}
	// additional styling removed for brevity ...
}
```

## `@for` loop with modulo operator
