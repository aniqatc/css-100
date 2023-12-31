export function getMarkup() {
	return `<!-- Day 022 -->
<div class="day-022 frame" id="day-022">
	<span class="code-link">
		<a
			href="https://github.com/aniqatc/css-100/tree/main/entries/022"
			target="_blank"
			rel="noreferrer"
			>Day 022: Fitness Tracker</a
		>
	</span>
	<div class="center">
		<div class="title">Your Daily <span>Progress</span></div>
		<div class="lg-circle">
			<div class="text"><span>2758</span> kcal</div>
			<svg class="lg-bars">
				<circle class="muted-bar" cx="60" cy="60" r="55" />
				<circle class="completed-bar" cx="60" cy="60" r="55" />
			</svg>
		</div>
		<div class="sm-circles">
			<div class="sm-circle">
				<div class="text"><span>856</span> steps</div>
				<svg class="sm-bars sm-one">
					<circle class="muted-bar" cx="40" cy="40" r="35" />
					<circle class="completed-bar" cx="40" cy="40" r="35" />
				</svg>
			</div>
			<div class="sm-circle">
				<div class="text"><span>6.2</span> km</div>
				<svg class="sm-bars sm-two">
					<circle class="muted-bar" cx="40" cy="40" r="35" />
					<circle class="completed-bar" cx="40" cy="40" r="35" />
				</svg>
			</div>
		</div>
	</div>
</div>
`;
}
