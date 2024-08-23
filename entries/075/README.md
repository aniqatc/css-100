## Day 075

**<a href="https://css100.aniqa.dev#day-075">Live Demo</a>**

**Time to Complete**: 25 mins

**Key Concepts**: 3d rotations

**Notes**:

#### The Disk Style

There are 8 circular disks positioned within the space, each with an opacity set to `0.2`, making them semi-transparent. This semi-transparency allows each disk to be partially see-through, so when they spin and overlap during rotation, you can still discern each individual disk despite the overlap. The effect creates a visually appealing, layered look as the disks rotate in 3D space. The 3D space was created using the `transform-style: preserve-3d` property/value on the `.center` class which ensures that all the child elements (the disks) are rendered within a 3D space.

#### 3D Rotations Using `@for` Loop with SCSS

The `spinning-disc` animation is actually applied to the `center` class which is the space that holds the disks. This ensures that all the disks move together as a unit in the 3D space, creating the illusion of a sphere rotating in 3D space.

```scss
@keyframes spinning-disc {
	0%,
	100% {
		// starts & ends with no rotation to ensure a smooth looping motion
		transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg);
	}
	25% {
		// these values were taken from the original!
		transform: rotateY(45deg) rotateX(180deg) rotateZ(45deg);
	}
	50% {
		transform: rotateY(180deg) rotateX(0deg) rotateZ(90deg);
	}
	75% {
		transform: rotateY(45deg) rotateX(45deg) rotateZ(90deg);
	}
}
```

The individual disks are arranged within the .center container in such a way that they form the appearance of a sphere. This is achieved by rotating each disk around the X-axis by a specific angle. The disks are spaced evenly across the 360-degree plane, with each disk positioned 45 degrees apart from the next.

```scss
// loops through each of the disks: 8 total
@for $num from 1 through 8 {
	// targets each disk by its position in the markup
	&:nth-child(#{$num}) {
		// each disk is rotated around x-axis by 45 degrees (each are equally spaced)
		transform: rotateX((360deg / 8) * $num);
	}
}
```

Each disk maintains its position relative to the others, but as the container rotates, the entire set of disks appears to spin and shift in 3D space. The disks are semi-transparent, allowing us to see through them and appreciate the layered, spherical structure.
