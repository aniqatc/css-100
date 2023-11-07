import Scene1WebP from '/entries/013/images/scene-1.webp';
import Scene2WebP from '/entries/013/images/scene-2.webp';
import Scene3WebP from '/entries/013/images/scene-3.webp';
import Scene4WebP from '/entries/013/images/scene-4.webp';
import AvatarWebP from '/entries/013/images/avatar.webp';

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
					<img
						src="${Scene1WebP}"
						alt="gallery image, rocky walkway in nature"
				/>
				<span><i class="fa-solid fa-plus open-icon"></i></span>
			</div>
			<div class="gallery-image">
					<img
						src="${Scene2WebP}"
						alt="gallery image, trees near a mansion"
					/>
				<span><i class="fa-solid fa-plus open-icon"></i></span>
			</div>

			<div class="gallery-image">
					<img
						src="${Scene3WebP}"
						alt="gallery image, house near mountains"
					/>
				<span><i class="fa-solid fa-plus open-icon"></i></span>
			</div>
			<div class="gallery-image">
					<img
						src="${Scene4WebP}"
						alt="gallery image, nature landscape"
					/>
				<span><i class="fa-solid fa-plus open-icon"></i></span>
			</div>
		</div>
		<div class="profile">
			<div>
					<img
						src="${Scene4WebP}"
						class="profile-cover"
						alt="profile cover example, nature landscape"
					/>
				<span><i class="fa-solid fa-xmark close-icon"></i></span>
					<img
						src="${AvatarWebP}"
						class="profile-avatar"
						alt="profile avatar example, back of a woman in coat and backpack"
				/>
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
