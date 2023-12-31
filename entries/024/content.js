import CheckmarkIcon from '/entries/024/images/checkmark.svg';

export function getMarkup() {
	return `
    <!-- Day 024 -->
<div class="day-024 frame" id="day-024">
	<span class="code-link">
		<a
			href="https://github.com/aniqatc/css-100/tree/main/entries/024"
			target="_blank"
			rel="noreferrer"
			>Day 024: Success Button</a
		>
	</span>
	<div class="center">
		<button class="button">
			<span class="text">Finish</span>
			<span
				><img src="${CheckmarkIcon}" class="checkmark" />
			</span>
		</button>
		<svg class="circle-wrapper">
			<circle cx="50%" cy="50%" r="29" class="circle" />
		</svg>
	</div>
</div>
`;
}
