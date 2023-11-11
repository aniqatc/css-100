export function init() {
	const menu = document.querySelector('.day-039 .menu');
	const icon = document.querySelector('.day-039 .icon');
	const lines = document.querySelectorAll('.day-039 .line');

	icon.addEventListener('click', () => {
		lines.forEach(line => {
			line.classList.add('active');
			line.classList.remove('close');
		});
		menu.classList.add('active');
	});

	menu.addEventListener('click', () => {
		lines.forEach(line => {
			line.classList.remove('active');
			line.classList.add('close');
		});
		menu.classList.remove('active');
	});
}
