/** Not required for design **/

const date = document.getElementById('date');
const time = document.getElementById('time');
const calories = document.getElementById('calories');

const current = new Date();
const minutes = String(current.getMinutes());

function formatHours(hours) {
	hours = hours <= 12 ? hours : hours - 12;
	let stringHours = String(hours);
	if (stringHours.length === 1) {
		return '0' + stringHours;
	} else {
		return hours;
	}
}

date.innerHTML = `${current.toDateString()}`;
time.innerHTML = `${formatHours(current.getHours())}:${
	minutes.length === 2 ? minutes : '0' + minutes
}`;
calories.innerHTML = `${Math.floor(Math.random() * 1200) + 600} KCAL`;
