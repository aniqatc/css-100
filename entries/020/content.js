export function getMarkup() {
	return `
	<!-- Day 020 -->
<div class="day-020 frame" id="day-020">
	<span class="code-link">
		<a
			href="https://github.com/aniqatc/css-100/tree/main/entries/020"
			target="_blank"
			rel="noreferrer"
			>Day 020: Send Mail</a
		>
	</span>
	<div class="center">
		<input type="checkbox" id="checkbox" />
		<label for="checkbox" class="btn send">Send Mail</label>
		<label for="checkbox" class="btn reset">Reset</label>
		<div class="circle"></div>
		<svg class="mail">
			<polyline points="120,1 120,70 1,70 1,1"></polyline>
			<polyline points="120,1 60,45 1,1 120,1"></polyline>
		</svg>
		<svg class="plane">
			<polyline points="120,1 1,60 106,80 120,1"></polyline>
			<polyline points="120,1 40,67 43,105 69,73"></polyline>
		</svg>
	</div>
</div>
`;
}
