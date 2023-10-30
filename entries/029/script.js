const searchInput = document.querySelector('.search-input');
const suggestionsList = document.querySelector('.suggestions');

searchInput.addEventListener('input', event => {
	const inputValue = event.target.value;
	if (inputValue) {
		suggestionsList.innerHTML = `
			<li><strong>${inputValue}</strong></li>
			<li>Veritatis et <strong>${inputValue}</strong></li>
			<li>Ut aliquid ex <strong>${inputValue}</strong> veroe eos</li>
	`;
	} else {
		suggestionsList.innerHTML = '';
	}
});
