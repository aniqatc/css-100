async function loadContent(entry) {
	const htmlURL = `/entries/${entry}/content.js`;

	try {
		const module = await import(htmlURL);
		const markup = module.getMarkup();
		const container = document.querySelector('.container');
		container.insertAdjacentHTML('beforeend', markup);
	} catch (error) {
		console.error(`Failed to load content for entry ${entry}:`, error);
	}
}

function loadStyle(entry) {
	const stylesheet = document.createElement('link');
	stylesheet.href = `/entries/${entry}/style.css`;
	stylesheet.rel = 'stylesheet';
	document.head.appendChild(stylesheet);
}

function loadScript(entry) {
	const scriptURL = `/entries/${entry}/script.js`;

	fetch(scriptURL, { method: 'HEAD' }).then(response => {
		if (response.ok) {
			const script = document.createElement('script');
			script.src = scriptURL;
			document.head.appendChild(script);
		}
	});
}

/* Load files for current number of entries */
(async function () {
	for (let i = 27; i > 0; i--) {
		const entry = String(i).padStart(3, '0');
		await loadContent(entry);
		loadStyle(entry);
		loadScript(entry);
	}
})();
