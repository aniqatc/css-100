export function init() {
	document.querySelector('.day-038').addEventListener('click', () => {
		document.querySelector('.shape-base').classList.toggle('expand');
		document.querySelector('.shape-invert').classList.toggle('normal');
	});
}
