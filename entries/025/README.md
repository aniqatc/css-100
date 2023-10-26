# Day 025

**<a href="https://css100.aniqa.dev#day-025">Live Demo</a>**

**Time to Complete**: 45 mins

**Key Concepts**: transform perspective() function, animation-play-state, handling different transitions on a single element

**Notes**:

#### Transform Property: `perspective()` function

The `perspective()` function lets us apply a 3D space to an individual element. For this challenge, it was perfect because I needed to apply a separate 3D flip to two elements that are contained in different `div` elements. The `perspective` property would not be the best choice in this case because the `perspective` property lets us create a shared 3D space for a containing element's children and transformations that are applied to these child elements will be relative to each other.

In addition to applying `perspective()`, I added a `rotate()` to both elements that I'd like to flip. The location marker icon appears first so it's initial state is at `rotate(0)` but when it's clicked, it'll rotate `90deg`. Why `90deg`? Because it won't complete a full flip - it'll simply disappear at that point. Once that happens, the card element will rotate inwards to the position of `rotate(0)` from it's initial position which was `rotate(-90deg)`.

- <a href="https://github.com/aniqatc/css-100/tree/main/entries/014">On Day 14, I created a flip card that uses `perspective` property to create a 3D space</a>.

#### Animation Play State

I haven't had much opportunity to use this particular property but I knew it exists so it really came in handy for an issue I came across.

- `animation-play-state`: stops the current animation in its tracks - making it possible to apply other styles and transitions without interference of the ongoing animation - this can be applied on pseudoselectors or classes that are manipulated through JavaScript

When the location marker flips (and disappears), the shadow below it will need to disappear as well. However, trying to change the `opacity` combined with `transition` with a delay and duration that matches the location marker's flip did not work. In fact, nothing was happening. I assumed it's because I have an animation applied to the shadow that plays infinitely which was conflicting with my transition from working.

So here's how I tackled it: I used `animation-play-state: paused` on the `active` class. When the location marker is clicked, the shadow's animation is paused. After a delay of 300ms, the shadow begins to fade away over 500ms. By pausing the animation, I was able to get the `opacity` to apply to the element along with its transition.

```css
.active.shadow {
	animation-play-state: paused;
	opacity: 0;
	transition: opacity 500ms ease-in 300ms;
}
```

#### Handling transitions for different states of an element

So far, whenever I want a transition -- usually when hovering over a button or to apply a transformation -- I've been using the property on the initial element as I know it'll apply to hover and focus states and active classes. But transitions can be applied to individual elements at every state.

Basically, if I want my transition to occur fast when I hover in, I can apply a transition with a shorter duration directly on the `:hover` pseudoselector. But when I move my mouse out, I want my transition to occur slowly with a different easing function, so I'll apply a different transition with a longer duration to the element at it's initial state.

```css
/* Initial state of the button */
button {
	background-color: blue;
	transition: background-color 500ms ease-out; /* Slowly transition out of hover state */
}

/* Hover state of the button */
button:hover {
	background-color: red;
	transition: background-color 200ms ease-in; /* Quickly transition into hover state */
}
```

This superpower of the `transition` property really comes in handy in this challenge.

It allowed me to have control over the sequencing of multiple transitions. For example, when the location marker is clicked, the location marker transitions out of view first (500ms duration - no delay), then the shadow (500ms duration - 300ms delay) and then, finally the card appears (700ms duration - 650 delay).

```css
/* Active classes applied when location marker is clicked */
.active.marker {
	transition: transform 500ms ease-in;
}

.active.shadow {
	transition: opacity 500ms ease-in 300ms;
}

.active.card {
	transition: transform 700ms ease-out 650ms;
}
```

However, when I click the card to go back to my initial state (removing all the active classes), there was no transition for the changes (because I applied the property to the element's active state). If I applied these transitions to the initial state of the element, then the delays would be applied both ways (when active class is added and when it is removed) but that would throw the sequence out of whack.

So I kept the transitions I applied on my active class and added a different transition with a different sequence for when we leave the active state. In this case, I want the sequence to happen quicker:

```css
/* Initial state of the elements */
.marker {
	transition: transform 500ms ease-in 500ms;
}

.shadow {
	transition: opacity 500ms ease-in;
}

.card {
	transition: transform 450ms ease-in;
}
```
