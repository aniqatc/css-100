# Day 018

**Time to Complete**: 1 hour

**Key Concepts**: 3D animations

**Notes**:

I'll be completely honest - I had no idea how to go about this challenge. I stared at the <a href="https://100dayscss.com/days/18/">creator's completed version</a> for a while and used Chrome's Developer Tools to inspect the styling of the elements. I saw properties like `backface-visibility` and `transform: rotateX(ndeg)` and `transform-style: preserve-3d` which indicated that this was a 3D element. But, unfortunately, I still couldn't be sure how these properties connected with each other.

So, I had to work backwards: I wrote out the code using the creator's code as a guide for mine.

Once I had a completed version of the elastic animation -- I started removing properties to see how it effected the element.

**Flip card mechanism**

```html
<div class="top"></div>
<div class="bottom"></div>
```

```css
.top,
.bottom {
	position: absolute;
	height: 200px;
	width: 100%;
	left: 0;
	top: 0;
}

.top {
	background-color: #a7a2a9;
}

.bottom {
	top: 50%;
	background-color: #222823;
}
```

When I removed this section of the code, the entire idea clicked immediately! Here's what it looked like without the background colors:

<img src="/entries/018/animation-without-bg.gif">

Basically, there are two circle elements (`top-circle` and `bottom-circle`) which represent two faces of one element. Both elements have `backface-visibility: hidden` applied so that the back of both elements can be hidden. These two elements are nested in a container that has `transform-style: preverse-3d` applied. These properties together create the same type of mechanism as a flip-card (like <a href="https://github.com/aniqatc/css-100/tree/main/entries/014">the one I made on Day 014 - look at those notes for more details</a>).

The animation is applied to the container that will flip the circle over and over again, switching between the front (`top-circle`) and back (`bottom-circle`) constantly.

By adding a `background-color` to the background elements of the circle, we get this 3D bounce - it's impossible to make out that it's really just a circle rotating over and over again.
