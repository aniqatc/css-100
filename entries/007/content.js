export function getMarkup() {
	return `
    <!-- Day 007 -->
<div class="day-007 frame" id="day-007">
	<span class="code-link">
		<a
			href="https://github.com/aniqatc/css-100/tree/main/entries/007"
			target="_blank"
			rel="noreferrer"
			>Day 007: Notifications, Menu & Search</a
		>
	</span>
	<div class="center">
		<div class="notifications">
			<div class="notifications-header">
				<button class="menu-icon-button" aria-label="Toggle Menu">
					<span class="menu-icon icon-line-half"></span>
					<span class="menu-icon icon-dot"></span>
					<span class="menu-icon icon-line-full"></span>
				</button>
				<div>Notifications</div>
				<div>
					<input type="search" placeholder="Search..." class="search-bar" />
					<button class="search-button" aria-label="Toggle Search">
						<i class="fa fa-search"></i>
					</button>
				</div>
			</div>
			<div class="vertical-line"></div>
			<div class="notifications-body">
				<ul class="notifications-list">
					<li>
						<div class="point"></div>
						<p class="notifications-time">9:24AM</p>
						<p><b>John Walker</b> posted a photo on your wall.</p>
					</li>
					<li>
						<div class="point"></div>
						<p class="notifications-time">9:24AM</p>
						<p><b>Alice Parker</b> commented your last post.</p>
					</li>
					<li>
						<div class="point"></div>
						<p class="notifications-time">9:24AM</p>
						<p><b>Luke Wayne</b> added you as a friend.</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="menu">
			<nav>
				<ul>
					<li><span class="fa fa-dashboard"></span> Dashboard</li>
					<li><span class="fa fa-user"></span> Profile</li>
					<li><span class="fa fa-bell"></span> Notifications</li>
					<li><span class="fa fa-comments"></span> Messages</li>
					<li><span class="fa fa-gear"></span> Settings</li>
				</ul>
			</nav>
		</div>
	</div>
</div>
`;
}
