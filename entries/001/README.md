# Day 001

**Time to Complete**: 30 mins to code, additional 30 mins to search more about key concepts

**Concepts Learned**: z-index, absolute positioning, flow layout, pseudo-elements

**Notes**:

**For `position: absolute;` & flow layout**

- elements will anchor itself to the closest parent element that uses `position: relative;`
- positioned element is taken out of the normal flow of the page which is important to keep in mind because it will cause the positioned element to stack on top of other elements in the page because those other elements are still in normal flow
- by declaring a height/width for the parent of the positioned elements, it made sure to take up that amout of space within the normal flow of the page, which stopped my positioned elements from _visually_ stacking on the non-positioned elements

**For `z-index;`**

- I noticed an interesting conflict: if I create a stacking context on a positioned element, then any pseudo-elements that are created (`::before` and `::after`) will inherit that stacking context as its own. The only way I could work around this was using negative values `z-index` because I needed the pseudo-element _behind_ its parent. So, to get the design to work the way I needed it to without touching the markup, I created a stacking context on the pseudo-element and adjusted other elements based on that
- by default, pseudo-elements will stack on top of their parent (z-index value will be higher)
- only works on **positioned** elements
- default value is `auto` which is the same `0`
