# Day 018

**Time to Complete**: 30 minutes

**Key Concepts**: styling radio buttons, general sibling selector `~`

**Notes**:

Usually, to create a custom style for any `<input>` element (that doesn't use a text field), we need a dedicated `<label>` element that either wraps around the `<input>` or uses the `for` attribute with its value being the `<input>` element's `id` attribute:

```html
<input type="radio" id="radio-1" /><label for="radio-1"></label>
```

First, we have to remove the default styling of the `<input>` element. The `<label>` element still lets us have a clickable area even though the `<input>` itself is removed. This is because when a `<label>` is connected to an input element, clicking on that `<label>` is the same as clicking the `<input>` element -- they work together as one area.

For radio buttons, we need to specify the `name` attribute in the `<input>` so that we can group multiple radio buttons together and having the same `name` indicates that they are one group.

```html
<input type="radio" name="radio-group" id="radio-1" checked />
<label class="radio-button" for="radio-1"></label>

<input type="radio" name="radio-group" id="radio-2" />
<label class="radio-button" for="radio-2"></label>

<input type="radio" name="radio-group" id="radio-3" />
<label class="radio-button" for="radio-3"></label>
```

Anyways, once the default styling is removed using `display: none` on the `<input>` element, we can apply the desired custom styling directly to the label element instead.

#### General Sibling Selector

Since each radio button has its own ID -- I could use that ID to target that specific radio buttion along with the `:checked` pseudoselector which will allow me to specify styling for whenever that button is checked off.

The general sibling selector is what connects the `:checked` radio button with the indicator that shows which radio button is currently checked off.

```css
#radio-1:checked ~ .checked-circle {
	transform: translateX(0px);
}

#radio-1:checked ~ .checked-bg {
	background-color: #673e52;
}
```

For each radio button, the indicator (`.checked-circle`) would move into the empty circle that was clicked. In addition to that, the background color would change.

The reason why this `~` selector works: the `.checked-circle` and `.checked-bg` elements are nested in the same container as the `<input>` and `<label>` elements - making them all siblings of each other. However, they are just **general siblings**. There is an **adjacent sibling selector `+`** that connects sibling elements that are directly adjacent to one another in the markup.
