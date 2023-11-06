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

function loadScript(entry) {
	const scriptURL = `/entries/${entry}/script.js`;

	fetch(scriptURL, { method: 'HEAD' }).then(response => {
		if (response.ok) {
			const script = document.createElement('script');
			script.src = scriptURL;
			script.defer = true;
			document.head.appendChild(script);
		}
	});
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

/* Load files for current number of entries */
(async function () {
	for (let i = 35; i > 0; i--) {
		const entry = String(i).padStart(3, '0');
		styleContext(`./${entry}/style.css`);
		loadScript(entry);
		await loadContent(entry);
	}

	/* Scroll to # location in link */
	scrollToHash();
})();
