export function init() {
	const openActive = document.querySelectorAll('.day-013 .gallery-image span');
	const closeActive = document.querySelector('.day-013 .close-icon');
	const activeElements = document.querySelectorAll(
		'.day-013 .profile-bottom, .day-013 .profile-cover, .day-013 .profile-avatar, .day-013 .close-icon, .day-013 .profile'
	);

	openActive.forEach(button => {
		button.addEventListener('click', () => {
			activeElements.forEach(el => {
				el.classList.add('active');
			});
		});
	});

	closeActive.addEventListener('click', () => {
		activeElements.forEach(el => {
			el.classList.remove('active');
		});
	});
}
