## Day 062

**<a href="https://css100.aniqa.dev#day-062">Live Demo</a>**

**Time to Complete**: 30 mins

**Key Concepts**: advanced flex layouts, triggering different data on hover

**Notes**:

## Advanced flex layouts

Usually, I only reach for flexbox if I want to align content horizontally or vertically but if I want to manipulate a layout on both axes, I use grid. However, flexbox has several additional properties that allows us to manipulate it in certain ways that mimic a grid layout.

In this challenge, I have three pricing cards and a full-width table that shows stats based on which pricing card is hovered. These four elements are in a single flexbox layout: the cards are evenly distributed across the frame and the table is broken into a new row and it takes up the entire width of the frame. This was done using the following declarations:

```scss
// additional styles removed for brevity
.content {
	// represents the entire frame
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 12px;

	& .pricing {
		// represents each of the pricing cards
		flex-basis: 110px;
	}

	.data {
		// represents the table
		flex-basis: 100%;
	}
}
```

- `flex-wrap` allows for wrapping of flex items
- `flex-basis` being set to `100%` for the `.data` table allows it to break into its own row
- `flex-basis` acts similarly to `width` but provides more flexibility due to its relationship to other flex properties, such as, `flex-shrink` and `flex-grow`
- `flex-grow`=> default value is `0` meaning it will not grow beyond it's `flex-basis`
- `flex-shrink` => default value is `1` meaning it will allow the item to shrink if necessary
- `flex-basis` also might be confused with `max-width`:
  - `max-width` sets maximum width of an element
  - `flex-basis` sets initial main size of a flex item before it is adjusted by `flex-grow` and `flex-shrink`
  - these two properties can be used together: a flex item might be allowed to grow based on `flex-grow`, but `max-width` can be used to make sure it doesn't become too large on bigger screens

## Triggering different data on hover

Because the pricing cards are on the same level as the data table, I can use the general sibling combinator `~` to manipulate the data table whenever each of the pricing cards are hovered over.

The `.bar` class represents the base of the data bar - giving it an empty look. `.fill` class is the styling that is adjusted whenever a pricing card is hovered to fill in the `.bar` to visually represent data:

```scss
.bar {
	background: #e4e4e4;
	flex-basis: 100%;
	height: 12px;
	border-radius: 10px;

	& .fill {
		@extend .bar; // allows inheriting of the `.bar` styles
		background: #7dd0ed;
		width: 0;
		transition: all 500ms ease-out;
	}
}
```

```scss
.pricing {
	&:hover {
		cursor: pointer;
		transform: scale(1.1);

		& .pricing--heading {
			background: #27a6d2;
		}

		& .pricing--value {
			color: #27a6d2;
		}
	}

	&.pricing-basic:hover {
		& ~ .data .bar-users .fill {
			width: 15%;
		}

		& ~ .data .bar-gb .fill {
			width: 20%;
		}

		& ~ .data .bar-projects .fill {
			width: 10%;
		}
	}

	&.pricing-pro:hover {
		& ~ .data .bar-users .fill {
			width: 45%;
		}

		& ~ .data .bar-gb .fill {
			width: 55%;
		}

		& ~ .data .bar-projects .fill {
			width: 33%;
		}
	}

	&.pricing-premium:hover {
		& ~ .data .fill {
			width: 100%;
		}
	}
}
```
