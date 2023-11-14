export function init() {
	document.querySelector('.day-040 .grid').addEventListener('click', event => {
		event.target.classList.toggle('active');
	});
}
