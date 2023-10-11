# Day 013

**Time to Complete**: 1 hour

**Key Concepts**: image optimization, responsive images, transformations (translations), transitions and transition delays, pointer-events

**Notes**:

#### Image Optimization

AVIF and WebP are image formats that provide high-quality image compression - they have a smaller file size and do not sacrifice image quality. This makes websites load faster than it would with large JPEG and PNG files. I've compressed JPEG and PNG files to reduce the file size but sometimes, I would be sacrificing some obvious quality to do that. With AVIF and WebP, they are already optimized without any obvious quality changes.

Currently, it looks like the WebP format is supported on all modern desktop and mobile browsers, whereas, AVIF is still waiting on Edge support.

I used the `<picture>` tag to include both image formats for this challenge. Since WebP has more support, I am using it as my fallback for those that do not have support for AVIF. My preferred image format is defined in the `<source>` tag with the `srcset` attribute:

```html
<picture>
	<source srcset="/entries/013/images/scene-3.avif" />
	<img
		src="/entries/013/images/scene-3.webp"
		alt="gallery image, house near mountains"
	/>
</picture>
```

Since the images I got from Unsplash were in AVIF format, I needed to convert my images to the WebP format so that it could be used as the fallback. There are tons of online tools to do this but I came across <a href="https://formulae.brew.sh/formula/webp">Homebrew package called webp</a> that converts images to WebP straight from the terminal (and it's super fast).

Here is the command I used:

```bash
cwebp -q 80 image.png -o image.webp
```

- `-q` flag defines quality between 1 and 100
- `-o` flag specifies the output path (file to be converted into)

#### Responsive Images

My 100 Days of CSS showcase is built using a responsive grid system and each grid item can't go below `400px` of width, but it can stretch up because the max column size is `1fr` (I've noticed it doesn't stretch beyond `800px`).

So, while the frame is meant to be 400x400 (as defined by the template on the challenge website) - my frames are actually between 400 and 800 pixels in width. For most of the challenges, this constraint was easy to work with. But for this one, I needed to add an image gallery and I wanted to make it responsive so that it could fit the minimum 400 pixel width frame or it can stretch up to fit the 800 pixel width frame.

Here's how I approached it:

- I knew the height would remain unchanged so I gave the gallery images an explicit height of `192px` (not `200px` because I wanted some gap spacing).
- I gave the images a width of `100%` so that it always fills its container space
- I used the `object-fit` property with the value of `cover` which will ensure that the images maintain aspect ratio and will be scaled up or down to keep the image from being distorted or stretched (edges might be cropped off to get this effect)

Note: the images are also in a two-column grid and are given `1fr` of column space adding to the responsiveness.

#### User Profile -- Transformations: Translations

When any of the images in the gallery are clicked, an animation begins and reveals a user profile. Each element of the user profile moves into the frame from different directions that are placed outside of the frame.

To get this effect, I moved all of the items outside of the frame using `transform: translateY()` -- specifically `translateY` because I only needed these elements to move up or down on the Y-axis. I did not change any of the absolute positioning properties because that is their default position and it's where I want them to appear whenever the user profile is opened.

So, on an `active` class, I had all the translations reversed by using `transform: translateY(0)` which meant that when the `active` class is applied to the elements, then they would be moved into their original position.

#### User Profile -- Transitions & Transition Delays

With the use of the `transition` and `transition-delay` property - I can have each element move into the frame at different rates. For example, I wanted the background of the user profile to appear first so these elements only had a `100ms` delay before they appered, whereas, the profile avatar and close button appeared about `400ms` and `600ms` later.

Additionally, I found that you can target individual properties for transitions!

```css
close-button {
	transition: transform 700ms ease-out 600ms, background-color 200ms ease-in;
}
```

- The `transform` transition has a delay and longer duration but the `background-color` property has a short `200ms` transition that occurs immediately (this is for whenever the close button is hovered).

#### Pointer Events

Technically, there are two layouts going on in this frame: the gallery and the other is the user profile that appears on top of the gallery when toggled. I noticed that even though I used a transformation to move the elements out of the frame, they were still taking up space on top of the gallery. I couldn't click on the gallery images because the `profile` div was still layered over the `gallery` div. I couldn't solve this with `z-index` because I can't have the profile be positioned behind the gallery. It would ruin the transition into the frame when it's toggled.

The best way to tackle this was to turn off pointer events -- this would mean that the element would no longer be clickable. So I applied `pointer-events: none` to the `profile` div, making it no longer available to my mouse. Instead, I could now click the gallery images.

Once I toggled open the user profile, I needed the ability to click the elements on the profile now -- so on an `active` class, I had the `pointer-events` property set to revert.
