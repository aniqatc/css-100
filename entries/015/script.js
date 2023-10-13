const dropzone = document.querySelector('.dropzone');
const fileInput = document.querySelector('#file-input');
const fileUpload = document.querySelector('.file-upload');
const progressBar = document.querySelector('.progress');

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
					<img src="/entries/015/images/sync.svg" class="sync">
	`;
		fileUpload.textContent = 'Uploading...';
		fileUpload.style.boxShadow = '0 1px 10px #6ece3b';

		/* After 2s, show upload complete */
		setTimeout(() => {
			dropzone.innerHTML = `<img src="/entries/015/images/check.svg" class="complete">`;
			fileUpload.style.boxShadow = 'none';
			fileUpload.textContent = 'Upload Complete';
		}, 2000);

		/* Disable button at this point...*/
		fileUpload.classList.add('disabled');
		fileUpload.disabled = true;
	}
});
