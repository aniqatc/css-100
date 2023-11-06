/** Not required for design **/

export function init() {
	const date = document.querySelector('.day-010 .date');
	const time = document.querySelector('.day-010 .time');
	const calories = document.querySelector('.day-010 .calories');
	const heartRate = document.querySelector('.day-010 .bpm');

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
	time.innerHTML = `${formatHours(current.getHours())}:${minutes.padStart(
		2,
		'0'
	)}`;
	calories.innerHTML = `<b>${Math.floor(Math.random() * 1200) + 600}</b> CAL`;
	heartRate.innerHTML = ` ${Math.floor(Math.random() * 100) + 65}`;
}
