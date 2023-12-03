export function init() {
	const frame = document.querySelector('.day-063 .rings');

	for (let i = 0; i < 50; i++) {
		const div = document.createElement('div');
		div.className = 'ring';
		frame.appendChild(div);
	}
}
