# Day 009

**Time to Complete**: 1.5 hours

**Key Concepts**: CSS art with absolute positioning, flexbox margin trick, DOM manipulation, Math.random(), transform with scale() value, animation property,

**Notes**:

#### Drawing a night scene with absolute positioning

Key aspects of the background scene with hill landscape and a glowing moon with craters:

- using `box-shadow()` to create a glow around the moon
- applying `overflow: hidden` to the moon so that it contains craters that appear at the edge of the moon; same property used on hills so that they don't overflow into the weather data section
- used directional properties `top`, `bottom`, `right` and `left` to individually place 10 varying sizes of craters on the moon

#### Flexbox margin trick

Super cool flexbox trick: using `margin-{direction}` property with `auto` to take up all the extra space available in a flex container.

Best explained with a visual example:

<img src="/entries/009/flexbox-trick.png" width="500">

In some cases, the aligning and spacing properties provided by flexbox might not be enough to align/space individual flex items. In the above scenario, the items are in `flex-direction: row` by default: making the primary-axis go from left-to-right and the cross-axis go from top-to-bottom.

I used `justify-content: space-between` to space the three items equally -- mostly because I wanted the first and last item to be at the edges of the container. But I wanted the middle item to be at the left-edge of its container (next to the first one and as far away as possible from the last item). Before I learned about auto margins in flexbox, I would probably create another flexbox container between the last two items and use `justify-content: space-between` but that seems like overkill and **it is**.

`align-self` doesn't work in this case because it aligns flex items in their container according to the cross axis (which in this case, is top-to-bottom) so the item sticks to the top. So, the **solution** was to use `margin-right: auto` which tells the item to take up all the space to the right of it.

Here's a more <a href="https://css-tricks.com/the-peculiar-magic-of-flexbox-and-auto-margins/">detailed article by CSS-Tricks</a> to get an understanding about auto margins.

#### Continuous rain animation with varying size droplets

First step was to create the styling declarations for the droplets so I temporarily added rain droplets to get an idea of its shape, color, and sizing and applied these to specific classes. For sizing, I created three different classes: `lg`, `md` and `sm` which represent large, medium and small rain droplets.

**DOM Manipulation**

Instead of hard-coding 45 `<span>` elements into the HTML markup, I used JavaScript's `createElement()` method to create 45 `<span>` elements using for-loop. Once it was added to the relevant container using `appendChild()` method, I could now manipulate the styling properties.

```css
for (let i = 0; i < 45; i++) {
	const span = document.createElement('span');
	span.className = 'droplet ' + getRandomDropletSize();
	rainContainer.appendChild(span);
}
```

**Applying random values with `Math.random()`**

`Math.random()` provides a random number between `0` and `1`

- To set a minimum number, just add it to `Math.random() + 5`
- To set a maximum number, just multiply it to `Math.random() * 10`
- To get round the number, use `Math.round(Math.random())` or `Math.ceil`/`Math.floor`
