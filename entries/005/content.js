export function getMarkup() {
	return `
    <!-- Day 005 -->
<div class="day-005 frame" id="day-005">
	<span class="code-link">
		<a
			href="https://github.com/aniqatc/css-100/tree/main/entries/005"
			target="_blank"
			rel="noreferrer"
			>Day 005: Line Graph</a
		>
	</span>
	<div class="center">
		<div class="graph-wrapper">
			<div class="graph__heading">
				<span class="graph--title">
					<h1 class="text-lg">Weekly Report</h1>
					<h2 class="text-md">01. Feb - 07. Feb</h2>
				</span>
				<span class="graph--revenue">
					<p class="text-md">Revenue</p>
					<p class="text-lg">$3621.79</p>
				</span>
			</div>
			<div class="graph__body">
				<div class="graph--key">
					<span class="key-red"></span>
					<span>Views</span>
					<span class="key-blue"></span>
					<span>Purchases</span>
				</div>
				<figure class="graph--data">
					<svg viewBox="0 0 280 120">
						<line class="x-line" x1="0" y1="10" x2="280" y2="10" />
						<line class="x-line" x1="0" y1="60" x2="280" y2="60" />
						<line class="x-line" x1="0" y1="110" x2="280" y2="110" />
						<polyline
							class="data-line-red"
							points="5,70 50,35 95,45 140,30 185,60 230,70 275,40"
						/>
						<g>
							<circle class="data-point-red" cx="5" cy="70" r="3.5" />
							<circle class="data-point-red" cx="50" cy="35" r="3.5" />
							<circle class="data-point-red" cx="95" cy="45" r="3.5" />
							<circle class="data-point-red" cx="140" cy="30" r="3.5" />
							<circle class="data-point-red" cx="185" cy="60" r="3.5" />
							<circle class="data-point-red" cx="230" cy="70" r="3.5" />
							<circle class="data-point-red" cx="275" cy="40" r="3.5" />
						</g>

						<polyline
							class="data-line-blue"
							points="5,80 50,70 95,90 140,75 185,80 230,100 275,85"
						/>
						<g>
							<circle class="data-point-blue" cx="5" cy="80" r="3.5" />
							<circle class="data-point-blue" cx="50" cy="70" r="3.5" />
							<circle class="data-point-blue" cx="95" cy="90" r="3.5" />
							<circle class="data-point-blue" cx="140" cy="75" r="3.5" />
							<circle class="data-point-blue" cx="185" cy="80" r="3.5" />
							<circle class="data-point-blue" cx="230" cy="100" r="3.5" />
							<circle class="data-point-blue" cx="275" cy="85" r="3.5" />
						</g>
					</svg>
					<div class="tooltip-wrapper">
						<span class="data-tooltip-red">458</span>
						<span class="data-tooltip-red">812</span>
						<span class="data-tooltip-red">746</span>
						<span class="data-tooltip-red">877</span>
						<span class="data-tooltip-red">517</span>
						<span class="data-tooltip-red">410</span>
						<span class="data-tooltip-red">613</span>
					</div>
					<div class="tooltip-wrapper">
						<span class="data-tooltip-blue">399</span>
						<span class="data-tooltip-blue">449</span>
						<span class="data-tooltip-blue">320</span>
						<span class="data-tooltip-blue">365</span>
						<span class="data-tooltip-blue">332</span>
						<span class="data-tooltip-blue">206</span>
						<span class="data-tooltip-blue">299</span>
					</div>
					<figcaption class="graph--label">
						<ul>
							<li>Mon</li>
							<li>Tue</li>
							<li>Wed</li>
							<li>Thu</li>
							<li>Fri</li>
							<li>Sat</li>
							<li>Sun</li>
						</ul>
					</figcaption>
				</figure>
			</div>
		</div>
	</div>
</div>
`;
}
