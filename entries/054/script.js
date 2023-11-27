export function init() {
	const waves = document.querySelectorAll('.day-054 .wave');

	waves.forEach(wave => {
		for (let i = 0; i < 20; i++) {
			const div = document.createElement('div');
			div.className = 'circle';
			wave.appendChild(div);
		}
	});
}
