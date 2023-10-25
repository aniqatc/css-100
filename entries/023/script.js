const day23Frame = document.querySelector('.day-023');

setInterval(() => {
	day23Frame.classList.remove('day-023');
	void day23Frame.offsetWidth;
	day23Frame.classList.add('day-023');
}, 6000);
