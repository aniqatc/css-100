import '/src/styles/reset.css';
import '/src/styles/main.css';

const contentContext = require.context('/entries', true, /content\.js$/);
const styleContext = require.context('/entries', true, /style\.css$/);

async function loadContent(entry) {
	const module = contentContext(`./${entry}/content.js`);
	const markup = module.getMarkup();
	const container = document.querySelector('.container');
	container.insertAdjacentHTML('beforeend', markup);
}

async function loadScript(entry) {
	try {
		const module = await import(`/entries/${entry}/script.js`);
		if (module && module.init) {
			module.init();
		}
	} catch (error) {
		// If the file doesn't exist, or there's another error, just move on
	}
}

function scrollToHash() {
	const hash = window.location.hash;
	if (hash) {
		const targetElement = document.querySelector(hash);
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' });
		}
	}
}

// Load files for current number of entries
(async function () {
	for (let i = 39; i > 0; i--) {
		const entry = String(i).padStart(3, '0');
		styleContext(`./${entry}/style.css`);
		await loadContent(entry);
		await loadScript(entry);
	}
	// Allow scroll to hash after loop is complete
	scrollToHash();
})();
