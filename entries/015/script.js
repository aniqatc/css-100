export function init() {
	const dropzone = document.querySelector('.day-015 .dropzone');
	const fileInput = document.querySelector('#file-input');
	const fileUpload = document.querySelector('.day-015 .file-upload');
	const progressBar = document.querySelector('.day-015 .progress');

	/* Show file name where the dropzone icon used to be */
	fileInput.addEventListener('change', event => {
		const fileName = event.target.files[0].name;
		dropzone.textContent = `${fileName}`;
	});

	fileUpload.addEventListener('click', () => {
		if (fileInput.files.length > 0) {
			/* Disable file upload option after "upload" is clicked */
			fileInput.disabled = true;

			/* Uploading animation */
			progressBar.classList.add('active');
			dropzone.style.border = `0`;
			dropzone.innerHTML = `
					<img src="https://100dayscss.com/codepen/syncing.svg" class="sync">
	`;
			fileUpload.textContent = 'Uploading...';
			fileUpload.style.boxShadow = '0 1px 10px #6ece3b';

			/* After 2s, show upload complete */
			setTimeout(() => {
				dropzone.innerHTML = `<img src="https://100dayscss.com/codepen/checkmark.svg" class="complete">`;
				fileUpload.style.boxShadow = 'none';
				fileUpload.textContent = 'Upload Complete';
			}, 2000);

			/* Disable button at this point...*/
			fileUpload.classList.add('disabled');
			fileUpload.disabled = true;
		}
	});
}
