## css-100

🎨 My version of the <a href="https://100dayscss.com/about/">100 Days of CSS challenge</a>.

## Objective

For the next 100 days, I'm committing to tackle at least one CSS challenge a day. My goal is to refine my CSS skills, explore diverse styling techniques, and delve into crafting pure CSS artwork and animations.

A version of my completed daily challenge can be found on my own dedicated website at <a href="https://css100.aniqa.dev">css100.aniqa.dev</a>. In addition to that, I'll be submitting CodePens to the official <a href="https://100dayscss.com/progress/aniqatc/">challenge website</a> where my progress will also be tracked.

## Project Structure

This project includes a series of completed challenges, with the first **50** utilizing **HTML**, **CSS**, and occasionally JavaScript for necessary functionalities, and the final **50** utilizes the same except with **SCSS** to practice more complex styling.

#### General Webpage Resources

- The `/src` directory holds all files related to the general structure and styling of the webpage, as well as the main script for loading each entry
- The `/public` directory contains all production-ready code, bundled and optimized using Webpack

#### Challenges Directory

Each challenge is self-contained in its own directory within `/entries`, labeled by day number (e.g., `/001`, `/023`). Within each challenge's directory, you will find:

- `style.css` or `style.scss`: Contains all the CSS or SCSS styling specific to the challenge
- `content.js`: Returns the HTML markup needed for the challenge
- `script.js`: Holds any JavaScript code required for the challenge's functionality
- `README.md`: Provides insights and learning takeaways from each challenge

<br/>

> [!NOTE]
> To prevent class naming conflicts, each challenge will be wrapped with a unique parent class corresponding to the day of the challenge (e.g., `.day-001`, `.day-023`). This convention allows for the use of descendant selectors to target elements within a specific challenge's scope, ensuring that styles do not bleed across challenges.

## Challenge Index

