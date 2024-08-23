## Day 078

**<a href="https://css100.aniqa.dev#day-078">Live Demo</a>**

**Time to Complete**: 10 mins

**Key Concepts**: shadows on hover

**Notes**:

The box-shadow effects increase in intensity with each subsequent child element:

```scss
// subtle shadow but dark
&:nth-child(1):hover {
	box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.5);
}

// more noticeable shadow but more blurred than the previous
&:nth-child(2):hover {
	box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.4);
}

// wider shadow - element looks more raised than others
&:nth-child(3):hover {
	box-shadow: 12px 12px 32px rgba(0, 0, 0, 0.4);
}
```
