## Day 014

**<a href="https://css100.aniqa.dev#day-014">Live Demo</a>**

**Time to Complete**: 1.5 hours

**Key Concepts**: perspective property, 3D transformations, backface-visibility, JavaScript to randomize animation details

**Notes**:

This challenge features a card flip with each side showing a different animation: the front shows a bicycle and the back shows a helicopter.

In order to achieve a card flip animation, I need to create a 3D space for it. Elements are rendered on a 2D plane so they exist in a two-dimensional space with width and height but they lack depth. So, we can't achieve the **flip** mechanism without intializing our elements to work with 3D transformations, which will give us the depth and perspective we need.

## Perspective

**1. Initializing the 3D space: Perspective**

`perspective` defines the depth of the 3D space - which will determine how far the element will appear from the viewer (you)

- larger values (usually numbers higher than the element's dimensions) will push the element farther away
- smaller values will bring the element close to the user (providing a more intense 3D effect)

The `perspective` property has to be applied to the containing parent element -- it represents the 3D space that will hold the child elements that will transformed into 3D objects.

The direct child of an element that is initialized with `perspective` has to declare the `transform-style` property with the `preserve-3d` value. This ensures that child elements in the container will have 3D transformations that are relative to the parent container. Without this, the elements will remain flat and child elements will be treated in a 2D plane (which is the default behavior). The child elements will be displayed based on their position in the 3D space instead of how they appear in the DOM.

```css
/* Card Container: create 3D Space */
.card {
	-webkit-perspective: 1000px;
	perspective: 500px;
	height: 180px;
	width: 300px;
}

/* Child element of .card container: 3D transformations are relative to this element */
.card-face {
	height: 100%;
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
	transition: transform 600ms ease-in;
}
```

**2. Styling & positioning the elements to flip**

Once the 3D space was created, I styled the `front` and `back` of my cards. Both had the same styling so all of it was placed in one declaration.

In terms of positioning, I had to apply `position: absolute` to both so that they can be stacked on top of each other. I used `inset: 0` to specify that I needed both cards equal distances from every edge so they were stacked _perfectly_ on top of each other.

```css
.card-face > div {
	/* Regular styling properties */
	background-color: #ffce4d;
	border-radius: 4px;
	box-shadow: 8px 8px 32px rgba(0, 0, 0, 0.5);
	overflow: hidden;

	/* Ensures both cards are stacked */
	position: absolute;
	inset: 0;

	/* Keeps the animation at the center of div */
	display: flex;
	align-items: center;
	justify-content: center;

	/* Explained below... */
	backface-visibility: hidden;
}
```

**3. Backface Visibility**

Since our card **flip** includes flipping the `front` card to reveal the `back` card and then reverse -- we have to make sure that the `front` card's content is not visible when it rotates and vice versa. `backface-visibility` prevents the card's reverse side from being visible during the animation.

If this is not set to `hidden`, the default value would be `visible` which would show a mirrored version of an element's content on its back.

**4. 3D Transformations**

Here's how transformations in a 3D space appear based on some testing I did:

- `rotateX()` flips element up or down **(I flipped my cards on the X-axis)**
- `rotateY()` flips element from left or right
- `rotateZ()` turns clockwise/counter-clockwise (looks like a traditional 2D rotation)
- `translateZ()` negative numbers move the element away from viewer; positive numbers move the element close to viewer

For my animation, I needed to rotate the `back` card so that it's starting position is the opposite of the `front` card.

```css
.back {
	transform: rotateX(180deg);
}
```

**5. Hover Transformation: Flip**

Now, when the `card` container is hovered over, the `.card-face` which holds both `front` and `back` of the cards will rotate by `180deg` which will flip the card and reveal the `back` card. The `back` card will appear because it was previously set to be `180deg` away using the same function, `rotateX()`.

```css
.card:hover .card-face {
	transform: rotateX(180deg);
}
```

## `perspective-origin`

I didn't need this property for this specific challenge but I learned about it anyways. `perspective-origin` determines the vanishing point of the 3D space. It has to be declarated on the parent element (just like the `perspective` property). It takes 2 values: `x` and `y` coordinates of the persective point (which is where the viewer is looking from):

```css
.container {
	perspective: 1000px;
	/* viewer's perspective is: 25% from left, 60% from the top */
	perspective-origin: 25% 60%;
}
```

<a href="https://codepen.io/desandro/pen/bMqZmr">Here's a Codepen that lets you play with different values for perspective properties</a>! Values can be in percentages or in pixels.

## NOTE: `perspective` vs `transform: perspective()`

- `perspective` applies perspective (depth) to all its child elements and they share a single 3D space
- `transform: perspective()` only creates one 3D space for each individual element even if they are sibling elements -- each element is given its own perspective

## JavaScript to Randomize Animation Properties

Once again, I'm not using a CSS preprocessor which sometimes gives the ability to generate random numbers in the declarations.

I had to use JavaScript to do it, otherwise, I would have to write out over 30 `<span>` elements AND it would be hard-coded so it wouldn't be random at all.

I used JavaScript to generate random values for the little dashes that are animating underneath my bicycle SVG and behind my helicoper SVG:

- `top` - _specific to helicoper only_ - dashes can appear from different places on the Y-axis
- `left` - dashes can appear from different points on the X-axis
- `animation-duration` - animation of the dashes moving off the frame can vary (making the dashes have different speeds)
- `animation-delay` - some dashes can start their animation later
- `width` - each dash will have a random width

## Resources

- <a href="https://3dtransforms.desandro.com/">Intro to CSS 3D Transforms</a>
- <a href="https://css-irl.info/learning-about-css-3d-transforms/">CSS 3D Transforms & Perspective + Demos</a>
- <a href="https://css-tricks.com/how-css-perspective-works/">How CSS Perspective Works</a>
