import FileUploadIcon from '/entries/015/images/upload.svg';

export function getMarkup() {
	return `
    <!-- Day 015 -->
<div class="day-015 frame" id="day-015">
	<span class="code-link">
		<a
			href="https://github.com/aniqatc/css-100/tree/main/entries/015"
			target="_blank"
			rel="noreferrer"
			>Day 015: File Upload
		</a>
	</span>
	<div class="center">
		<div class="title">Drop File to Upload <span class="progress"></span></div>
		<label class="file-label">
			<span class="dropzone">
				<img src="${FileUploadIcon}" />
			</span>
			<input id="file-input" type="file" required />
		</label>
		<button class="file-upload">Upload File</button>
	</div>
</div>
`;
}
