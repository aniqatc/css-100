export function getMarkup() {
	return `
<!-- Day 027 --->
<div class="day-027 frame" id="day-027">
	<span class="code-link">
		<a
			href="https://github.com/aniqatc/css-100/tree/main/entries/027"
			target="_blank"
			rel="noreferrer"
			>Day 027: Checklist</a
		>
	</span>
	<div class="center">
		<div class="card">
			<div class="card-header"></div>
			<div class="card-body">
				<ul class="card-list">
					<li class="card-list-item">
						<input type="checkbox" id="item-1" />
						<label for="item-1" class="label">Create a list</label>
						<label for="item-1" class="circle"></label>
						<svg height="18" width="16" class="checkmark">
							<polyline points="0 12, 6 18, 16 4" />
						</svg>
					</li>
					<li class="card-list-item">
						<input type="checkbox" id="item-2" />
						<label for="item-2" class="label">Complete first task</label>
						<label for="item-2" class="circle"></label>
						<svg height="18" width="16" class="checkmark">
							<polyline points="0 12, 6 18, 16 4" />
						</svg>
					</li>
					<li class="card-list-item">
						<input type="checkbox" id="item-3" />
						<label for="item-3" class="label">Write some CSS code</label>
						<label for="item-3" class="circle"></label>
						<svg height="18" width="16" class="checkmark">
							<polyline points="0 12, 6 18, 16 4" />
						</svg>
					</li>
					<li class="card-list-item">
						<input type="checkbox" id="item-4" />
						<label for="item-4" class="label">Amaze the world</label>
						<label for="item-4" class="circle"></label>
						<svg height="18" width="16" class="checkmark">
							<polyline points="0 12, 6 18, 16 4" />
						</svg>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
`;
}
