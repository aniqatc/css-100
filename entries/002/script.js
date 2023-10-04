const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
	if (hamburger.classList.contains('active')) {
		hamburger.classList.remove('active');
		hamburger.classList.add('active-reverse');
	} else {
		hamburger.classList.remove('active-reverse');
		hamburger.classList.add('active');
	}
});
