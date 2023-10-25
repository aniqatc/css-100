# Day 024

**<a href="https://css100.aniqa.dev#day-024">Live Demo</a>**

**Time to Complete**: 40 mins

**Key Concepts**: SVG viewBox & scaling, circle SVG element, pointer events, transitions vs animations

**Notes**:

#### SVG ViewBox & Scaling

While most of the elements to create this button animation were created using the `<button>` tag and a few `<span>` elements, there is a circular loading animation that occurs at the middle point of the overall animation. For this, I used an SVG with the `<circle>` element as I believe it's the easiest to maneuver and manipulate.

```html
<svg class="circle-wrapper">
	<circle cx="50%" cy="50%" r="29" class="circle" />
</svg>
```

I did not declare the `viewBox` attribute on the `<svg>` element because I want unrestricted scaling of the SVG through CSS declarations. This allows me more control over overflow, which is useful because I'll have to animate the circle to scale up at some point.

#### Circle SVG Element

Additionally, I put a percentage to specify the `cx` and `cy` attributes in my `<circle>` element. These values represent the center of the circle and using a percentage of `50%` for these values ensures that the center point remains in the center of the circle even if I adjust the container height and width to larger numbers.

Here's why I opted to do this: originally I was putting the `cx` and `cy` to equal the radius value (usually a pixel above it) and it would make my `<circle>` element sit at the top-left corner of the container which becomes more obvious when I adjust the size. In addition to that, any transformations that are applied would rotate at the center of the container, and not the element itself so I would have to figure out a different value for `transform-origin`. This becomes a hassle because what if I change the height/width of the container again? I'll have to readjust the `transform-origin` value again.

Instead, by ensuring that the `cx` and `cy` (the center of the circle) is always at the center of the container, my transformations will occur around the center of the element and not elsewhere. (Note: I am using `center center` for my `transform-origin`).

**Positioning** SVG elements: `<circle>` (and other SVG elements) cannot be positioned using absolute positioning but I can position the parent container (which is the `<svg>` tag) using absolute positioning. So, I applied any positioning properties to the parent container (`<svg>`) and all the styling properties to the `<circle>` itself.

#### Progress Spinner

The rest of the challenge was just making sure that all the animations and transitions were chained in the correct sequence and were given a delay value that ensured each animation would occur one after another. It's actually just like my challenge from <a href="https://github.com/aniqatc/css-100/tree/main/entries/023">Day 023</a>!

For the progress spinner SVG that appears right before the checkmark image appears, I used the same methods from the <a href="https://github.com/aniqatc/css-100/tree/main/entries/022">Day 022</a> challenge where I used the circumference of the `<circle>` element to determine the values for the `stroke-dasharray` and `stroke-dashoffset` properties which allow me to animate the stroke around the circle.

**Pointer Events**

I noticed that even though my `<circle>` element was visually hidden, it was still taking up space on the main `<button>` element and making that region unclickable. I suppose this is because the `<svg>` holding the `<circle>` was positioned right at the center of the button and because of the DOM order, the circle was placed above the button. Changing the stacking order with `z-index` wouldn't working in this scenario because the loading spinner has to occur above the border of the button.

Setting `pointer-events` to `none` prevents the `<circle>` element from any user interactions -- which frees that clickable space for the button instead.

#### Transitions vs Animations

Sometimes transitions are enough to replace an animation. For example, I'd normally create a `@keyframes` declaration to adjust the opacity of an element from `0` to `1` to have a nice fading-in effect. But instead, the same can be done using the `transition` property.

For example, I have a checkmark that is visually hidden and opacity is set to `0` by default. Once the button is clicked and some other animations take place, I want the checkmark to fade in. So, on an active class (that is applied to the checkmark when button is clicked), the opacity is set to `1` and I added a `transition-delay` to take into account the time it takes the other animations to run.

```css
.checkmark {
	/* omitted positioning properties for brevity */
	opacity: 0;
	visibility: hidden;
	transition: opacity 300ms ease-out;
}

.active.checkmark {
	opacity: 1;
	visibility: visible;
	transition-delay: 2.2s;
}
```

Now, originally, I applied the `transition-delay` to the checkmark element and not on the active class. But I introduced an annoying side effect from doing this - the checkmark was taking 2.2 seconds to fade in which is what I intended **but** it was also taking a 2.2 second delay before it faded away. By applying the `transition-delay` to the active class, I ensure that the delay is only applied to the opacity when the active class is applied - otherwise, there is no delay.

Animation could do the same thing here but I just really felt that the `transition` property worked so well in this scenario!
