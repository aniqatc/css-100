export function init() {
	const searchInput = document.querySelector('.day-007 .search-bar');
	const searchButton = document.querySelector('.day-007 .search-button');

	const notificationsCard = document.querySelector('.day-007 .notifications');
	const menuCard = document.querySelector('.day-007 .menu');
	const menuButton = document.querySelector('.day-007 .menu-icon-button');

	function toggleActive(button, element) {
		button.addEventListener('click', () => {
			element.classList.toggle('active');
		});
	}

	toggleActive(menuButton, menuCard);
	toggleActive(menuButton, notificationsCard);
	toggleActive(searchButton, searchInput);

	/* Restarting animation after 5-second delay */
	const notificationsList = document.querySelectorAll(
		'.day-007 .notifications-list li'
	);
	notificationsList.forEach(li => {
		li.addEventListener('animationend', () => {
			li.style.animation = 'none';

			setTimeout(() => {
				li.style.animation = 'notification-appear ease-in 1s';
			}, 5000);
		});
	});
}
