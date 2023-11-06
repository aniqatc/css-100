import boots from '/entries/011/images/boots.svg';

export function getMarkup() {
	return `
	<!-- Day 011 -->
<div class="day-011 frame" id="day-011">
	<span class="code-link">
		<a
			href="https://github.com/aniqatc/css-100/tree/main/entries/011"
			target="_blank"
			rel="noreferrer"
			>Day 011: Walking Boots</a
		>
	</span>
	<div class="center">
		<div>
			<img src="${boots}" class="left-shoe" />
			<img src="${boots}" class="right-shoe" />
		</div>
		<div class="floor"></div>
	</div>
</div>
`;
}
