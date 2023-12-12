export function init() {
	const fieldset = document.querySelector('.day-071 .keyboard');
	const screen = document.querySelector('.day-071 .screen');

	fieldset.addEventListener('change', event => {
		screen.textContent = event.target.nextElementSibling.textContent;
	});
}
