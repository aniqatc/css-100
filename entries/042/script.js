export function init() {
	const frame = document.querySelector('.day-042 .center');

	for (let i = 0; i < 250; i++) {
		const star = document.createElement('span');
		star.className = 'star';
		frame.appendChild(star);
	}

	document.querySelectorAll('.day-042 .star').forEach(el => {
		el.style.top = `${Math.random() * 300}px`;
		el.style.left = `${Math.random() * 300}px`;
		el.style.animation = `star-flickers ${2 + Math.random() * 2}s ease infinite ${
			Math.random() * 2
		}s`;
	});

	for (let i = 0; i < 4; i++) {
		const shootingStar = document.createElement('img');
		shootingStar.src = 'https://100dayscss.com/codepen/shooting-star.png';
		shootingStar.className = 'shooting-star';
		frame.appendChild(shootingStar);
	}

	document.querySelectorAll('.day-042 .shooting-star').forEach(el => {
		el.style.top = `${Math.random() * 50}px`;
		el.style.left = `${-100 + Math.random() * 300}px`;
		el.style.animation = `shooting-stars ${3 + Math.random()}s ease-in infinite both ${
			Math.random() * 10
		}s`;
	});
}
