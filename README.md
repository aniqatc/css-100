# css-100

🎨 My version of the <a href="https://100dayscss.com/about/">100 Days of CSS challenge</a>.

---

Starting at Day 1, I'll be completing at least one CSS challenge a day for the next 100 days in order to improve how I write CSS and to explore different ways of styling components or creating pure CSS art.

I'll be adding a version of my daily completed challenge to my own website at <a href="https://css-100.aniqa.dev">css-100.aniqa.dev</a> in addition to submitting codepens to the official <a href="https://100dayscss.com/progress/aniqatc/">challenge website</a>.

All challenges will be written in pure **HTML** & **CSS** with occasional JavaScript for functionality (basically, no CSS frameworks.. _for now_).

Each entry will have its own CSS file which will be located in a separate folder (inside `/entries`) along with a README file that'll make note of any new concepts or tricks that I learned. However, all markup will be inside the main `index.html` file.

Note: To avoid conflict with class naming, I'll be assigning a parent class that will indicate which day of the challenge it is, _e.g. `day-001` or `day-023`_, which will be used with the descendant selector to target classes only within the parent. This is so that I can use generic names for each day and not worry about conflicting classes from something I may have created weeks earlier.

---

### Note Template

**Day 000**

Time to Complete:

Concepts Learned:

Notes:

---

### <a href="https://codepen.io/pen?template=wMQKOq&editors=1100">Challenge Template</a>

```html
<div class="frame">
	<div class="center">
		<p>Happy coding :)</p>
	</div>
</div>
```

```css
.frame {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 400px;
	height: 400px;
	margin-top: -200px;
	margin-left: -200px;
	border-radius: 2px;
	box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
	overflow: hidden;
	background: #fff;
	color: #333;
	font-family: sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.center {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
```
