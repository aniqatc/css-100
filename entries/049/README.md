## Day 049

**<a href="https://css100.aniqa.dev#day-049">Live Demo</a>**

**Time to Complete**: 20 mins

**Key Concepts**: element following mouse movement via JS

**Notes**:

Okay, I sort of cheated here because this one is meant to be entirely written in CSS but I used JavaScript to make it significantly easier. I might come back to it later once I've had some experience in SASS in order to do it without JavaScript.

## Element following mouse movement via JS

Using JavaScript, I added an event listener to this day's frame (`.day-049`) to listen for `mousemove` events. The `event` object is passed to the callback function will be responsible for figuring out the mouse position and to move the element with the mouse's position.

- `getBoundingClientRect()` is a method that obtains an element's position and dimensions
- `clientX` and `clientY` on the `event` object gets the exact position of the mouse pointer
- the hard-coded values (`10` and `10`) represent half of the element's height/width _(note: if we don't want to hard-code the values, we can use `offsetHeight` and `offsetWidth` to get an element's height and width and then divide it by `2` -- this will position the mouse cursor at the center of the element)_.

```js
frame.addEventListener('mousemove', function (event) {
	const space = frame.getBoundingClientRect();
	const mouseX = event.clientX - space.left - 10;
	const mouseY = event.clientY - space.top - 10;

	const circle = frame.querySelector('.day-049 .circle-inner');
	circle.style.left = mouseX + 'px';
	circle.style.top = mouseY + 'px';
});
```
