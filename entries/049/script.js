export function init() {
	const frame = document.querySelector('.day-049');

	frame.addEventListener('mousemove', function (event) {
		const space = frame.getBoundingClientRect();
		const mouseX = event.clientX - space.left - 12;
		const mouseY = event.clientY - space.top - 10;

		const circle = frame.querySelector('.day-049 .circle-inner');
		circle.style.left = mouseX + 'px';
		circle.style.top = mouseY + 'px';
	});
}
