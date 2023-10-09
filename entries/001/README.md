# Day 001

**Time to Complete**: 30 mins

**Key Concepts**: z-index, absolute positioning, flow layout, pseudo-elements

**Notes**:

**For `position: absolute;` & flow layout**

- elements will anchor itself to the closest parent element that uses the `position` property with `relative` or `absolute`
- positioned element is taken out of the normal flow of the page which is important to keep in mind because it will cause the positioned element to stack on top of other elements in the page because those other elements are still in normal flow
- by declaring a height/width for the parent of the positioned elements, it'll make sure to take up that amout of space within the normal flow of the page

**For `z-index;`**

- only works on **positioned** elements (...and flexbox)
- default value is `auto` which is the same `0`
- by default, pseudo-elements will stack on top of their parent (z-index value will be higher)
- I noticed an interesting conflict: if I create a stacking context on a positioned element, then any pseudo-elements that are created (`::before` and `::after`) will inherit that stacking context as its own. The only way I could work around this was using negative values for `z-index` because I needed the pseudo-element _behind_ its parent. So, to get the design to work the way I needed it to without touching the markup, I created a stacking context on the pseudo-element and adjusted other elements based on that
