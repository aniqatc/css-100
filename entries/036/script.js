export function init() {
	const tabs = document.querySelector('.tab-group');
	const content = document.querySelectorAll('.content');
	const search = document.querySelector('.search-icon');
	const input = document.querySelector('.search-input');

	search.addEventListener('click', () => {
		input.classList.toggle('active');
		search.classList.toggle('active');
	});

	tabs.addEventListener('change', event => {
		if (!event.target.closest('.search-input')) {
			clearContent();

			const id = event.target.id.slice(-1);
			document.querySelector(`.content-${id}`).classList.add('active');
		}
	});

	function clearContent() {
		content.forEach(page => {
			page.classList.remove('active');
		});
	}
}
