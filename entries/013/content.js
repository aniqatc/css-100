export function getMarkup() {
	return `
	<!-- Day 013 -->
<div class="day-013 frame" id="day-013">
	<span class="code-link">
		<a
			href="https://github.com/aniqatc/css-100/tree/main/entries/013"
			target="_blank"
			rel="noreferrer"
			>Day 013: User Photo Gallery</a
		>
	</span>
	<div class="wrapper">
		<div class="gallery">
			<div class="gallery-image">
				<picture>
					<source srcset="/entries/013/images/scene-1.avif" />
					<img
						src="/entries/013/images/scene-1.webp"
						alt="gallery image, rocky walkway in nature"
				/></picture>
				<span><i class="fa-solid fa-plus open-icon"></i></span>
			</div>
			<div class="gallery-image">
				<picture>
					<source srcset="/entries/013/images/scene-2.avif" />
					<img
						src="/entries/013/images/scene-2.webp"
						alt="gallery image, trees near a mansion"
					/>
				</picture>
				<span><i class="fa-solid fa-plus open-icon"></i></span>
			</div>

			<div class="gallery-image">
				<picture>
					<source srcset="/entries/013/images/scene-3.avif" />
					<img
						src="/entries/013/images/scene-3.webp"
						alt="gallery image, house near mountains"
					/>
				</picture>
				<span><i class="fa-solid fa-plus open-icon"></i></span>
			</div>
			<div class="gallery-image">
				<picture>
					<source srcset="/entries/013/images/scene-4.avif" />
					<img
						src="/entries/013/images/scene-4.webp"
						alt="gallery image, nature landscape"
					/>
				</picture>
				<span><i class="fa-solid fa-plus open-icon"></i></span>
			</div>
		</div>
		<div class="profile">
			<div>
				<picture>
					<source srcset="/entries/013/images/scene-4.avif" />
					<img
						src="/entries/013/images/scene-4.webp"
						class="profile-cover"
						alt="profile cover example, nature landscape"
					/>
				</picture>
				<span><i class="fa-solid fa-xmark close-icon"></i></span>
				<picture>
					<source srcset="/entries/013/images/avatar.avif" />
					<img
						src="/entries/013/images/avatar.webp"
						class="profile-avatar"
						alt="profile avatar example, back of a woman in coat and backpack"
				/></picture>
			</div>
			<div class="profile-bottom">
				<span><b>Julia Toth</b> Photographer</span>
				<div class="profile-buttons">
					<span><i class="fa-solid fa-phone"></i></span>
					<span><i class="fa-solid fa-comment"></i></span>
					<span><i class="fa-solid fa-heart"></i></span>
				</div>
			</div>
		</div>
	</div>
</div>
`;
}
