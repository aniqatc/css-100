export function getMarkup() {
	return `
<!-- Day 068 -->
<div class="day-068 frame" id="day-068">
	<span class="code-link">
		<a
			href="https://github.com/aniqatc/css-100/tree/main/entries/068"
			target="_blank"
			rel="noreferrer"
			>Day 068: Recording Button</a
		>
	</span>
	<div class="center">
		<input type="checkbox" id="recording-btn" />
		<label for="recording-btn" class="recording-label">
			<svg class="mic-border">
				<circle cx="50%" cy="50%" r="50" pathLength="1" />
			</svg>
			<div class="mic-full">
				<div class="mic-speaker">
					<div class="mic-mid"></div>
					<div class="mic-stand"></div>
					<div class="mic-foot"></div>
				</div>
			</div>
			<div class="dots">
				<div class="dot"></div>
				<div class="dot"></div>
				<div class="dot"></div>
			</div>
		</label>
	</div>
</div>  
`;
}
