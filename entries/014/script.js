function insertAnimatedDashes(container, dashNum) {
	for (let i = 0; i < dashNum; i++) {
		const span = document.createElement('span');
		span.className = 'dash';
		document.querySelector(`.${container}`).appendChild(span);
	}

	document.querySelectorAll(`.${container} .dash`).forEach(dash => {
		dash.style.left = `${Math.random() * 200}px`;
		dash.style.animationDelay = `${Math.random() * 300}ms`;
		dash.style.width = `${5 + Math.random() * 7}px`;
		dash.style.animationDuration = `${400 + Math.random() * 900}ms`;

		if (container === 'sky') {
			dash.style.top = `${Math.random() * 200}px`;
		}
	});
}

insertAnimatedDashes('sky', 24);
insertAnimatedDashes('ground', 12);
