## Day 036

**<a href="https://css100.aniqa.dev#day-036">Live Demo</a>**

**Time to Complete**: 35 mins

**Key Concepts**: radio buttons, general sibling selector

**Notes**:

## Radio Buttons

Radio buttons are grouped together by having the same `name` attribute. When given the same `name` attribute, only one of the radio buttons among the same group can be checked. For this challenge, whichever radio button is checked will trigger an `active` class to be added to the corresponding content so that the content can appear with a smooth transition.

Like other `<input>` elements that I've styled, I hide the default radio button with `display: none` but because of the `<label>` element conntected to the `<input>` element, I still have a clickable area that I can style and the custom styling will have the same functionality of the radio button that is hidden.

## Transition

The content for each 'tab' is initially hidden with an `opacity` of `0` and positioned `35px` below its intended place. This content becomes visible and smoothly transitions into its correct position when the associated radio button is clicked. Each of the content containers are positioned absolute - taking them out of the normal flow of the page so that they do not take up any space and are stacked on each other.

```css
.content {
	position: absolute;
	opacity: 0;
	transform: translateY(35px);
}

.active {
	opacity: 1;
	transform: translateY(0);
	transition: all 1000ms ease-out;
}
```

## General Sibling Selector

Originally, I wanted to keep the `<input>` elements in the same container as the content because I knew I could use the general sibling selector `~` and the `:checked` pseudo-class to display the corresponding content - eliminating the need to use JavaScript. But I just didn't like that this approach limited me from using certain CSS properties. For example, I would have to use absolute positioning to place the `<label>` elements instead of using flexbox. So, I wanted the most natural approach which involves _some_ JavaScript.

Other than taking some extra time to test out the two different approaches, re-creating this was pretty straightforward!
