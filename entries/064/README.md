## Day 064

**<a href="https://css100.aniqa.dev#day-064">Live Demo</a>**

**Time to Complete**: 15 mins

**Key Concepts**: subtle button animation

**Notes**:

## Subtle button animation

When tbe button element is hovered over, the button and its background layer both shift and switch colors.

- Both layers are positioned to the center of the frame using absolute positioning using the placeholder selector: `%btn-center`
- Both layers are given the same height and width but have different background colors
- `z-index` is applied to the actual `<button>` element to ensure it stays above the background layer
- The background layer's initial position is shifted using `transform: translate(12px, 12px)` which moves the layer `12px` down and right revealing only a small portion underneath the white button

On hover:

- The button shifts down to the background layer's initial position at `translate(12px, 12px)` and it's background color changes to the background layer's background color
- The background layer is shifted to its original position (which is where the button's initial position is) at `translate(0, 0)` and it's background color is changed to the button's background color
