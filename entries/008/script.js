const groupOne = document.querySelector('.group-1');
const miniOne = groupOne.querySelectorAll('.mini');
miniOne.forEach((el, i) => {
	el.style.animation = `rotate-morph ${
		5 + Math.random() * 4
	}s ease-in infinite alternate`;
	el.style.width = `${i + 15}px`;
	el.style.height = `${i + 15}px`;
	el.style.transform = `rotate(${0 + (i + 10)}deg)`;
	el.style.top = `${0 - i * 2}px`;
	el.style.left = `${0 - i * 2}px`;
});

const groupTwo = document.querySelector('.group-2');
const miniTwo = groupTwo.querySelectorAll('.mini');
miniTwo.forEach((el, i) => {
	el.style.animation = `rotate-morph ${
		5 + Math.random() * 4
	}s ease-in infinite alternate`;
	el.style.width = `${i + 15}px`;
	el.style.height = `${i + 15}px`;
	el.style.transform = `rotate(${90 - (i + 10)}deg)`;
	el.style.left = `${-100 - i * 2}px`;
});

const groupThree = document.querySelector('.group-3');
const miniThree = groupThree.querySelectorAll('.mini');
miniThree.forEach((el, i) => {
	el.style.animation = `rotate-morph ${
		5 + Math.random() * 4
	}s ease-in infinite alternate`;
	el.style.width = `${i + 15}px`;
	el.style.height = `${i + 15}px`;
	el.style.transform = `rotate(${180 + (i + 10)}deg)`;
	el.style.top = `${-100 + i * 2}px`;
	el.style.left = `${-100 + i * 2}px`;
});
