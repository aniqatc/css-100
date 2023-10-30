# css-100

🎨 My version of the <a href="https://100dayscss.com/about/">100 Days of CSS challenge</a>.

---

For the next 100 days, I'm committing to tackle at least one CSS challenge daily. My goal? To refine my CSS skills, explore diverse styling techniques, and delve into crafting pure CSS artwork and animations.

A version of my completed daily challenge can be found on my own website at <a href="https://css100.aniqa.dev">css100.aniqa.dev</a>. In addition to that, I'll be submitting codepens to the official <a href="https://100dayscss.com/progress/aniqatc/">challenge website</a> where my progress will also be tracked.

### Project Structure

All challenges will be written in **HTML** & **CSS** with the occasional JavaScript for functionality (basically, no CSS preprocessors.. *for now*).

Each entry can be found in their own separate folder (inside `/entries`) labeled by the day number. In each folder, there will be:
- `style.css` file with all related styling
- `content.js` file that returns the HTML markup 
- `README.md` file where I go over any new concepts or tricks that I learned from completing that day’s challenge
- `script.js` file for functionality

**Note**

To avoid conflict with class naming, I'll be assigning a parent class that will indicate which day of the challenge it is, _e.g. `day-001` or `day-023`_, which will then be used with the descendant selector to target classes only within that parent. This is so that I can use generic class names for each day and not worry about conflicting with class names that I may have created weeks earlier.

Additionally, each `script.js` file wraps its functions in an Immediately Invoked Function Expression (IIFE) to prevent namespace conflicts in JavaScript.

---

### Note Template

**Day 000**

Time to Complete:

Key Concepts:

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
