export function init() {
	window.addEventListener('resize', adjustSlices); // adjust on resize
	window.onload = adjustSlices; // adjust on initial load

	function adjustSlices() {
		const container = document.querySelector('.day-059 .slices');
		const slices = container.querySelectorAll('.slice');
		const containerWidth = container.offsetWidth; // width of specified element
		const sliceWidth = containerWidth / slices.length; // container divided by # of slides

		slices.forEach((slice, index) => {
			const x = -(sliceWidth * index); // negative value to shift image
			slice.style.width = sliceWidth + 'px';
			slice.style.backgroundPosition = `${x}px 0px`;
			slice.style.backgroundSize = `${containerWidth}px 400px`;
		});
	}
}
