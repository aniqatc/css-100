import '/src/styles/reset.css';
import '/src/styles/main.css';

const markupContext = require.context('/entries', true, /content\.js$/);
const styleCSSContext = require.context('/entries', true, /style\.css$/);
const styleSCSSContext = require.context('/entries', true, /style\.scss$/);

async function loadContent(entry) {
	const module = markupContext(`./${entry}/content.js`);
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
	for (let i = 71; i > 0; i--) {
		const entry = String(i).padStart(3, '0');

		// Load SCSS files for entries above 50
		i > 50 ? styleSCSSContext(`./${entry}/style.scss`) : styleCSSContext(`./${entry}/style.css`);

		await loadContent(entry);
		await loadScript(entry);
	}
	// Allow scroll to hash after loop is complete
	scrollToHash();
})();
