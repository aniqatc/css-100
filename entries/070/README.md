## Day 070

**<a href="https://css100.aniqa.dev#day-070">Live Demo</a>**

**Time to Complete**: 15 mins

**Key Concepts**: flex with flex-basis, inset shadows

**Notes**:

## Flex with `flex-basis`

```scss
.group {
	display: flex;
	flex-wrap: wrap;

	& .card {
		flex-basis: 50%;
	}
}
```

- `display: flex` enables the flexbox layout for child elements - in this case, `.card` elements
- `flex-wrap: wrap` means that when there isn't space left for the flex items, the items can break into a new row
- `flex-basis: 50%` specifies the size of the flex item before any free space is distributed - in this case, by providing `50%` as a value, each item should take up `50%` of the container's width
  - I used this value because I want each item to take up half of the space of the container so that only two flex items can be fit into each row

## Inset shadows

The hover state for the `.card`:

```scss
&:hover {
	transform: scale(0.95);
	box-shadow: inset 2px 2px 8px 2px rgba(0, 0, 0, 0.5), inset -2px -2px 8px 2px rgba(0, 0, 0, 0.5);
	cursor: pointer;
}
```

I used two shadows to create depth inwards - making the element appear as though its being pressed into the page on hover:

- `inset 2px 2px 8px 2px` deals with creating a blurred, shadowed border inside the card on the top and left sides
- `inset -2px -2px 8px 2px` deals with creating a blurred, shadowed border inside the card on bottom and right sides
