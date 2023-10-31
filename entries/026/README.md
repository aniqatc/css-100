## Day 026

**<a href="https://css100.aniqa.dev#day-026">Live Demo</a>**

**Time to Complete**: 1 hour

**Key Concepts**: center elements in absolute positioning without transform, modulo operator

**Notes**:

## Centering elements that use absolute positioning without transforms

My usual go-to trick to center an element (relative to its parent) is to use the following snippet:

```css
.element {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
```

Most of the time, this works great... Until I use the `transform` property for something else like an animation uses the `scale()` function or if I want to rotate an element. When I apply the new transform to do a different function, it'll cancel out the `translate(-50%, -50%)` that I initially wrote. The way around this is to include the `translate(-50%, -50%)` along with the additional transform function that I'd like to use:

```css
.element {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.element:hover {
	transform: translate(-50%, -50%) scale(1.5) rotate(45deg);
}
```

But that's not really a great solution (in my opinion). Because what if I have an animation that requires multiple transformations -- where the element is being animated and is scaling and moving and being skewed -- I would have to repeat `translate(-50%, -50%)` over and over again.

I actually faced this issue when I did <a href="https://github.com/aniqatc/css-100/tree/main/entries/016">Day 16's challenge</a>. I used `translate(-50%, -50%)` so many times that I needed to put it into a CSS variable named `--center-position`. I finally figured out the perfect trick to get around this issue **but** for the sake of context, I'll leave Day 16's CSS file untouched so that others can see exactly why we should NOT do that.

**The solution using negative margins**

Finally, the solution. We can forgo using the `transform` property to center our element and keep the rest of the properties as is (`top: 50%`, and `left: 50%`). Instead, we'll use the `margin` property. Using positive values for `margin` will create space outside our element's box but if we use **negative** values for `margin`, then our element's box will lose space in those directions.

If we set `margin-top` to half the size of our element's `height`, it'll center our element vertically -- and if we set `margin-left` to half the size of our element's `width`, it'll center our element horizontally.

Here's an example based on my modal element:

```css
.modal {
	position: absolute;
	top: 50%;
	left: 50%;

	width: 275px;
	height: 150px;

	margin-top: -75px; /* 75 + 75 = 150 */
	margin-left: -137.5px; /* 137.5 + 137.5 = 275 */
}
```

**The solution using `calc()`**

If we're just trying to move the element half of its width horizontally and half of its height vertically. Why can't we just do the math and apply it to `top` and `left`? Well, those values are currently in percentages so to convert them would be a hassle as `50%` will mean something different for every element.

**But** that's where `calc()` comes in to play! `calc()` lets us do basic arithmetics between values that have different units. So we can do mathematical operations with values using percentages and `px` units and so much more. This eliminates the need to use negative margins.

Here's an example based on my modal element:

```css
.modal {
	width: 275px;
	height: 150px;
	position: absolute;
	top: calc(50% - 75px);
	left: calc(50% - 137.5px);
}
```

## Modulo Operator `%`

A few days ago, I read an <a href="https://www.joshwcomeau.com/javascript/modulo-operator/">article by Josh Comeau about the JS Modulo Operator</a>. Before that, I had only known it as the operator that lets us get the remainder value for division equations. Josh does a fantastic job at explaining what the modulo operator does so when I worked on today's challenge - I immediately thought of using the modulo operator to cycle out which modal to show. It took some trial-and-error before it clicked but I'm so glad I worked through the confusion.

Anyways, here's how I used it. Let's start off with some context:

```javascript
const modals = document.querySelectorAll('.modal');
const buttons = document.querySelectorAll('.button');

buttons.forEach((button, index) => {
	button.addEventListener('click', () => {
		/* current button click initiates the removal of its respective modal */
		modals[index].classList.remove('active');
		modals[index].classList.add('inactive');

		/* see below for explanation */
		modals[index === 2 ? index - 2 : index + 1].classList.add('active');
		modals[index === 2 ? index - 2 : index + 1].classList.remove('inactive');
	});
});
```

It's pretty straightforward until we get to this part:

```javascript
modals[index === 2 ? index - 2 : index + 1];
```

Basically, it's an if statement: if the current index is at `2`, then subtract 2 bringing the value to `0` which would target the first item in the NodeList. However, if the value isn't `2`, then it must be `0` or `1` and in that case, I want to add 1 so that I can target the next modal's index.

Now, this works fine. But the modulo operator can make it more concise and also, I really wanted a reason to use it because I never thought I'd find a use for it until now.

```javascript
modals[(index + 1) % modals.length];
```

Here, the end value of the operation is the same as the one I created with the ternary operator above. It adds 1 to the current index (cause again, I am targeting the **next** element for this section) and it gets the remainder as a result of dividing the index from the NodeList's length (which is 3). Whatever the end value is will be used as the index value for the `modals` array.

Here's what the math looks like when we plug in the index value:

The equation: (index + 1) % modals.length

- (0 + 1) % 3 results in 1
- (1 + 1) % 3 results in 2
- (2 + 1) % 3 results in 0

It'll keep looping between these three values based on the button that is clicked.
