## Day 074

**<a href="https://css100.aniqa.dev#day-074">Live Demo</a>**

**Time to Complete**: 15 mins

**Key Concepts**: pagination with radio buttons

**Notes**:

No JavaScript needed since the `:checked` state of a radio button works like a custom `.active` class! Since all the radio buttons have the same `name` attribute and are nested in a single `fieldset` container, they are related and only one of the radio buttons can be checked at a time. In pagination components, a user can only be on a single page at once.

For the styling of the `:checked` or "active" state of the pagination, I used the border property to fill in the background of the radio button. I didn't use the `background` property because I wanted to get a "filling-in" transition for the background color. This is done by making sure the property is using `border-box` for `box-sizing` meaning it'll respect the `width` and `height` properties and won't exceed it when we apply thick borders, instead the borders widths will grow inwards inside the element. By adding a transition with it, we get the illusion of the background filling in.

```scss
&:checked + label {
	box-sizing: border-box;
	color: #1cbc9c;
	border: 15px solid #fff;
	transition: all 300ms ease-out;
}
```

Note: the default styling of the radio button is hidden with `display: none` and the styling is applied to the corresponding `label` of the radio button since the `label` represents the radio button and can adjust the state of the radio button.
