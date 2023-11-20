## Day 047

**<a href="https://css100.aniqa.dev#day-047">Live Demo</a>**

**Time to Complete**: 20 mins

**Key Concepts**: dynamically adding checkboxes, styling labels

**Notes**:

## Dynamically Adding 800 Checkboxes

Using a `for` loop, I added 800 checkbox `<input>` elements that was given an ID that matches its corresponding `<label>` element which was also dynamically added to the DOM.

Additionally, I created an array `alienPixels` which contained numbers that represent the IDs of checkboxes that need to be pre-checked by default. If the current index, `i`, of the loop matches a number inside the `alienPixels` array, that checkbox would be `checked`. This allows for a pixelated alien figure to appear.

Here's what the code looks like:

```js
const alienPixels = [
	259, 260, 298, 299, 300, 301, 337, 338, 339, 340, 341, 342, 376, 377, 379, 380, 382, 383, 416,
	417, 418, 419, 420, 421, 422, 423, 458, 461, 497, 499, 500, 502, 536, 538, 541, 543,
];

for (let i = 0; i < 800; i++) {
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.id = i;

	if (alienPixels.includes(i)) {
		checkbox.checked = true;
	}

	const label = document.createElement('label');
	label.htmlFor = i;

	frame.appendChild(checkbox);
	frame.appendChild(label);
}
```

## Styling Labels

As for the styling, I hid the default checkbox by setting `display: none` to the `input[type="checkbox"]` selector. To style a custom element in place of the checkbox, I applied styles to the `<label>` element. Clicking on the `<label>` element will have the same effect as clicking `<input>` so any `:checked` styling is applied to the `<label>` as well (it represents the status of the hidden, default checkbox).
