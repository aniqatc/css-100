(function () {
	const dots = document.querySelectorAll('.day-031 .dot');

	dots.forEach((dot, index) => {
		dot.style.setProperty('--index', `${index + 1}`);
	});
})();
