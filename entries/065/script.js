export function init() {
	const frame = document.querySelector('.day-065');

	for (let i = 1; i < 25; i++) {
		const div = document.createElement('div');
		div.className = 'ellipse';
		frame.appendChild(div);
	}
}
