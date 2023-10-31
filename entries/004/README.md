## Day 004

**<a href="https://css100.aniqa.dev#day-004">Live Demo</a>**

**Time to Complete**: ~30 mins

**Concepts Learned**: transform property, timing animations inside `@keyframes` declaration

**Notes**:

Originally for this challenege, I created a single animation that would scale from 0 to 1 with `animation-delay` applied to each individual circle so that they can stack on top of each other once the circle before it has already started to appear.

Since this animation has to run in an infinite cycle including alternating backwards, I couldn't get away with it. I needed to create 3 different animations for the 3 different circles.

## Timing within `@keyframes`

- I used `%` percentages to define the different time periods of the animation

So, my largest circle started scaling earlier and my smallest circle started scaling later. I didn't use `animation-delay` or any other trick. I just specified that the `scale()` property would begin at different points of the 2-second animation for each of the circles.

## `transform` property

I used `position: absolute` to create a stacking context: by default (which is the order of the DOM), the circles were stacked in the order I needed them to be. However, I opted to not use directional properties that come with absolute positioning, instead, I used `transform: translate(-50%, -50%)`. I figured it was giving me exactly what I needed without having to calculate exact positions for each individual circle.

My animation was using `scale()` so it was cancelling out my positioning handled by `translate()` so I had to include it in my animation declaration so that the scaling would happen from the correct, _translated_ position.

## Custom Timing Functions

- allows us to create our own timing functions that specify how transitions & animations move

```css
cubic-bezier(x-start, y-start, x-end, y-end)`
```

Defines, two points from `0` to `1` to define a **curve**:

- curve determines progression based on time
  - time calculated on x-axis
  - progression calculated on y-axis
- if point is over `1`, animation will move out of our view

## Resources for Cubic Beziers

- <a href="https://easings.net/">Easing Function Cheat Sheet</a>
- <a href="https://cubic-bezier.com/">Create & Compare Cubic Bezier Functions</a>
