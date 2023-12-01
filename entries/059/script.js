export function init() {
	window.addEventListener('resize', adjustSlides); // adjust on resize
	window.onload = adjustSlides; // adjust on initial load

	function adjustSlides() {
		const container = document.querySelector('.day-059 .slides');
		const slides = container.querySelectorAll('.slide');
		const containerWidth = container.offsetWidth; // width of specified element
		const slideWidth = containerWidth / slides.length; // container divided by # of slides

		slides.forEach((slide, index) => {
			const x = -(slideWidth * index); // negative value to shift image
			slide.style.width = slideWidth + 'px';
			slide.style.backgroundPosition = `${x}px 0px`;
			slide.style.backgroundSize = `${containerWidth}px 400px`;
		});
	}
}
