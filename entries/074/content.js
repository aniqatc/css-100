export function getMarkup() {
	return `
    	<!-- Day 074 -->
			<div class="day-074 frame" id="day-074">
				<span class="code-link">
					<a
						href="https://github.com/aniqatc/css-100/tree/main/entries/074"
						target="_blank"
						rel="noreferrer"
						>Day 074: Pagination</a
					>
				</span>
				<div class="center">
					<fieldset class="pagination-container">
			            <input type="radio" id="page-1" name="pagination" checked />
			            <label for="page-1">1</label>
			            <input type="radio" id="page-2" name="pagination" />
			            <label for="page-2">2</label>
			            <input type="radio" id="page-3" name="pagination" />
			            <label for="page-3">3</label>
			            <input type="radio" id="page-4" name="pagination" />
			            <label for="page-4">4</label>
		            </fieldset>
				</div>
			</div>  
    `;
}
