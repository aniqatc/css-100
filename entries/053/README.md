## Day 053

**<a href="https://css100.aniqa.dev#day-053">Live Demo</a>**

**Time to Complete**: 25 mins

**Key Concepts**: cross-browser input range styling

**Notes**:

## Reset and hide default styling

In order to remove the default styling for an `<input type="range"/>` element so that I can add my own custom styling, I need to adjust the following properties:

- `-webkit-appearance` and `appearance` being set to `none` removes default styling in Webkit-based browsers and all other browsers
- `background: transparent` makes the background of the range input transparent (as by default, it shows up white in Chrome)
- `width: 230px` is set explicitly for the range track

```scss
input[type='range'] {
	-webkit-appearance: none;
	appearance: none;
	background: transparent;
	width: 230px;

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
	}
}
```

## Mixin for thumb and track styling

SCSS mixins allow me to create reusable sets of CSS properties. Since I'll be applying **mostly** the same styling for all the pseudo-elements with vendor prefixes, it made sense to set the general styling attributes into mixins.

#### `@mixin thumb`

`@mixin thumb` represents the styling for the thumb - the slider control that users can drag.

```scss
@mixin thumb {
	cursor: pointer;
	height: 24px;
	width: 24px;
	border-radius: 50%;
	border: 2px solid $primary-color;
	background: #fff url(/path/to/slider-thumb.png) center no-repeat;
	background-size: 50% 50%;
}
```

For the following psuedo-elements, I used `@include thumb()` to apply these styles:

- `::-ms-thumb`
- `::-moz-range-thumb`
- `::-webkit-slider-thumb`

A note to keep in mind for `::-webkit-slider-thumb`: the thumb is not perfectly centered above the range track. In order to ensure it's centered nicely, we have to apply `margin-top` with the following calculation: `(track height / 2) - (thumb height / 2)`

#### `@mixin track`

`@mixin track` represents the styling for range track.

```scss
@mixin track {
	width: 100%;
	height: 4px;
	border-radius: 3px;
	box-shadow: inset 0 1px 1px 0 rgba(0, 0, 0, 0.3);
	background: $primary-color;
	border: 0;
}
```

For the following psuedo-elements, I used `@include track()` to apply these styles:

- `::ms-track`
- `::-moz-range-track`
- `::-webkit-slider-runnable-track`

For Internet Explorer input ranges, we need to also use the following pseudo-selectors (that target part of the range track) and adjust the following properties:

```scss
&::-ms-fill-lower,
&::-ms-fill-upper {
	background: $primary-color;
	border: 0;
}
```

## Focus styling

The default outline styling that occurs when the input range is focused is a blue color. It doesn't match the rest of my design so I created a mixin to adjust the focus styling and applied it to the relevant pseudo-elements:

```scss
@mixin focus {
	outline: 2px solid $outline-color;
}

input[type='range'] {
	-webkit-appearance: none;
	appearance: none;
	background: transparent;
	width: 230px;

	&:focus {
		outline-color: $outline-color;

		&::-webkit-slider-thumb {
			@include focus();
		}

		&::-moz-range-thumb {
			@include focus();
		}
	}
}
```

## References

- <a href="https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/">CSS Tricks: Styling Cross-Browser Compatible Range Inputs with CSS</a>
- <a href="https://www.smashingmagazine.com/2021/12/create-custom-range-input-consistent-browsers/">Creating A Custom Range Input That Looks Consistent Across All Browsers</a>

```

```
