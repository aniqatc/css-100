export function init() {
	document.querySelector('.tab-group').addEventListener('change', event => {
		clearContent();
		const id = event.target.id.slice(-1);
		document.querySelector(`.content-${id}`).classList.add('active');
	});

	function clearContent() {
		document.querySelectorAll('.content').forEach(page => {
			page.classList.remove('active');
		});
	}
}
