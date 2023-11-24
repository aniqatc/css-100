export function init() {
	const checkbox = document.querySelector('.day-051 #icon-state');
	const numGroup = document.querySelectorAll('.day-051 .group');

	checkbox.addEventListener('change', () => {
		numGroup.forEach(group => {
			checkbox.checked
				? (group.style.animationPlayState = 'paused')
				: (group.style.animationPlayState = 'running');
		});
	});
}
