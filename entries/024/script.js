(function () {
	const button = document.querySelector('.day-024 .button');

	const elements = [
		button,
		document.querySelector('.day-024 .text'),
		document.querySelector('.day-024 .checkmark'),
		document.querySelector('.day-024 .circle'),
	];

	button.addEventListener('click', () => {
		elements.forEach(el => el.classList.toggle('active'));
	});
})();
