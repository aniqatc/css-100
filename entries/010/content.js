export function getMarkup() {
	return `
    <!-- Day 010 -->
<div class="day-010 frame" id="day-010">
	<span class="code-link">
		<a
			href="https://github.com/aniqatc/css-100/tree/main/entries/010"
			target="_blank"
			rel="noreferrer"
			>Day 010: Watch</a
		>
	</span>
	<div class="center">
		<div class="circle-frame">
			<svg viewBox="0 0 196 196">
				<circle class="spin-border" r="90" cx="98" cy="98" />
			</svg>
			<div class="content-frame center">
				<div class="content center">
					<p class="date"></p>
					<h1 class="time"></h1>
					<span>
						<p>
							<i class="fa-solid fa-beat fa-heart"></i><span class="bpm"></span>
						</p>
						<p class="calories"></p>
					</span>
				</div>
			</div>
		</div>
	</div>
</div>
`;
}
