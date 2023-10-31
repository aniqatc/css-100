## Day 028

**<a href="https://css100.aniqa.dev#day-028">Live Demo</a>**

**Time to Complete**: 45 mins

**Key Concepts**: svg <path> element

**Notes**:

Usually, I like to create my own SVG elements. So far, it's been pretty straightforward because I was dealing with `<polyline>`, `<line>` or `<circle>` elements. However, for this challenge, the creator uses a `<path>` element with a **lot** of values defined in a single attribute labeled `d`.

```html
<svg class="bell" viewBox="0 0 50 54">
	<path
		d="M1.13063517,45.0453694 C1.88439195,45.7991262 2.80138269,46.1760046 3.82399539,46.1760046 L17.2955975,46.1760046 C17.2955975,48.331653 18.0493543,50.110423 19.5592683,51.6179365 C21.0667819,53.1254501 22.8983629,53.8816074 25.0012002,53.8816074 C27.1544481,53.8816074 28.9332181,53.1254501 30.4431322,51.6179365 C31.9506457,50.110423 32.7044025,48.331653 32.7044025,46.1760046 L46.1760046,46.1760046 C47.1986173,46.1760046 48.115608,45.7991262 48.8693648,45.0453694 C49.6231216,44.2892122 50,43.3746219 50,42.3496087 C46.1760046,39.1185367 43.3194104,35.1313073 41.379807,30.3879207 C39.4402036,25.6469346 38.4704018,20.6370925 38.4704018,15.408805 C38.4704018,12.0697105 37.5006001,9.48197225 35.6138077,7.54236881 C33.6742042,5.54995439 31.033655,4.41931922 27.6945605,3.98722934 C27.8553939,3.66316194 27.9106054,3.28628355 27.9106054,2.90940516 C27.9106054,2.10043689 27.639349,1.40189159 27.0488262,0.86177925 C26.5087138,0.268855922 25.807768,0 25.0012002,0 C24.192232,0 23.5464977,0.268855922 23.0063853,0.86177925 C22.413462,1.40189159 22.1446061,2.10043689 22.1446061,2.90940516 C22.1446061,3.28628355 22.1974171,3.66316194 22.360651,3.98722934 C19.019156,4.41931922 16.3786068,5.54995439 14.4390033,7.54236881 C12.4993999,9.48197225 11.5295982,12.0697105 11.5295982,15.408805 C11.5295982,20.6370925 10.5597964,25.6469346 8.620193,30.3879207 C6.68058956,35.1313073 3.82399539,39.1185367 0,42.3496087 C0,43.3746219 0.376878391,44.2892122 1.13063517,45.0453694 L1.13063517,45.0453694 Z M20.2050026,45.6911037 C20.52907,45.6911037 20.6899035,45.8519372 20.6899035,46.1760046 C20.6899035,47.3618513 21.1195929,48.384464 21.9837726,49.1934322 C22.7903404,50.0552115 23.8153536,50.4873014 25.0012002,50.4873014 C25.3228672,50.4873014 25.4861011,50.6481348 25.4861011,50.9722022 C25.4861011,51.2938691 25.3228672,51.4571031 25.0012002,51.4571031 C23.5464977,51.4571031 22.3054395,50.9169907 21.2828268,49.894378 C20.2578136,48.8693648 19.7201018,47.6307072 19.7201018,46.1760046 C19.7201018,45.8519372 19.8809352,45.6911037 20.2050026,45.6911037 L20.2050026,45.6911037 Z"
	></path>
</svg>
```

It wouldn't make sense for me to create this from scratch or using a program when it's already defined here **but** I still wanted to understand how `<path>` elements work.

## SVG `<path>` Element

- can create any type of line, curve, arc, shape and more
- only a single attribute needs to be defined `d`
- `d` attribute takes a list of commands
- uppercase commands: `M`, `L`, `H`, `V`, `S`, `C`, `Q` are absolutely positioned
- lowercase commands: `m`, `l`, `h`, `v`, `s`, `c`, `q` are relatively positioned (from the previous point)
- drawn sequentially - based on order of commands

We can see the commands more clearly if we break each command into a new line (note: I removed most of the commands):

```html
<path
	d="M 1.13063517,45.0453694 
    C 1.88439195,45.7991262 2.80138269,46.1760046 3.82399539,46.1760046 
    L 17.2955975,46.1760046 
    C 17.2955975,48.331653 18.0493543,50.110423 19.5592683,51.6179365 
    C 21.0667819,53.1254501 22.8983629,53.8816074 25.0012002,53.8816074 
    C 27.1544481,53.8816074 28.9332181,53.1254501 30.4431322,51.6179365 
    C 31.9506457,50.110423 32.7044025,48.331653 32.7044025,46.1760046 
    L 46.1760046,46.1760046 
    C 47.1986173,46.1760046 48.115608,45.7991262 48.8693648,45.0453694 
    C 49.6231216,44.2892122 50,43.3746219 50,42.3496087 
    ......... Z"
></path>
```

- `M` represents "Move To" and the usually the starting point of an object using `x, y` coordinates
- `L` repesents "Line To" that takes `x, y` coordinates to draw a line from current position
- `H` and `V` take `x` and `y` coordinates respectively and represent either a horizontal and vertical line
- `Z` closes the path (creating a line from current position to first point)
- `C` represents a cubic bezier curve
- `S` is a cubic bezier curve but its first point is relative to previous position
- `Q` is a quadratic bezier curve
- `A` represents an arc

## Resources

- <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths">MDN Reference: SVG Paths</a>
- <a href="https://www.nan.fyi/svg-paths">Interactive Guide: Understanding SVG Paths</a>
