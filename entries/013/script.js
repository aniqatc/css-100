const openActive = document.querySelectorAll('.gallery-image span');
const closeActive = document.querySelector('.close-icon');
const activeElements = document.querySelectorAll(
	'.profile-bottom, .profile-cover, .profile-avatar, .close-icon, .profile'
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
