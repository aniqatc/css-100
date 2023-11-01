## Day 034

**<a href="https://css100.aniqa.dev#day-034">Live Demo</a>**

**Time to Complete**: ~35 mins

**Key Concepts**: animating text SVGs

**Notes**:

Another challenge involving SVGs! This challenge could've taken 15 minutes if I had taken advantage of the SVG the creator of the challenge created. But I really wanted to know how to do something like this myself so that I can use it to create my own text or shape animations for my webpages.

## Exporting SVG code from Figma

I created two versions of the "HELLO" word in Figma. One using the `rectangle` and `ellipse` tool and the other simply using text that is converted to vectors for each individual letter (which is super easy to do: just right-click and choose the `Outline Stroke` option).

<img src="/entries/034/assets/figma.png" />

I ended up using the text-to-vector option. I copied the SVG code to my HTML and moved on to animating it.

## Getting the fill-in animation right

Usually when I've animated an SVG, it involves manipulating the `stroke-dasharray` and `stroke-dashoffset` values to fill in or erase elements. So far, I've only done this to `line`, `polyline` and `circle` elements but none were filled in.

This SVG was different in that each letter was being filled - not only the stroke. I increased the `stroke-width` hoping that it would give the letters a more filled-in look without having to set the `fill` but obviously, it didn't. The `fill` would have to be set for the letters to be fully opaque but we can't animate the `fill` itself to get the drawing effect.

So when I tried my usual trick, I got the following animation:

<img src="/entries/034/assets/stroke-only-animation.gif" />

So what about setting the `fill` to the desired end-result color **but** we give the `stroke-width` a width so large that it covers the letters. We can then animate the stroke away using `stroke-dashoffset` which will erase the stroke, revealing the letters. Here's a demonstration with a random `stroke` color to show what's happening:

<img src="/entries/034/assets/stroke-color-animation.gif" />

Now, if I set the `stroke` color to be the same as the background color, then when the SVG text is initially rendered, the stroke will be "invisible" against the frame's background color. As the animation progresses and modifies the `stroke-dashoffset`, it will reveal the fill color of the text, creating an effect where the text appears to be filling in or "revealing" itself against the background. Here's the completed animation:

<img src="/entries/034/assets/finished-animation.gif" />

Here is the CSS for the SVG:

```css
.letters {
	fill: #d6d6f2;
	stroke: #7f7caf;
	stroke-dasharray: 1;
	stroke-dashoffset: 0;
	stroke-width: 22;
	animation: word-fill 2200ms ease-in forwards;
}

@keyframes word-fill {
	to {
		stroke-dashoffset: 1;
	}
}
```
