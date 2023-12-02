## Day 059

**<a href="https://css100.aniqa.dev#day-059">Live Demo</a>**

**Time to Complete**: 1 hour

**Key Concepts**: background properties, @extend directive, modulo operator, background properties adjusted via JavaScript

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

I'll explain how I got several slices of the second image to appear and disappear on hover while retaining the image's aspect ratio (below) but first, I wanted to share how I used the `%` modulo operator in a `@for` loop to apply a different transition value for each of the slices based on if they are are an odd or even number:

```scss
@for $num from 1 through 12 {
	& .slice-#{$num} {
		@if $num % 2 == 0 {
			transform: translateY(50px); // even
		} @else {
			transform: translateY(-50px); // odd
		}
	}
}
```

If the `$num` is an even number, dividing it by `2` will result in a `0` for its remainder value -- in that case, `translateY(50px)` will be applied, otherwise, `translateY(-50px)` will be applied. This moves every other slice either upwards out of the frame or downwards out of the frame.

## Adjusting background properties via JS

Since my website uses a responsive grid, I have to ensure that all my challenge frames also use styling and layout properties and values that can adjust when the window is resized (so, I can't really use fixed values). Initially, I hoped that using percentage values would be sufficient to adjust the image but for some reason, the images appeared out-of-sync most of the time.

So, I figured I couldn't do it with just SCSS because I would need each slices' `width`, `background-size` and `-position` properties to be adjusted every time the frame is resized - which sounds like a task that can be completed using JavaScript.

Using `resize` event on the `window` object, I'll find the frame's current `width` and apply the following calculations:

- Based on the frame's `width`, calculate each slice's `width` by dividing the frame `width` by the number of slices (allowing each slice to be evenly distributed along the frame)
- For the slice `background-position` property, the image needs to be shifted on the x-axis to the left which requires a negative value - this shift is required so that each slice shows the right slice of the original image. This would be calculated by having a negative linear shift (slice width times slice element number)
- For the slice `background-size` property, I need two values:
  - Width which is set to be the same as the frame's width (when all the slices are aligned - the image should appear at this width)
  - Height is set to `400px` because the height never changes

Here's how I wrote it in JavaScript:

```javascript
window.onload = adjustSlices; // adjust on initial load
window.addEventListener('resize', adjustSlices); // adjust on resize

function adjustSlices() {
	const container = document.querySelector('.slices');
	const slices = container.querySelectorAll('.slice');

	const containerWidth = container.offsetWidth; // width of frame
	const sliceWidth = containerWidth / slices.length; // frame width divided by # of slides

	slices.forEach((slice, index) => {
		const x = -(sliceWidth * index); // negative value to shift image to the left
		slice.style.width = sliceWidth + 'px';
		slice.style.backgroundPosition = `${x}px 0px`;
		slice.style.backgroundSize = `${containerWidth}px 400px`;
	});
}
```
