## Day 058

**<a href="https://css100.aniqa.dev#day-058">Live Demo</a>**

**Time to Complete**: 3 hours

**Key Concepts**: reverse-engineer original code to get formula for each sphere slice, using @mixins, @function, and @if @else directives

**Notes**:

## Understanding the challenge

This challenge requires creating a 3D sphere that is sliced into 19 pieces: 9 representing the top half, 9 representing the bottom half with a single piece in the middle representing the widest section of the sphere (the diameter). The top and bottom half curve to create the spherical shape meaning that each slice gets smaller as it reaches the top / bottom edge. By default, the sliced sphere is slightly tilted and on hover, it rotates on the X-axis revealing the bottom section of the sphere at a tilt.

This guide by <a href="https://observablehq.com/@stroked/how-to-slice-a-sphere">Observable HQ called How To Slice A Sphere</a> has really great interactive elements that represent sliced spheres that helped me better understand the distance between each slice, the sizing of each slice and how each come together to create a spherical shape.

Note: the original solution also has an animation but after spending way too much time on getting the base design, I've decided to skip the animation (for now) but I will circle back to it at a later time!

## Reverse-engineering code solution

Below is the code solution from <a href="https://codepen.io/roydigerhund/pen/GZMLbK">Codepen by Matthias - the original 3D sphere for day 58</a>:

```scss
$radius: 200;

@for $i from 1 through 9 {
	$size: $radius - (2 * ($i * $i));
	$offset: ($i * 15) - (($i * $i) / 2);

	.slice-#{$i} {
		width: $size + px;
		height: $size + px;
		left: (($radius - $size) / 2) + px;
		top: (($radius - $size) / 2) + px;
		transform: translateY(($offset) + px) rotateX(90deg);
	}

	$id: $i + 9;

	.slice-#{$id} {
		width: $size + px;
		height: $size + px;
		left: (($radius - $size) / 2) + px;
		top: (($radius - $size) / 2) + px;
		transform: translateY((-1 * $offset) + px) rotateX(90deg);
	}
}
```

The author used a single `@for` loop to create matching slices for the 9 top (`slice-#{$i}`) slices and the 9 bottom slices (`slice-#{$id}` which selects slices between 11 to 19 because `$id: $i + 9`). This loop ensures that both the top and bottom half have matching slices in terms of size (`width` and `height`) and position (`left` and `top`) while mirroring the `transform: translateY()` value. The `transform: translateY()` value is mirrored by giving the top half a positive translation and the bottom half a negative translation - creating a mirrored curvature.

In terms of the formulas and variables used by the author:

- `$radius` represents the base starting slice (the middle piece - it should be called diameter actually... 😅)
- `$size` calculates the diameter of each slice - as the `$i` variable increases, the `(2 * ($i * $i))` value increases; since this value is subtracted from the base `200px` slice, each subsequent slice becomes smaller and smaller
- position formula set in the `top` and `left` values calculates the position of each slice by adjusting the position based on each slice's size ensuring that each slice is centered proportionate to the parent element's dimensions (in this case, it is `200px` by `200px`)
- `$offset` calculates the vertical offset of each slice along the Y-axis:
  - `($i * 15)` of the formula provides the increasing offset value
  - `(($i * $i) / 2)` of the formula reduces the increment for each subsequent slice
  - the top half is given a positive number (to move it upwards along the Y-axis) whereas the bottom half is given a negative number (to move it downwards along the Y-axis)

## My code solution using SCSS directives

I opted to utilize SCSS directives, such as, `@mixin`, `@function`, and `@if` `@else` statements, in order to organize all the formulas and variables in a manner that is easy to understand **and** because I really wanted a chance to practice using these directives.

### `@mixin` with `@include` directives

I used `@mixin` to create a reusable set of CSS properties named `transform()`, `size()` and `position()` - each takes a parameter of `$num` that is applied to the respective properties inside of each mixin. Each of these are used to set the values for `transform`, `width`, `height`, `top` and `left` for each of the 19 slices.

```scss
@mixin transform($num) {
	transform: translateY(#{$num}) rotateX(90deg);
}

@mixin size($num) {
	width: $num;
	height: $num;
}

@mixin position($num) {
	top: $num;
	left: $num;
}
```

They are used within a selector like this:

```scss
.slice {
	&-10 {
		@include position(0px);
		@include size(200px);
		@include transform(0);
	}
}
```

### Linear vs Quadratic for sizing and transformation values

Something I didn't go over when explaining the code solution by Matthias is why `$i * $i` appears in the `$size` and `$offset` formulas. Multiplying a number by itself is considered a quadratic expression and not linear. This ensures that the decrement in the `$size` is not linear but instead the decrease is more rapid as each slice moves away from the base center slice, which helps in creating the curvature effect of a sphere. Similarly, the `$offset` formula utilizes the `$i * $i` expression to increase the offset value with slice in a non-linear (non-uniform) manner - creating a more realistic depth as the slices are closer near the center of the sphere and they start to spread further apart as they reach the edges.

