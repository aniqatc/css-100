/* ANIMATION FOR BIKE GROUND */

const ground = document.querySelector('.ground');

for (let i = 0; i < 12; i++) {
	const span = document.createElement('span');
	span.className = 'dash';
	ground.appendChild(span);
}

document.querySelectorAll('.ground .dash').forEach(dash => {
	dash.style.left = `${Math.random() * 180}px`;
	dash.style.animationDelay = `${Math.random() * 300}ms`;
	dash.style.width = `${5 + Math.random() * 12}px`;
	dash.style.animationDuration = `${400 + Math.random() * 900}ms`;
});

/* ANIMATION FOR HELICOPTER SKY */

const sky = document.querySelector('.sky');

for (let i = 0; i < 20; i++) {
	const span = document.createElement('span');
	span.className = 'dash';
	sky.appendChild(span);
}

document.querySelectorAll('.sky .dash').forEach(dash => {
	dash.style.left = `${Math.random() * 200}px`;
	dash.style.animationDelay = `${Math.random() * 300}ms`;
	dash.style.width = `${5 + Math.random() * 12}px`;
	dash.style.animationDuration = `${400 + Math.random() * 900}ms`;
	dash.style.top = `${Math.random() * 140}px`;
});
