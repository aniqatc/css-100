export function init() {
	const frame = document.querySelector('.day-060');
	const curtain = frame.querySelector('.curtain');

	function updateCurtain(transition, height) {
		curtain.style.transition = transition;
		curtain.style.height = height;
	}

	frame.addEventListener('mousemove', event => {
		const mousePos = event.clientY - frame.getBoundingClientRect().top;
		updateCurtain('all 100ms ease-out', `${mousePos}px`);
	});

	frame.addEventListener('mouseleave', () => {
		updateCurtain('all 350ms ease-in', '50%');
	});
}
