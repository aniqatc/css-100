## Day 071

**<a href="https://css100.aniqa.dev#day-071">Live Demo</a>**

**Time to Complete**: 30 mins

**Key Concepts**: display letter assigned to selected radio button

**Notes**:

```javascript
const fieldset = document.querySelector('.day-071 .keyboard');
const div = document.querySelector('.day-071 .screen');

fieldset.addEventListener('change', event => {
	div.textContent = event.target.nextElementSibling.textContent;
});
```
