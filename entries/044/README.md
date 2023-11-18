## Day 044

**<a href="https://css100.aniqa.dev#day-044">Live Demo</a>**

**Time to Complete**: 20 mins

**Key Concepts**: adjust properties dynamically via JS

**Notes**:

## General Square Styling

In the CSS, each square is given the following general styles (applied to every square that appears):

- `border` of `1px solid #fff`
- `position: absolute` with `top` and `left` at `50%`
- `animation` property: `twisting-pyramid 3s ease-in infinite alternate both`
  - animation duration is 3 seconds
  - plays infinitely
  - alternates direction with each iteration
  - styles defined in keyframes should be applied both before animation and after it ends

## Dynamically Adjust Properties via JS

In the JavaScript, I add 22 squares represented by an individual `<div>` element:

- each subsequent square is larger than the previous one
- each square has an animation-delay between 0 and 1 second making it so that each square rotates at different times (each square's animation-delay value increases slightly - creating a staggered animation effect)
- each square rotates at its center, creating a twisting pyramid-like effect

## References

On Day 31, I created the <a href="https://github.com/aniqatc/css-100/tree/main/entries/031">Pendulum Wave</a> which uses a similar technique as today's twisting pyramid challenge.
