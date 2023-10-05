function showHoverTooltip(points, tooltips) {
	points.forEach((point, i) => {
		point.addEventListener('mouseover', function () {
			tooltips[i].style.opacity = '1';
			tooltips[i].style.height = '24px';
			tooltips[i].style.visibility = 'visible';
		});
	});

	points.forEach((point, i) => {
		point.addEventListener('mouseleave', function () {
			tooltips[i].style.opacity = '0';
			tooltips[i].style.height = '0';
			tooltips[i].style.visibility = 'hidden';
		});
	});
}

const redPoints = document.querySelectorAll('.data-point-red');
const redTooltips = document.querySelectorAll('.data-tooltip-red');

showHoverTooltip(redPoints, redTooltips);

const bluePoints = document.querySelectorAll('.data-point-blue');
const blueTooltips = document.querySelectorAll('.data-tooltip-blue');

showHoverTooltip(bluePoints, blueTooltips);
