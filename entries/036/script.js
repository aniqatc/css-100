export function init() {
	document.querySelector('.tab-group').addEventListener('change', event => {
		document.querySelectorAll('.content').forEach(page => {
			page.classList.remove('active');
		});

		const id = event.target.id.slice(-1);
		document.querySelector(`.content-${id}`).classList.add('active');
	});
}
