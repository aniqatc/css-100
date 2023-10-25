# Day 012

**<a href="https://css100.aniqa.dev#day-012">Live Demo</a>**

**Time to Complete**: 30 mins

**Key Concepts**: text properties, tooltip on hover

**Notes**:

**Text properties: `line-height` and `letter-spacing`**

I used a pseudoelement to create faded quote marks that lay underneath the start of the quote text. I played around with the `font-size` before settling on `240px`. The quote marks don't actually measure out to be `240px` which would be more than 50% of the height of my frame.

When I tried to select _(like when you select and copy text)_ the quote marks, I noticed that the quote marks had a lot of invisible space above and below it. In addition to that, I also noticed that using positional properties on it weren't making sense (like `top: 0` wasn't placing the quote marks at the top of the container).

This invisible space can be adjusted using `line-height`. Since this specific element was going to be positioned in absolute positioning and it would not have any other text near it, I set the `line-height` to `0` to remove any space around it. This got rid of the invisible space that appears on select and made positional properties work as expected.

- `line-height` sets the height of a line box -- usually to set distance between lines of text

In addition to the extra space above & below my quote marks, the quote marks had an excess of space **between** them as well. To get my quote marks next to each other, I used the `letter-spacing` property with a negative value to decrease the distance between the characters. If I used a positive value, it would increase the distance between them.

- `letter-spacing` - sets the horizontal white space between text characters

**Tooltip on hover**

To get the tooltip to appear on `:hover`, I took advantage of the **next-sibling combinator** which uses a `+` sign. The `+` separates two sibling elements (direct children of the same parent element) and applies declarations to the **second** sibling ONLY if it is directly next to the first sibling. Meaning, if there was another element between the two siblings, then this would not work.

As long as those rules are followed, the styling will be applied:

```css
.word:hover + .tooltip {
	visibility: visible;
	opacity: 1;
	transform: translateY(0);
}
```

So, when the highlighted `word` is hovered over, then `tooltip` (its next sibling) will apply the specified styles -- which will reveal the tooltip with a smooth transition.