|                           README: 001-050                           | Key Topics (CSS)                                                                        |                           README: 051-100                           | Key Topics (SCSS)                                                                   |
| :-----------------------------------------------------------------: | :-------------------------------------------------------------------------------------- | :-----------------------------------------------------------------: | :---------------------------------------------------------------------------------- |
| [Day 001](https://github.com/aniqatc/css-100/tree/main/entries/001) | absolute positioning, z-index                                                           | [Day 051](https://github.com/aniqatc/css-100/tree/main/entries/051) | border property, multiple labels for checkbox input, 3D carousel, for loops in SCSS |
| [Day 002](https://github.com/aniqatc/css-100/tree/main/entries/002) | transform, animation                                                                    | [Day 052](https://github.com/aniqatc/css-100/tree/main/entries/052) | chaining dotted border animations                                                   |
| [Day 003](https://github.com/aniqatc/css-100/tree/main/entries/003) | clip-path, animation, transform-origin                                                  | [Day 053](https://github.com/aniqatc/css-100/tree/main/entries/053) | cross-browser input range + mixin usage                                             |
| [Day 004](https://github.com/aniqatc/css-100/tree/main/entries/004) | timing animation steps                                                                  | [Day 054](https://github.com/aniqatc/css-100/tree/main/entries/054) | mixins with parameters, nth-child(), CSS variables vs SCSS variables                |
| [Day 005](https://github.com/aniqatc/css-100/tree/main/entries/005) | SVG elements, tooltips                                                                  | [Day 055](https://github.com/aniqatc/css-100/tree/main/entries/055) | conic-gradient(), transform-origin                                                  |
| [Day 006](https://github.com/aniqatc/css-100/tree/main/entries/006) | borders                                                                                 | [Day 056](https://github.com/aniqatc/css-100/tree/main/entries/056) | using @for loop to dynamically create individual @keyframe animations               |
| [Day 007](https://github.com/aniqatc/css-100/tree/main/entries/007) | absolute positioning, toggling elements, overflow                                       |                                 ---                                 | ---                                                                                 |
| [Day 008](https://github.com/aniqatc/css-100/tree/main/entries/008) | 8-value border-radius, filter, random numbers w/ JS, transform-origin                   |                                 ---                                 | ---                                                                                 |
| [Day 009](https://github.com/aniqatc/css-100/tree/main/entries/009) | flexbox margin, rain animation w/ JS                                                    |                                 ---                                 | ---                                                                                 |
| [Day 010](https://github.com/aniqatc/css-100/tree/main/entries/010) | outline vs border, conic-gradient, animate SVG stroke                                   |                                 ---                                 | ---                                                                                 |
| [Day 011](https://github.com/aniqatc/css-100/tree/main/entries/011) | radial-gradient, transform-origin                                                       |                                 ---                                 | ---                                                                                 |
| [Day 012](https://github.com/aniqatc/css-100/tree/main/entries/012) | text properties, tooltip                                                                |                                 ---                                 | ---                                                                                 |
| [Day 013](https://github.com/aniqatc/css-100/tree/main/entries/013) | image optimization, responsive images, transforms, transition delays, pointer events    |                                 ---                                 | ---                                                                                 |
| [Day 014](https://github.com/aniqatc/css-100/tree/main/entries/014) | perspective, 3D transforms, backface-visibility, random animation values w/ JS          |                                 ---                                 | ---                                                                                 |
| [Day 015](https://github.com/aniqatc/css-100/tree/main/entries/015) | custom file upload input, access file input in JS, progress loading bar                 |                                 ---                                 | ---                                                                                 |
| [Day 016](https://github.com/aniqatc/css-100/tree/main/entries/016) | chaining multiple animations                                                            |                                 ---                                 | ---                                                                                 |
| [Day 017](https://github.com/aniqatc/css-100/tree/main/entries/017) | rotations, absolute positioning, SVG polygons                                           |                                 ---                                 | ---                                                                                 |
| [Day 018](https://github.com/aniqatc/css-100/tree/main/entries/018) | 3D animations                                                                           |                                 ---                                 | ---                                                                                 |
| [Day 019](https://github.com/aniqatc/css-100/tree/main/entries/019) | styling radio buttons, general sibling selector                                         |                                 ---                                 | ---                                                                                 |
| [Day 020](https://github.com/aniqatc/css-100/tree/main/entries/020) | checkbox input, animating svg polylines                                                 |                                 ---                                 | ---                                                                                 |
| [Day 021](https://github.com/aniqatc/css-100/tree/main/entries/021) | animating SVGs                                                                          |                                 ---                                 | ---                                                                                 |
| [Day 022](https://github.com/aniqatc/css-100/tree/main/entries/022) | stroke-dasharray, stroke-dashoffset                                                     |                                 ---                                 | ---                                                                                 |
| [Day 023](https://github.com/aniqatc/css-100/tree/main/entries/023) | sequential animations                                                                   |                                 ---                                 | ---                                                                                 |
| [Day 024](https://github.com/aniqatc/css-100/tree/main/entries/024) | SVG viewBox, circle SVG element, pointer-events, transitions vs animations              |                                 ---                                 | ---                                                                                 |
| [Day 025](https://github.com/aniqatc/css-100/tree/main/entries/025) | transform perspective, animation-play-state, different transitions for different states |                                 ---                                 | ---                                                                                 |
| [Day 026](https://github.com/aniqatc/css-100/tree/main/entries/026) | center absolute positioned elements without transform, modulo operator in JS            |                                 ---                                 | ---                                                                                 |
| [Day 027](https://github.com/aniqatc/css-100/tree/main/entries/027) | multiple labels for checkbox, polyline svg, stroke-dasharray                            |                                 ---                                 | ---                                                                                 |
| [Day 028](https://github.com/aniqatc/css-100/tree/main/entries/028) | svg path element                                                                        |                                 ---                                 | ---                                                                                 |
| [Day 029](https://github.com/aniqatc/css-100/tree/main/entries/029) | input text                                                                              |                                 ---                                 | ---                                                                                 |
| [Day 030](https://github.com/aniqatc/css-100/tree/main/entries/030) | pathLength & animating svg elements                                                     |                                 ---                                 | ---                                                                                 |
| [Day 031](https://github.com/aniqatc/css-100/tree/main/entries/031) | sequential animations with calc() & css variables                                       |                                 ---                                 | ---                                                                                 |
| [Day 032](https://github.com/aniqatc/css-100/tree/main/entries/032) | number input                                                                            |                                 ---                                 | ---                                                                                 |
| [Day 033](https://github.com/aniqatc/css-100/tree/main/entries/033) | absolute positioning & animating SVG elements                                           |                                 ---                                 | ---                                                                                 |
| [Day 034](https://github.com/aniqatc/css-100/tree/main/entries/034) | creating text SVGs + animating text SVGs                                                |                                 ---                                 | ---                                                                                 |
| [Day 035](https://github.com/aniqatc/css-100/tree/main/entries/035) | stroke-dashoffset starting value                                                        |                                 ---                                 | ---                                                                                 |
| [Day 036](https://github.com/aniqatc/css-100/tree/main/entries/036) | radio buttons                                                                           |                                 ---                                 | ---                                                                                 |
| [Day 037](https://github.com/aniqatc/css-100/tree/main/entries/037) | 3D transforms - carousel animation                                                      |                                 ---                                 | ---                                                                                 |
| [Day 038](https://github.com/aniqatc/css-100/tree/main/entries/038) | SVG transitions and transforms                                                          |                                 ---                                 | ---                                                                                 |
| [Day 039](https://github.com/aniqatc/css-100/tree/main/entries/039) | pointer-events, variables in animations                                                 |                                 ---                                 | ---                                                                                 |
| [Day 040](https://github.com/aniqatc/css-100/tree/main/entries/040) | transform-origin with scale()                                                           |                                 ---                                 | ---                                                                                 |
| [Day 041](https://github.com/aniqatc/css-100/tree/main/entries/041) | animation on active class                                                               |                                 ---                                 | ---                                                                                 |
| [Day 042](https://github.com/aniqatc/css-100/tree/main/entries/042) | Math.random() in JavaScript                                                             |                                 ---                                 | ---                                                                                 |
| [Day 043](https://github.com/aniqatc/css-100/tree/main/entries/043) | box-shadow for glow effect                                                              |                                 ---                                 | ---                                                                                 |
| [Day 044](https://github.com/aniqatc/css-100/tree/main/entries/044) | adjust properties dynamically via JS                                                    |                                 ---                                 | ---                                                                                 |
| [Day 045](https://github.com/aniqatc/css-100/tree/main/entries/045) | animating polyline svg                                                                  |                                 ---                                 | ---                                                                                 |
| [Day 046](https://github.com/aniqatc/css-100/tree/main/entries/046) | transform-origin, staggered rotating animation                                          |                                 ---                                 | ---                                                                                 |
| [Day 047](https://github.com/aniqatc/css-100/tree/main/entries/047) | dynamically adding checkboxes, styling labels                                           |                                 ---                                 | ---                                                                                 |
| [Day 048](https://github.com/aniqatc/css-100/tree/main/entries/048) | 3D cube with transformations                                                            |                                 ---                                 | ---                                                                                 |
| [Day 049](https://github.com/aniqatc/css-100/tree/main/entries/049) | element following mouse movement via JS                                                 |                                 ---                                 | ---                                                                                 |
| [Day 050](https://github.com/aniqatc/css-100/tree/main/entries/050) | border-radius, multi-step animation                                                     |                                 ---                                 | ---                                                                                 |

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

## Available Scripts

#### `npm run build`

- Build in production mode, output to `public` directory

#### `npm run build:dev`

- Build in development mode, not optimized for production

#### `npm run watch`

- Runs the app in the development mode and watches for any file changes

#### `npm run start`

- Starts the development server with hot reloading

#### `npm run stats`

- Generates a `stats.json` file with statistics about the project's modules and chunks
