export function init() {
	const frame = document.querySelector('.day-047 .center');
	const alienPixels = [
		259, 260, 298, 299, 300, 301, 337, 338, 339, 340, 341, 342, 376, 377, 379, 380, 382, 383, 416,
		417, 418, 419, 420, 421, 422, 423, 458, 461, 497, 499, 500, 502, 536, 538, 541, 543,
	];

	for (let i = 0; i < 800; i++) {
		const checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.id = i;

		if (alienPixels.includes(i)) {
			checkbox.checked = true;
		}

		const label = document.createElement('label');
		label.htmlFor = i;

		frame.appendChild(checkbox);
		frame.appendChild(label);
	}
}
