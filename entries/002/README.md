## Day 002

**<a href="https://css100.aniqa.dev#day-002">Live Demo</a>**

**Time to Complete**: ~1 hour - majority working through a bug

**Key Concepts**: transform property, animation property, reflow, block vs inline elements

**Notes**:

## Block vs inline elements

- `<span>` only takes up space necessary for its content
- `<div>` takes up full width of parent container
- in my case, I already used `<span>` tags for my hamburger lines, so I applied `display: block` to these elements allowing them to convert into block-level elements

## Animaton property limitations

I was determined not to create 6 different animations (3 for opening the menu and 3 for closing it) for this challenge, and here's how I approached it:

- `animation-fill-mode` is a property that defines its end state so `forwards` would play the animation and then, it will leave the element in the end position defined in the animation
- `animation-direction` is a property that defines whether the animation should play `normal`, `reverse`, `alternate` or `alternate-reverse`

So, I originally thought that I could use the same animation: to open the menu, the animation would play as `normal` but when a user clicks to close the menu, then `animation-direction` would be set to `reverse`, playing the animation backwards.

For my `active` class, I used this shorthand (this would show an animation that would take the 3 stacked lines and spin them into an X shape):

```css
animation: combine-line-1 1000ms ease-in forwards;
```

For my `active-reverse` class, I used this shorthand (this would take the element from an X shape and revert it back to its original state using the same animation in reverse):

```css
animation: combine-line-1 1000ms ease-in reverse;
```

**However**, this was not working when I used JavaScript to add/remove the relevant classes on button click. The animation would play only once and every subsequent click after that would toggle the hamburger icon but it would **not** play the animation anymore. <a href="https://stackoverflow.com/questions/33347992/reuse-css-animation-in-reversed-direction-by-resetting-the-state">Apparently, this is a known issue</a>: you can't restart an animation without some delay in between removing and re-adding the class.

## Reset Animations w/ Reflow Trick

**The solution**, thanks to an article by <a href="https://css-tricks.com/restart-css-animation">CSS-Tricks</a>. In order to restart the animation every time a button click occurs, I needed to use JavaScript to trigger a reflow in between removing a class and re-adding it.

- A **reflow** computes the layout of the page and occurs whenever changes are made to the DOM or when users resize & scroll the window

```js
hamburger.classList.remove('active-reverse');
void hamburger.offsetWidth;
hamburger.classList.add('active');
```

By forcing the browser to recalculate the layout of the `hamburger` element, the animation applied to that element is also reset -- allowing me to establish the desired effect. The other way to get around this without triggering a reflow is to have separate animations for opening and closing but again, my goal was to do so without having to duplicate the same animations.
