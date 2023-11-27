## Day 054

**<a href="https://css100.aniqa.dev#day-054">Live Demo</a>**

**Time to Complete**: 30 mins

**Key Concepts**: mixins with parameters, nth-child(), CSS variables vs SCSS variables

**Notes**:

The initial markup only includes `div` elements to represent three waves:

```html
<div class="wave wave-back"></div>
<div class="wave wave-middle"></div>
<div class="wave wave-front"></div>
```

For each of these `div` elements, I dynamically added 20 `div` elements with the class `.circle` to create the appearance of waves using circular elements.

## Mixins with parameters

The `.circle` elements all have the same styling apart from having different background colors. Instead of repeating the same properties and values over again for each set of circles for each wave, I created a Sass `@mixin` that takes two parameters that adjust the background color values but keep the rest of the declarations the same.

```scss
@mixin general-circle($bg, $bg-invert) {
	background: $bg;
	height: 45px;
	width: 45px;
	border-radius: 50%;
	margin-top: -25px;

	// Explain in next section
	&:nth-child(2n + 2) {
		background: $bg-invert;
	}
}
```

Using parameters in a `@mixin` means that we can pass a different value each time it's called and that value will be applied. Here's how I used it to apply different background colors for each of the circles based on which parent `.wave` container it is nested in:

```scss
&.wave-back {
	// removed other styles for brevity
	background: $back-color;

	& .circle {
		@include general-circle($back-color, $bg-color);
	}
}

&.wave-middle {
	// removed other styles for brevity
	background: $middle-color;

	& .circle {
		@include general-circle($middle-color, $back-color);
	}
}

&.wave-front {
	// removed other styles for brevity
	background: $front-color;

	& .circle {
		@include general-circle($front-color, $middle-color);
	}
}
```

## `nth-child()` in `@mixin`

```scss
@mixin general-circle($bg, $bg-invert) {
	// removed other styles for brevity -- see above

	&:nth-child(2n + 2) {
		background: $bg-invert;
	}
}
```

`nth-child(2n + 2)` targets every even-numbered element among the siblings of the element where the `@mixin` is included. In the context of the `@mixin` it is applied to, it is given a differnt background color which is meant to be the background color of the element that is behind it (the wave before it) so that it can create the illusion of gaps between the waves.

## CSS variables vs SCSS variables

Unfortunately, SCSS variables don't work directly within CSS `@keyframes` animations. SCSS variables are processed at compile time (not runtime) so when it is compiled into CSS, the variables are given hard-coded values and lose the variable-like behavior. This basically means that SCSS variables are constants that do not change once compiled.

For the animation, I needed the values to be adjusted three times but using a single `@keyframes` animation. So, in order to get it to work the way I want, I used CSS variables for the animation as the native CSS variables are dynamic.

```scss
@keyframes wave-shifting {
	from {
		transform: translateX(var(--start-pos));
	}
	to {
		transform: translateX(var(--end-pos));

```

The `--start-pos` and `--end-pos` are defined under every individual `wave-` class:

```scss
& .wave {
	// removed other styles for brevity
	animation: wave-shifting infinite 3s ease-in-out alternate both;

	&.wave-back {
		--start-pos: -50px;
		--end-pos: 0;
		// removed other styles for brevity
	}

	&.wave-middle {
		--start-pos: 0px;
		--end-pos: -50px;
		// removed other styles for brevity
	}

	&.wave-front {
		--start-pos: -50px;
		--end-pos: 0;
		// removed other styles for brevity
	}
}
```
