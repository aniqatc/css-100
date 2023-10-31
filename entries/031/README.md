## Day 031

**<a href="https://css100.aniqa.dev#day-031">Live Demo</a>**

**Time to Complete**: 30 mins

**Key Concepts**: chaining animations with `calc()` function & CSS variables

**Notes**:

## Setting CSS Variable with JavaScript

```javascript
dots.forEach((dot, index) => {
	dot.style.setProperty('--index', `${index + 1}`);
});
```

Using the `setProperty()` function on the `style` object allows us to set properties (both regular CSS properties and custom properties) dynamically. In this case, I didn't want to write out the index values for each dot (since there are 20) so I opted to take advantage of this method.

After the `--index` value is set for each dot, I can now manipulate how each dot is animated directly in the stylesheet.

## Chaining the Animations with `calc()` Function

All of the 20 dots will be given the same `@keyframe` animation -- they'll move side to side on the x-axis going `50px` both ways. In order to get a cascading effect where each individual dot is moving side to side at a different speed for a different length of time, we can use their respective `--index` value along with a `calc() formula` to compute a different animation duration.

Here's what I ended up with:

```css
.dot {
	--time: calc(30 / (30 - var(--index)));

	animation: pendulum-wave calc(var(--time) * 1000ms) ease-in infinite;
}
```

Based on the `--index` position of the dot, the animation duration will be different. Overall though, the formula for `--time` creates a series of increasing values for each subsequent dot. The further along in the sequence the dot is, the larger the `--time` value will be. So, the dots in appearing later have longer animations durations. This creates a cascading effect.

Why `30 / ( 30 - var(--index))` specifically? Well, I played around with the numbers and `30` just felt right. But overall, the reason for the formula is because it starts off with a number that is close to 1 and slowly increases until it reaches 3. This number is then multiplied by `1000ms` in the `animation` declaration so that the minimum duration starts at least 1 second (otherwise, the animation would run too fast). Additionally, this means that the max duration would be around 3 seconds (for the dots towards the end).
