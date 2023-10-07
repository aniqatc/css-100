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

/* Restarting animation after 5-second delay */
const notificationsList = document.querySelectorAll('.notifications-list li');
notificationsList.forEach(li => {
	li.addEventListener('animationend', () => {
		li.style.animation = 'none';

		setTimeout(() => {
			li.style.animation = 'notification-appear ease-in 1s';
		}, 5000);
	});
});
