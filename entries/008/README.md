# Day 008

**Time to Complete**: 1 hour

**Key Concepts**: animatable properties, 8 value border-radius, filter property, random numbers for CSS using JS, rotation & transform-origin

**Notes**:

#### Animatable properties

I found a <a href="https://projects.verou.me/animatable/">visual tool</a> that shows all the different CSS properties that can be animated using the `@keyframes` at-rule including an example for each.

#### 8 value border-radius

`border-radius` that I've been familiar with so far:

- `border-radius: 8px` = single value that is applied to every corner
- `border-radius: 2px 2px 4px 4px` = 4 values that represent top-left, top-right, bottom-right, bottom-left

**But**... `border-radius` can take up to **8 values** separated by `/` with up to 4 values on each side:

- `border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%` is equivalent to:
  - `border-top-left-radius: 70% 30%;`
  - `border-top-right-radius: 30% 70%;`
  - `border-bottom-right-radius: 60% 40%;`
  - `border-bottom-left-radius: 60% 40%;`

9Elements posted a great <a href="https://9elements.com/blog/css-border-radius-can-do-that/">article with labeled figures</a> that helped me better understand how it works, but they also have a really <a href="https://9elements.github.io/fancy-border-radius/">handy tool to create custom round shapes</a>. I used the tool to help me get values for the shapes I wanted to use for this challenge.

For the main element at the center of my frame: I used an animation to adjust the `border-radius` property on a circle that is also rotating slowly -- this gives it the shape-shifting illusion.

#### Filter to get gooey effect

This <a href="https://css-tricks.com/shape-blobbing-css/">article by CSS-Tricks</a> goes over how to create a **gooey effect** between elements. For this challenge, I need my main rotating and shape-shifting blob to _absorb_ the mini balls that are rotating around it. The _absorbing_ part of the animation should have a gooey-look to it.

The elements that need to morph into each other have to have a `filter: blur()` and `filter: contrast()`; the `blur` and `contrast` will fight each other and leave us with a shape that looks like the `contrast` won... but, the `blur` filter is still there. It only appears when the two elements that have a blur are near each other which is when they will start to share that blur radius. When they're sharing that blur space with each other, we get that gooey effect that is made clear with `contrast()`.

#### Random numbers for CSS values using JS

<a href="https://css-tricks.com/random-numbers-css/">There is no way to generate random numbers in pure CSS -- we need some JavaScript</a>. So, I opted to use JavaScript to set custom properties for my spinning mini circles around the main blob.

**Animation duration**

- I wanted the rotation animation for each mini circle to have a random duration with the minimum duration of 5 seconds and maximum of 9 seconds:

```css
el.style.animation = `rotate-morph ${5 + Math.round(Math.random() * 4)}s ease-in infinite alternate`;
```

**Sizing**

- I didn't want all of the mini circles to have the same size so for the sake of them being different sizes, I added their NodeList index value to their `height` and `width` plus a minimum of `15px`:

```css
el.style.width = `${i + 15}px`;
el.style.height = `${i + 15}px`;
```

**Rotation & Positioning**

- Each mini circle rotation should rotate from a different starting position contained within the center blob:

```css
el.style.transform = `rotate(${0 + (i + 10)}deg)`;
el.style.top = `${0 - i * 2}px`;
el.style.left = `${0 - i * 2}px`;
```

Note: these properties are different for each group of mini circles (there are 4 mini circles inside each group, and there are 3 groups -- each group starts at a different position for the rotation).

**Rotation & transform-origin**

I had to set a custom `transform-origin` for the mini circles otherwise they would be rotating 360 degrees in place. I needed it to do a 360 degree turn around the main blob element. By setting it to `400% 300%`, I am giving it a percentage in relation to my element's width/height:

- `400% 300%` means 60 pixels to the right and 45 pixels below -- rotations would now occur around this point instead of within the element's width/height (in place)

#### Blob generators (SVG-Based)

The easiest way to create an animated blob is to use a generator but I've only found generators that will do so in SVG-format only:

- <a href="https://www.blobmaker.app/">Blobmaker: SVG Shapes</a>
- <a href="https://blobanimation.com/">Blob Animations: SVG</a>
