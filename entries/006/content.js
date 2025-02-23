import Me from './images/me4.png';

export function getMarkup() {
	return `
	<!-- Day 006 -->
<div class="day-006 frame" id="day-006">
	<span class="code-link">
		<a
			href="https://github.com/aniqatc/css-100/tree/main/entries/006"
			target="_blank"
			rel="noreferrer"
			>Day 006: Profile</a
		>
	</span>
	<div class="center">
		<div class="profile-wrapper">
			<div class="profile-info">
				<div class="profile--img">
					<span class="profile--circle profile--circle-1"></span>
					<span class="profile--circle profile--circle-2"></span>
					<img
						src="${Me}"
						alt="profile avatar of aniqa"
					/>
				</div>
				<div class="profile--name">
					Aniqa Chowdhury
					<span class="text-sm">Frontend Developer</span>
				</div>
				<div class="profile--buttons">
					<a href="https://github.com/aniqatc" target="_blank">Github</a>
					<a href="https://aniqa.dev" target="_blank">Website</a>
				</div>
			</div>
			<div class="profile-stats">
				<div>523 <span class="text-sm">Posts</span></div>
				<div>1290 <span class="text-sm">Likes</span></div>
				<div>1341 <span class="text-sm">Followers</span></div>
			</div>
		</div>
	</div>
</div>
`;
}
