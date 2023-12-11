## Day 069

**<a href="https://css100.aniqa.dev#day-069">Live Demo</a>**

**Time to Complete**: 25 mins

**Key Concepts**: border-radius for eye shape, border-width for iris, translations for eye movement and eye blink

**Notes**:

## `border-radius` for eye shape

The `.eye` element represents the overall shape of the eye:

```scss
.eye {
	background: #d8d8d8;
	width: 150px;
	height: 150px;
	border-radius: 100% 0% 100% 0% / 100% 0% 100% 0%;
	transform: rotate(45deg);
	overflow: hidden;
	position: relative;
}
```

- `border-radius` is used to create an almond shape using the following values: `100% 0% 100% 0% / 100% 0% 100% 0%`
- `transform: rotate()` turns the shape by `45deg` so that both points of the eyes are sitting horizontally
- `height` and `width` have to be the same value because `border-radius` sets the shape so we don't have to manually make the height smaller than the width
- `overflow` is set to `hidden` so that when the pupil is animated and moves around the eye, it won't overflow outside the container

## Border width for iris

The `.iris` element represents both the pupil and iris of the eye:

```scss
.iris {
	position: absolute;
	top: calc(50% - 50px);
	left: calc(50% - 50px);
	width: 100px;
	height: 100px;
	background: #365314;
	border-radius: 50%;
	border: 35px solid #fff;
	animation: eye-movement 4.9s ease-in-out infinite;
}
```

- `position` - the iris is positioned in the exact center of the `.eye` container
- `width` and `height` along with a `border-radius` of `50%` ensures that a circular element is created
- `background` represents the color of the pupil
- `border` is set to a `35px` width and white color to represent the iris (section surrounding the pupil)

## Translations for eye movement and eye blink

Both animations for the eye movement and the eye blink use translations. The eye movement animation uses translations on both X- and Y-axis to move the eye to give the appearance that the eye is looking in different directions. For the eye blink, two rectangles are hidden (by using the same color as the background) and periodically are translated on the Y-axis to meet at the middle of the eye - as if the top eyelid and bottom eyelid are shutting and opening to give the appearance of an eye blinking.
