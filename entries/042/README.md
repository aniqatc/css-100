## Day 042

**<a href="https://css100.aniqa.dev#day-042">Live Demo</a>**

**Time to Complete**: 25 mins

**Key Concepts**: Math.random() in JavaScript

**Notes**:

**Adding elements into the DOM**

I used a `for` loop to add 250 `<span>` elements that represent flickering stars and another loop to add 4 `<img>` elements that represent the shooting stars. In order to do so, I used `createElement()` to specify the tag, `className` to add the class with the correct styling and `appendChild()` to add the elements into the HTML.

**Setting the position and animation details**

In order to make sure each element has a random position and random animation duration and delays, I used `Math.random()` to find the values for the stars and shooting stars `top`, `left` and `animation` properties.

Reference: I used the same method for rain droplets for <a href="https://github.com/aniqatc/css-100/tree/main/entries/009">Day 9's challenge</a>.
