import Image1 from '/entries/040/images/1.avif';
import Image2 from '/entries/040/images/2.avif';
import Image3 from '/entries/040/images/3.avif';
import Image4 from '/entries/040/images/4.avif';
import Image5 from '/entries/040/images/5.avif';
import Image6 from '/entries/040/images/6.avif';
import Image7 from '/entries/040/images/7.avif';
import Image8 from '/entries/040/images/8.avif';
import Image9 from '/entries/040/images/9.avif';

export function getMarkup() {
	return `
<!-- Day 040 -->
	<div class="day-040 frame" id="day-040">
		<span class="code-link">
			<a
				href="https://github.com/aniqatc/css-100/tree/main/entries/040"
				target="_blank"
				rel="noreferrer"
				>Day 040: Gallery</a
			>
		</span>
        <div class="grid">
            <img src="${Image1}" />
            <img src="${Image2}" />
            <img src="${Image3}" />
            <img src="${Image4}" />
            <img src="${Image5}" />
            <img src="${Image6}" />
            <img src="${Image7}" />
            <img src="${Image8}" />
            <img src="${Image9}" />
	    </div>
	</div>  
    `;
}
