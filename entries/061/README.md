## Day 061

**<a href="https://css100.aniqa.dev#day-061">Live Demo</a>**

**Time to Complete**: 5 mins

**Key Concepts**: background gradient animation

**Notes**:

For this challenge, I needed to create a subtle shifting gradient animation. Here's how I did it:

- `linear-gradient()` with three colors set to the `background` property of the frame
- Using `background-size`, I scaled the background to be 4 times the size of the frame by giving it a value of `400% 400%` (400% of the parent's height and width). This is essential for the animation - at this point we would only see a portion of the gradient but once I add the animation, the gradient will shift to reveal other parts of the gradient
- The `gradient-shift` animation manipulates the `background-position` property to move the gradient from the top-left corner at `0% 0%` to the bottom-right corner at `100% 100%` - it's like we're using a camera, zoomed in 4x and then, moving it along the canvas

```scss
.day-061 {
	background: linear-gradient(135deg, #12c2e9, #c471ed, #f64f59);
	background-size: 400% 400%;
	animation: gradient-shift 3s ease-in infinite alternate;

	@keyframes gradient-shift {
		0% {
			background-position: 0% 0%;
		}
		100% {
			background-position: 100% 100%;
		}
	}
}
```
