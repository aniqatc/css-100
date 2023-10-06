const searchInput = document.querySelector('.search-bar');
const searchButton = document.querySelector('.search-button');

const notificationsCard = document.querySelector('.notifications');
const menuCard = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-icon-button');

function toggleActive(button, element) {
	button.addEventListener('click', () => {
		element.classList.toggle('active');
	});
}

toggleActive(menuButton, menuCard);
toggleActive(menuButton, notificationsCard);
toggleActive(searchButton, searchInput);
