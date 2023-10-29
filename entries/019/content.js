export function getMarkup() {
	return `<!-- Day 019 -->
<div class="day-019 frame" id="day-019">
	<span class="code-link">
		<a
			href="https://github.com/aniqatc/css-100/tree/main/entries/019"
			target="_blank"
			rel="noreferrer"
			>Day 019: Radio Buttons</a
		>
	</span>
	<div class="center">
		<input type="radio" name="radio-group" id="radio-1" checked />
		<label class="radio-button" for="radio-1"></label>

		<input type="radio" name="radio-group" id="radio-2" />
		<label class="radio-button" for="radio-2"></label>

		<input type="radio" name="radio-group" id="radio-3" />
		<label class="radio-button" for="radio-3"></label>

		<input type="radio" name="radio-group" id="radio-4" />
		<label class="radio-button" for="radio-4"></label>

		<div class="checked-bg"></div>
		<div class="checked-circle"></div>
	</div>
</div>
`;
}
