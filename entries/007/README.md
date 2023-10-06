# Day 007

**Time to Complete**: 1 hour

**Key Concepts**: absolute positioning, transformations, toggling elements, overflow property, animation delay

**Notes**:

**Absolute Positioning**

<img src="/entries/007/alignment.png" width="400"/>

In the above image, it shows what my header looked like when I used `position: absolute` on the menu icon (to the left). Absolute positioning takes elements out of the regular flow the page -- so even though I was using `justify-content: space-between` on the entire header (so that the menu icon, notifications title and search icon could have equal distance between them), there wasn't equal distance.

This is because in the regular flow the page, there was no space being occupied by the menu icon - the menu icon was existing in its own plane (of absolute positioning). **Elements can't be in multiple layout modes: it's either in flexbox or it's in positioned layout -- in this case, positioned layout wins.**

**To fix the alignment**, I simply had to give the wrapping element a `height` and `width` so that the elements in the regular flow can know that that space is reserved. Once I did so, the `justify-content` went adjusted and it now looks visually balanced.

On the same note, adding `height` and `width` also ensured that the entire element is hoverable. If I hadn't done that, then the space in between the two lines is not considered part of the element so hovering between that space doesn't allow the hover state to show -- it would only show when hovering over the icon.

**Toggling Elements, Transformations**

Clicking the menu icon opens up a hidden nav that appears from underneath the notification feed. This is done by using a `translate()` transformation on both of these elements. The hidden nav also has a lower `z-index` to ensure that it remains below the notification feed.

Also, an animation wasn't required -- just some JavaScript to toggle back and forth from the menu and the notification feed.

**Overflow & animation delay**

There is an animation that occurs as soon as the design loads: the notifications appear one-by-one from the bottom of the feed. This is done by hiding the `overflow` of the notifications frame so that we don't see the notifications until they start to appear.

Each notification appears one after the other because I targeted each of these elements individually using `nth-of-type()` and applied the `animation-delay` property so that each notification can appear at a delay from the one before it.

The animation itself focuses on getting the elements to move upwards into its default position:

- `translate()` value for `transform`
- set the opacity from `0` to `1` to get a fade-in effect
