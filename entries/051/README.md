## Day 051

**<a href="https://css100.aniqa.dev#day-051">Live Demo</a>**

**Time to Complete**: 1 hour

**Key Concepts**: border property, multiple labels for checkbox input, carousel numbers, for loops in SCSS

**Notes**:

## Border property to create a triangle

<img src="/entries/051/images/border-values.png">

`border-top` and `border-bottom` are given a transparent fill with a width of `12px` - although it cannot be seen, it occupies space. Meanwhile, `border-left` is filled with a white color and is `16px` wide. When a browser renders a border for an element, it creates a diagonal line from the corner of the **padding** box to the corner of the **border** box. The invisible top and bottom borders meet the **visible left border**, creating a diagonal line (which is the hypotenuse of a triangle) that points to the right (giving the visuals of a "play" icon).

## Multiple labels for checkbox input

On <a href="https://github.com/aniqatc/css-100/tree/main/entries/020">Day 20</a> and <a href="https://github.com/aniqatc/css-100/tree/main/entries/027">Day 27</a>, I used the following technique: using two label elements to represent the checkbox input state (unchecked vs checked). The two label elements, each with a `for` attribute that matches the `id` of the checkbox, allows each label to act as a clickable control for the checkbox.

```html
<div class="button">
	<input
		type="checkbox"
		id="icon-state" />
	<label
		for="icon-state"
		class="play"></label>
	<label
		for="icon-state"
		class="pause"></label>
</div>
```

Aside from styling the labels to look like a `play` and `pause` button, I had to use the `:checked` pseudo-class with the general sibling selector to change when each are shown. By default, the animation would play so the `pause` button should appear - once the `pause` is clicked (the checkbox is checked), the `pause` button will disappear and the `play` button will appear.

```scss
input[type='checkbox'] {
	display: none;

	&:checked ~ .pause {
		opacity: 0;
		transform: scale(0);
	}

	&:checked ~ .play {
		opacity: 1;
		transform: scale(1);
	}
}
```

## Carousel numbers

In order to increment the numbers each second, I created 4 different carousels: each represent the `ones`, `tens`, `hundredths` and `thousandths` place of a number. Each of these groups have 10 nested `div`s that represent the numbers `0`-`9`. Using flexbox, I have all of these numbers stacked on top of each other in rows.

```html
<div class="group thousandths">
	<span class="num">0</span>
	<span class="num">1</span>
	<span class="num">2</span>
	<span class="num">3</span>
	<span class="num">4</span>
	<span class="num">5</span>
	<span class="num">6</span>
	<span class="num">7</span>
	<span class="num">8</span>
	<span class="num">9</span>
</div>
```

Because carousels require a 3D space, the parent (`.counter`) countainer of these `group` elements have the `perspective` property applied, while, the `group` element has `transform-style: preserve-3d` applied. This combination ensures that transformations will be relative to the `group` element and will be applied within the 3D plane instead of a flat 2D plane.

Finally, each of the `num` elements must be given a different starting position using `rotateX()`. Because I am using SCSS (starting today!), I was able to use `@for` loop to apply the rotation to all of the `num` elements:

```scss
.num {
	position: absolute;
	width: 100%;
	height: 100%;
	backface-visibility: hidden;

	@for $num from 1 through 10 {
		&:nth-child(#{$num}) {
			transform: rotateX(($num - 1) * 36deg) translateZ(-80px);
		}
	}
}
```

The `translateZ(-80px)` is crucial for the carousel effect: it moves the element along the Z-axis, which creates depth in the 3D space. When the `translateZ()` is used with `rotateX()`, it positions the element in at different depths in the 3D space. Without this crucial declaration, all the elements would rotate around the same plane and we wouldn't see the carousel effect of the elements rotating into view as if its on a wheel. Additionally, `.group` class (which wraps around each group of `.num` elements), also has the `transform: translateZ(-80px)` applied - this establishes a consistent plane for the rotation of the child elements (`.num`). Without the `.group` using `translateZ()`, the overall carousel effect appears misaligned.

## Carousel numbers: SCSS syntax in the `@for` loop

```scss
@for $num from 1 through 10 {
	&:nth-child(#{$num}) {
		transform: rotateX(($num - 1) * 36deg) translateZ(-80px);
	}
}
```

- `@for $num from 1 through 10` declares a loop that will run the `$num` variable and the values will be `1`-`10`, incremented by `1`
- `&:nth-child(#{$num})`:
  - `&` takes the value of the parent selector (in this case, `.num`)
  - `:nth-child(#{$num})` is used to selected the `nth` element of `num` -- the `#` is used to interpolate the pseudo-class with the variable value
