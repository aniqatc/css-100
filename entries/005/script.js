(function () {
	const allPoints = document.querySelectorAll(
		'.data-point-red, .data-point-blue'
	);
	const allTooltips = document.querySelectorAll(
		'.data-tooltip-red, .data-tooltip-blue'
	);

	allPoints.forEach((point, i) => {
		point.addEventListener('mouseover', function () {
			allTooltips[i].style.opacity = '1';
			allTooltips[i].style.height = '24px';
			allTooltips[i].style.visibility = 'visible';
		});
	});

	allPoints.forEach((point, i) => {
		point.addEventListener('mouseleave', function () {
			allTooltips[i].style.opacity = '0';
			allTooltips[i].style.height = '0';
			allTooltips[i].style.visibility = 'hidden';
		});
	});
})();
