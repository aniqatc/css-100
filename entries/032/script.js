(function () {
	const decrementBtn = document.querySelector('.day-032 .btn-decrement');
	const incrementBtn = document.querySelector('.day-032 .btn-increment');
	const numInput = document.querySelector('.day-032 .num-input');

	decrementBtn.addEventListener('click', () => {
		numInput.value = parseInt(numInput.value) - 1;
	});

	incrementBtn.addEventListener('click', () => {
		numInput.value = parseInt(numInput.value) + 1;
	});
})();
