export function init() {
	const cardHeader = document.querySelector('.day-027 .card-header');
	const today = new Date();
	const locale = navigator.geolocation;
	const weekday = {
		weekday: 'long',
	};
	const date = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	cardHeader.innerHTML = `
		<h1>${today.toLocaleDateString(locale, weekday)}</h1>
		<p>${today.toLocaleDateString(locale, date)}</p>
`;
}
