export function init() {
	const hamburger = document.querySelector('.day-002 .hamburger');

	hamburger.addEventListener('click', () => {
		if (hamburger.classList.contains('active')) {
			hamburger.classList.remove('active');
			void hamburger.offsetWidth;
			hamburger.classList.add('active-reverse');
		} else {
			hamburger.classList.remove('active-reverse');
			void hamburger.offsetWidth;
			hamburger.classList.add('active');
		}
	});
}
