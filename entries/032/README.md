# Day 032

**<a href="https://css100.aniqa.dev#day-032">Live Demo</a>**

**Time to Complete**: 20 mins

**Key Concepts**: styling default `number` `<input>` element

**Notes**:

This reminded me of <a href="https://github.com/aniqatc/css-100/tree/main/entries/029">Day 29</a>'s challenge. That challenge and today's challenge both involve styling an `<input>` element.

For this one, I used the `type="number"` input which comes with two default buttons to increment and decrement the number. Because I wanted to use my own styling, I removed these with the following browser-specific declarations:

```css
.num-input::-webkit-inner-spin-button,
.num-input::-webkit-outer-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

.num-input::-moz-inner-spin-button,
.num-input::-moz-outer-spin-button {
	-moz-appearance: none;
	margin: 0;
}
```

Note: `display: none` might not work consistently across all browsers but the above declarations ensures that the default buttons are removed without any fear of possible inconsistencies.

```html
<input class="num-input" type="number" value="0" readonly />
```

- `readonly` ensures that the user can't type or use the default controls (which are hidden anyways)
- `value` attribute ensures the starting number is `0`

Lastly, I used JavaScript to increment and decrement the number based on the button that is clicked.
