# Day 016

**Time to Complete**: 1.5 hours

**Key Concepts**: chaining animations

**Notes**:

This is definitely my least favorite challenge so far. I spent at least 45 minutes trying to get the animations in sync with the right speed and transformations as the one made <a href="https://100dayscss.com/days/16/">by the creator</a> **without** peaking at his code. Although I had the general idea and got all the transformations that needed to happen correct, I just couldn't get the timing right for the circle's bounce (which is important because the circle appears at the beginning of the animation and appears again at the end -- the other shapes only have to appear once so there's way more flexibility in dealing with those). So, I did take a look at the creator's code to guide me on the right path (in addition to the resource linked below).

#### Chaining Animations

#### Note-to-self about transformations & animations:

Don't use `transform` to center an element if we're going to apply an animation that includes a transformation! The transformations inside the animation will cancel out the transformation that is used to position the element -- which would shift our starting and/or ending position of the element. It's better to center/position the element using any other method.

For now, I didn't want to re-do the centering because then I'd have to change all the transformations AND the absolute positioning of certain elements so I just opted to put my default transformation position into a variable so that the code could be a little cleaner.

```css
:root {
	--center-position: translate(-50%, -50%);
}
```

#### Resources

- <a href="https://css-tricks.com/using-multi-step-animations-transitions/">CSS-Tricks: Using Multi-Step Animations & Transitions</a>
