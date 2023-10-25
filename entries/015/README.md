# Day 015

**<a href="https://css100.aniqa.dev#day-015">Live Demo</a>**

**Time to Complete**: 45 mins

**Key Concepts**: progress bar, custom file upload input, accessing file input elements in JavaScript, disabling elements

**Notes**:

### Styling the default file upload input

Note: The `<input>` and the `.dropzone` element and image are nested inside a `<label>` element.

1. Use `::file-selector-button` psuedo-selector to remove the default button with `display: none`.

2. Use absolute positioning to stack the file upload element on top of where the `.dropzone` element is. Use `inset: 0` to ensure that the input spans the entire container that it is relative to (which is the `.dropzone` element). Doing so will make the entire `.dropzone` element a clickable area to upload files.

3. Apply `opacity: 0` to the file input so that the default text is no longer visible.

4. In place of the default button and text provided by the file input, I am using an SVG icon that'll be replaced with the name of the file that is chosen by the user.

### Progress Bar

The progress bar was super easy - I used aboslute positioning to ensure that it lines up at the left edge of the container (`left: 0`) so that when the active class is added, the width will increase to the entire width of the container and it'll transition in over `2s` from the left edge.

```css
.progress {
	height: 4px;
	width: 0;

	position: absolute;
	left: 0;
	transition: all 2s ease-in;
}

.progress.active {
	width: 100%;
}
```

### Accessing the file input with JavaScript

```html
<!-- Single file upload -->
<input type="file" id="file-input" required />
<!-- Multiple file upload -->
<input type="file" id="file-input" multiple required />
```

All inputs produce an object that can be accessed in JavaScript. For input elements with the attribute of `type="file"` - a `FileList` object that contains information about files that were uploaded can be accessed.

We can access the `FileList` object by using the `files` property on the input.

```javascript
const fileInput = document.getElementById('file-input');
const files = fileInput.files;
```

Since I'm only looking to handle a single upload, I can access the first (and only) file by using bracket syntax: `files[0]`. From here, we can access the following properties:

- `files[0].name` = file name string
- `files[0].size` = size of file in bytes
- `files[0].type` = the type of file in MIME format
- `files[0].lastModified` = timestamp of last modification

#### Updating the dropzone with the filename

The `.dropzone` is the element that represents the area in which we can drop a file or click and upload a file. Once a file is selected, I'd like the `.dropzone` icon to be replaced with the file name. To do that, I added the `change` event listener on the file input element (which is specifically triggered when the value of an input element changes).

```javascript
fileInput.addEventListener('change', event => {
	// event.target = file input element
	// files = property that holds FileList object
	// files[0] = first file object inside FileList
	// name = name of the file
	const fileName = event.target.files[0].name;
	dropzone.textContent = `${fileName}`;
});
```

### Disabling Elements

In order to disable an input element or button, I simply attached the `disabled` property and assigned it to `true`.

```javascript
/* Disable file upload option after "upload" is clicked */
fileInput.disabled = true;
```
