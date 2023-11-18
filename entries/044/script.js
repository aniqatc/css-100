export function init() {
	const squares = document.querySelector('.day-044 .square-wrapper');
	let length = 10;

	for (let i = 0; i < 22; i++) {
		const square = document.createElement('div');
		square.classList.add('square');
		square.style.width = length + 'px';
		square.style.height = length + 'px';
		square.style.animationDelay = i / 20 + 's';
		squares.appendChild(square);

		length += 10;
	}
}
