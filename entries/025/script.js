export function init() {
	const marker = document.querySelector('.day-025 .marker');
	const shadow = document.querySelector('.day-025 .shadow');
	const card = document.querySelector('.day-025 .card');
	const links = document.querySelector('.day-025 .card-content__links');

	marker.addEventListener('click', () => {
		marker.classList.add('active');
		shadow.classList.add('active');
		card.classList.add('active');
	});

	links.addEventListener('click', () => {
		marker.classList.remove('active');
		shadow.classList.remove('active');
		card.classList.remove('active');
	});
}
