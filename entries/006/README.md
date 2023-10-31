## Day 006

**<a href="https://css100.aniqa.dev#day-006">Live Demo</a>**

**Time to Complete**: 30 mins

**Key Concepts**: border property, flexbox, transformations

**Notes**:

## Border property

I think the most common way that border is taught is its shorthand:

```css
.element {
	border: width style color;
}
```

However, we can target border properties individually **AND** we can target each side of a border

- Each of these properties can take up to four different values with each representing a top border, right border, bottom border, and left border:

  - `border-width`
  - `border-style`
  - `border-color`

- We can also target each individual side of border:
  - `border-top-width`
  - `border-right-style`
  - `border-bottom-color`

## Transformations only work on transformable elements

What is a transformable element? <a href="https://drafts.csswg.org/css-transforms-1/#terminology">Any element whose layout uses the CSS box model except non-replaced inline boxes</a>.

In this challenge, for the rotating circles around my profile image, when I applied a `transform: rotate()` on hover, the animation was not happening. Upon further research, I learned that my elements need to be a `block` or `inline-block` element. So, once I switched my `<span>` to an `inline-block`, the transformation worked smoothly.
