export function getMarkup() {
	return `
<!-- Day 045 -->
<div class="day-045 frame" id="day-045">
	<span class="code-link">
		<a
			href="https://github.com/aniqatc/css-100/tree/main/entries/045"
			target="_blank"
			rel="noreferrer"
			>Day 045: Button</a
		>
	</span>
	<div class="center">
		<button class="button">
			<svg width="200px" height="70px" class="border">
				<polyline points="0,0 200,0 200,70 0,70 0,0" />
				<polyline points="0,-70 0,0 200,0 200,70 0,70 0,0 -70,0" pathLength="1" class="hover-border" />
			</svg>
			<span class="button-text">Hover Me</span>
		</button>
	</div>
</div>  
 `;
}