Now, if the sizes for the slices were reduced linearly, the slices would not accurately represent the spherical shape. Here's what happens if we replace the quadratic formula for a linear one:

`10px` is being used a constant to determine how much the slices should be adjusted:

**Sizing**
Quadratic: `$size: 200px - (2 * ($i * $i))`
Linear: `$size: 200px - ($i * 10px)`

**Transformation**
Quadratic: `$offset: ($i * 15) - (($i * $i) / 2)`
Linear: `$offset: ($i * 10px)`

Here's what it looks like:

<img src="/entries/058/images/linear-adjustment.png">

- Sizing: each slice is smaller than the one before it creating a pyramid shape
- Transformation: each slice is spaced evenly along the Y-axis (not producing the depth and spacing required in a spherical shape)

### Variables declarations & `@function` directive

Variables & expressions of note:

- `$i <= 9`, represents bottom half
- `$mirror_i`, represents top half
- `$i == 10`, represents middle piece

Function purposes:

- `squared`: accounts for sphere curvature
- `calculatePosition`: center each slice based on its size
- `calculateSize`: as `$i` increases, each subsequent slice size decreases
- `calculateTransform`: offset position to create space between each slice while maintaining sphere curvature

Here's how I organized these formulas into `@function` declarations:

```scss
@function squared($var) {
	@return $var * $var;
}

@function calculatePosition($i) {
	@return ((200px - calculateSize($i)) / 2);
}

@function calculateSize($i) {
	@if $i <= 9 {
		@return 200px - (2 * squared($i));
	} @else {
		$mirror_i: 20 - $i;
		@return 200px - (2 * squared($mirror_i));
	}
}

@function calculateTransform($i) {
	@if $i <= 9 {
		@return ($i * 15) - (squared($i) / 2) * 1px;
	} @else {
		$mirror_i: 20 - $i;
		@return (($mirror_i * 15) - (squared($mirror_i) / 2)) * -1px;
	}
}
```

### `@for` loop with `@if` `@else` logic

I created a loop that iterates through `slices-` 1 through 19, skipping 10 (the diameter base slice is hard-coded and doesn't require any extra calculations).

```scss
@for $i from 1 through 19 {
	@if $i != 10 {
		&-#{$i} {
			@include position(calculatePosition($i));
			@include size(calculateSize($i));
			@include transform(calculateTransform($i));
		}
	}
}
```

Ultimately, I ended up with the following shape:

<img src="/entries/058/images/final-sphere.png">

## Extra: hard-coded values

In case anyone is interested in what it would look like if we hard-coded the values:

```scss
.slice {
	// middle
	&-10 {
		@include position(0px);
		@include size(200px);
		@include transform(0);
	}

	// pair 1 + 19
	&-1 {
		@include position(1px);
		@include size(calculateSize(1));
		@include transform(14.5px);
	}

	&-19 {
		@include position(1px);
		@include size(198px);
		@include transform(-14.5px);
	}

	// pair 2 + 18
	&-2 {
		@include position(4px);
		@include size(192px);
		@include transform(28px);
	}

	&-18 {
		@include position(4px);
		@include size(192px);
		@include transform(-28px);
	}

	// pair 3 + 17
	&-3 {
		@include position(9px);
		@include size(182px);
		@include transform(40.5px);
	}

	&-17 {
		@include position(9px);
		@include size(182px);
		@include transform(-40.5px);
	}

	// pair 4 + 16
	&-4 {
		@include position(16px);
		@include size(168px);
		@include transform(52px);
	}

	&-16 {
		@include position(16px);
		@include size(168px);
		@include transform(-52px);
	}

	// pair 5 + 15
	&-5 {
		@include position(25px);
		@include size(150px);
		@include transform(62.5px);
	}

	&-15 {
		@include position(25px);
		@include size(150px);
		@include transform(-62.5px);
	}

	// pair 6 + 14
	&-6 {
		@include position(36px);
		@include size(128px);
		@include transform(72px);
	}

	&-14 {
		@include position(36px);
		@include size(128px);
		@include transform(-72px);
	}

	// pair 7 + 13
	&-7 {
		@include position(49px);
		@include size(102px);
		@include transform(80.5px);
	}

	&-13 {
		@include position(49px);
		@include size(102px);
		@include transform(-80.5px);
	}

	// pair 8 + 12
	&-8 {
		@include position(64px);
		@include size(72px);
		@include transform(88px);
	}

	&-12 {
		@include position(64px);
		@include size(72px);
		@include transform(-88px);
	}

	// pair 9 + 11
	&-9 {
		@include position(81px);
		@include size(38px);
		@include transform(94.5px);
	}

	&-11 {
		@include position(81px);
		@include size(38px);
		@include transform(-94.5px);
	}
}
```

## References

- <a href="https://codepen.io/roydigerhund/pen/GZMLbK">Codepen by Matthias Martin: Original 3D Sphere for Day 58</a>
- <a href="https://observablehq.com/@stroked/how-to-slice-a-sphere">How To Slice A Sphere by Observable HQ</a>