- `transform: rotateX(($num - 1) * 36deg) translateZ(-80px)` applies two transformations:
  - `rotateX()` applies a rotation along the X-axis and increase by `36deg` in each iteration.
  - `translateZ()` is used to move the element along the Z-axis

Once it is compiled into CSS, here's what it'll look like:

```css
:nth-child(1) {
	transform: rotateX(0deg) translateZ(-80px);
}
:nth-child(2) {
	transform: rotateX(36deg) translateZ(-80px);
}
/* ...continues for each child up to nth-child(10) */
:nth-child(10) {
	transform: rotateX(324deg) translateZ(-80px);
}
```

## Carousel animation: SCSS syntax in the `@for` loop

Now that the carousel has all of its elements in place, I can apply the animation. For the animation, I used SCSS's `@for` loop:

```scss
@keyframes num-change {
	@for $i from 0 through 9 {
		#{$i * 10}%,
		#{($i + 1) * 10 - 1}% {
			transform: rotateX(-#{$i * 36}deg);
		}
	}
	100% {
		transform: rotateX(-360deg);
	}
}
```

Here's the breakdown:

- `@for $i from 0 through 9` declares the loop and that it will have a variable called `i` (index) that starts at 0 and will finish with 9, incremented by `1` in each iteration
- `#{$i * 10}%, #{($i + 1) * 10 - 1}%` creates a range for each keyframe declaration (e.g. `0%-9%`, `10%-19%`, `20%-29%`, etc):
  - `#{}` is used to dynamically calculate percentage value for the keyframes steps
  - `$i * 10` sets the starting percentages for each keyframe (0%, 10%, 20%...)
  - `($i + 1) * 10 - 1` sets the ending percentages for each keyframe (9%, 19%, 29%)
- `transform: rotateX(-#{$i * 36}deg)` applies a rotation on the X-axis: - `0%-9%` rotation is `0deg` - `10%-19%` rotation is at `-36deg` - `20%-29%` rotation is at `-72deg`
  Note: this rotation will move the carousel hiding the previous `num` element and revealing the next `num` element -- giving us the effect of a number counter.
- `100% { transform: rotateX(-360deg); }` represents the final keyframe of the animation, it is set explicitly to ensure that the animation completes a full circle `-360deg`

Once it is compiled into CSS, here's what it'll look like:

```css
@keyframes num-change {
	0%,
	9.99% {
		transform: translateZ(-61px) rotateX(0deg);
	}
	10%,
	19.99% {
		transform: translateZ(-61px) rotateX(-36deg);
	}
	20%,
	29.99% {
		transform: translateZ(-61px) rotateX(-72deg);
	}
	30%,
	39.99% {
		transform: translateZ(-61px) rotateX(-108deg);
	}
	40%,
	49.99% {
		transform: translateZ(-61px) rotateX(-144deg);
	}
	50%,
	59.99% {
		transform: translateZ(-61px) rotateX(-180deg);
	}
	60%,
	69.99% {
		transform: translateZ(-61px) rotateX(-216deg);
	}
	70%,
	79.99% {
		transform: translateZ(-61px) rotateX(-252deg);
	}
	80%,
	89.99% {
		transform: translateZ(-61px) rotateX(-288deg);
	}
	90%,
	99.99% {
		transform: translateZ(-61px) rotateX(-324deg);
	}
	100% {
		transform: translateZ(-61px) rotateX(-360deg);
	}
}
```

This animation is applied to the `.group` class which is wrapped around each group of `.num` elements. Additionally, each `.group` also has one of the following classes: `ones`, `tens`, `hundredths` and `thousandths`. This is because each of these groups will animate (rotate the carousel) at different speeds. For example, the `tens` place carousel should turn after `10s` once the `ones` place carousel completes a full 360 degree turn.

The idea is to create a visual representation of a number counter where each digit place rotates at a different speed, corresponding to how quickly each place would change in a real-world scenario.

```scss
& .group {
	transform-style: preserve-3d;
	transform: translateZ(-80px);
	animation: num-change linear infinite;

	&.thousandths {
		animation-duration: 10000s;
	}

	&.hundredths {
		animation-duration: 1000s;
	}

	&.tens {
		animation-duration: 100s;
	}

	&.ones {
		animation-duration: 10s;
	}
}
```

## References

- <a href="https://css-tricks.com/snippets/css/css-triangle/">CSS triangle with border properties</a>
- <a href="https://3dtransforms.desandro.com/carousel">Intro to CSS 3D Transforms: Carousel</a>
- <a href="https://github.com/aniqatc/css-100/tree/main/entries/020">Day 20: Send mail - two buttons for single checkbox input</a>
- <a href="https://github.com/aniqatc/css-100/tree/main/entries/027">Day 27: To-do list - creating multiple labels for checkbox input</a>
