## Day 076

**<a href="https://css100.aniqa.dev#day-076">Live Demo</a>**

**Time to Complete**: 30 mins

**Key Concepts**: form :valid selector, backface visibility with 3d transformations

**Notes**:

#### Backface Visibility with 3D Transformations

The `backface-visibility` property is used to control whether the back side of an element is visible when it is rotated in 3D space.

- The `input-box` element has `backface-visibility: hidden;`, meaning when the form flips, the back side of the input field (which would otherwise be visible during the rotation) is hidden, preventing any visual glitches.
- Similarly, the `key-title` div element also uses `backface-visibility: hidden;`. This element is **initially** rotated by `-180deg` on the X-axis, positioning it on the "back" of the form. When the form flips (triggered by the valid input), this element becomes visible, displaying the "Secret Key" text.

#### Form `:valid` Selector

The `:valid` selector enables us to apply styles to form elements when a user's input meets specific validation requirements. In this example, the input field within the form container, named `input-box`, checks for the pattern `[pP]assword` to determine its validity. If the user enters password (regardless of case), the input field is considered valid, and the styles associated with the `:valid` selector are triggered.

Here, the `:valid` selector is used to apply a single transformation: it rotates the entire form container 180 degrees along the X-axis, revealing the back side of the form (which was originally hidden by the `backface-visibility` property):

```scss
&:valid {
	transform: rotateX(180deg);
}
```
