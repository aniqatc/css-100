import alertIcon from '/entries/041/images/alert.png';

export function getMarkup() {
	return `
<!-- Day 041 -->
	<div class="day-041 frame" id="day-041">
	    <span class="code-link">
			<a
			    href="https://github.com/aniqatc/css-100/tree/main/entries/041"
				target="_blank"
				rel="noreferrer"
				>Day 041: Error Modal</a
			>
		</span>
	<div class="center">
        <div class="card">
		    <img src="${alertIcon}" />
		    <div class="text">
			    <p>Oh snap!</p>
			    <p>An error has occured while creating an error report.</p>
		    </div>
		    <button class="dismiss-btn">Dismiss</button>
	    </div>
	</div>
</div>  

`;
}
