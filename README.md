## css-100

🎨 My version of the <a href="https://100dayscss.com/about/">100 Days of CSS challenge</a>.

## Objective

For the next 100 days, I'm committing to tackle at least one CSS challenge a day. My goal is to refine my CSS skills, explore diverse styling techniques, and delve into crafting pure CSS artwork and animations.

A version of my completed daily challenge can be found on my own dedicated website at <a href="https://css100.aniqa.dev">css100.aniqa.dev</a>. In addition to that, I'll be submitting CodePens to the official <a href="https://100dayscss.com/progress/aniqatc/">challenge website</a> where my progress will also be tracked.

## Project Structure

All challenges will be written in **HTML** & **CSS** with the occasional JavaScript wherever necessary.

Each entry can be found in their own separate folder (inside `/entries`) labeled by the day number. In each folder, there will be:

- `style.css` file with all related styling
- `content.js` file that returns the HTML markup
- `script.js` file for functionality
- `README.md` file where I go over any new concepts or tricks that I learned from completing that day’s challenge

<br/>

> [!NOTE]
> To avoid conflict with class naming, I'll be assigning a parent class that will indicate which day of the challenge it is, _e.g. `day-001` or `day-023`_, which will then be used with the descendant selector to target classes only within that parent. <br/><br/>
> Additionally, each `script.js` file wraps its functions in an Immediately Invoked Function Expression (IIFE) to prevent namespace conflicts.

## Challenge Index

|                               README                                | Key Topics                                                                              |
| :-----------------------------------------------------------------: | :-------------------------------------------------------------------------------------- |
| [Day 001](https://github.com/aniqatc/css-100/tree/main/entries/001) | absolute positioning, z-index                                                           |
| [Day 002](https://github.com/aniqatc/css-100/tree/main/entries/002) | transform, animation                                                                    |
| [Day 003](https://github.com/aniqatc/css-100/tree/main/entries/003) | clip-path, animation, transform-origin                                                  |
| [Day 004](https://github.com/aniqatc/css-100/tree/main/entries/004) | timing animation steps                                                                  |
| [Day 005](https://github.com/aniqatc/css-100/tree/main/entries/005) | SVG elements, tooltips                                                                  |
| [Day 006](https://github.com/aniqatc/css-100/tree/main/entries/006) | borders                                                                                 |
| [Day 007](https://github.com/aniqatc/css-100/tree/main/entries/007) | absolute positioning, toggling elements, overflow                                       |
| [Day 008](https://github.com/aniqatc/css-100/tree/main/entries/008) | 8-value border-radius, filter, random numbers w/ JS, transform-origin                   |
| [Day 009](https://github.com/aniqatc/css-100/tree/main/entries/009) | flexbox margin, rain animation w/ JS                                                    |
| [Day 010](https://github.com/aniqatc/css-100/tree/main/entries/010) | outline vs border, conic-gradient, animate SVG stroke                                   |
| [Day 011](https://github.com/aniqatc/css-100/tree/main/entries/011) | radial-gradient, transform-origin                                                       |
| [Day 012](https://github.com/aniqatc/css-100/tree/main/entries/012) | text properties, tooltip                                                                |
| [Day 013](https://github.com/aniqatc/css-100/tree/main/entries/013) | image optimization, responsive images, transforms, transition delays, pointer events    |
| [Day 014](https://github.com/aniqatc/css-100/tree/main/entries/014) | perspective, 3D transforms, backface-visibility, random animation values w/ JS          |
| [Day 015](https://github.com/aniqatc/css-100/tree/main/entries/015) | custom file upload input, access file input in JS, progress loading bar                 |
| [Day 016](https://github.com/aniqatc/css-100/tree/main/entries/016) | chaining multiple animations                                                            |
| [Day 017](https://github.com/aniqatc/css-100/tree/main/entries/017) | rotations, absolute positioning, SVG polygons                                           |
| [Day 018](https://github.com/aniqatc/css-100/tree/main/entries/018) | 3D animations                                                                           |
| [Day 019](https://github.com/aniqatc/css-100/tree/main/entries/019) | styling radio buttons, general sibling selector                                         |
| [Day 020](https://github.com/aniqatc/css-100/tree/main/entries/020) | checkbox input, animating svg polylines                                                 |
| [Day 021](https://github.com/aniqatc/css-100/tree/main/entries/021) | animating SVGs                                                                          |
| [Day 022](https://github.com/aniqatc/css-100/tree/main/entries/022) | stroke-dasharray, stroke-dashoffset                                                     |
| [Day 023](https://github.com/aniqatc/css-100/tree/main/entries/023) | sequential animations                                                                   |
| [Day 024](https://github.com/aniqatc/css-100/tree/main/entries/024) | SVG viewBox, circle SVG element, pointer-events, transitions vs animations              |
| [Day 025](https://github.com/aniqatc/css-100/tree/main/entries/025) | transform perspective, animation-play-state, different transitions for different states |
| [Day 026](https://github.com/aniqatc/css-100/tree/main/entries/026) | center absolute positioned elements without transform, modulo operator in JS            |
| [Day 027](https://github.com/aniqatc/css-100/tree/main/entries/027) | multiple labels for checkbox, polyline svg, stroke-dasharray                            |
| [Day 028](https://github.com/aniqatc/css-100/tree/main/entries/028) | svg path element                                                                        |
| [Day 029](https://github.com/aniqatc/css-100/tree/main/entries/029) | input text                                                                              |
| [Day 030](https://github.com/aniqatc/css-100/tree/main/entries/030) | pathLength & animating svg elements                                                     |
| [Day 031](https://github.com/aniqatc/css-100/tree/main/entries/031) | sequential animations with calc() & css variables                                       |
| [Day 032](https://github.com/aniqatc/css-100/tree/main/entries/032) | number input                                                                            |
| [Day 033](https://github.com/aniqatc/css-100/tree/main/entries/033) | absolute positioning & animating SVG elements                                           |

## Note Template

```markdown
**Day 000**

[Live Demo](#)

Time to Complete:

Key Concepts:

Notes:
```

## <a href="https://codepen.io/pen?template=wMQKOq&editors=1100">Challenge Template</a>

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
