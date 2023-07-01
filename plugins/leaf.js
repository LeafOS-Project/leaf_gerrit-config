function getSeason() {
	var month = new Date().toString().split(" ")[1];
	var date = new Date().toString().split(" ")[2];
	switch (month) {
		case "Jan":
		case "Feb":
			return "Winter";
		case "Mar":
			return date < 20 ? "Winter" : "Spring";
		case "Apr":
		case "May":
			return "Spring";
		case "Jun":
			return date < 21 ? "Spring" : "Summer";
		case "Jul":
		case "Aug":
			return "Summer";
		case "Sep":
			return date < 22 ? "Summer" : "Autumn";
		case "Oct":
		case "Nov":
			return "Autumn";
		case "Dec":
			return date < 22 ? "Autumn" : "Winter";
	}
}

Gerrit.install(plugin => {
	var bgColor = "#90ee90";
/*	switch (getSeason()) {
		case "Autumn":
			bgColor = "#ffee90";
			break;
		case "Winter":
			bgColor = "#eeffee";
			break;
	}*/

	const styleEl = document.createElement('style');
	styleEl.innerHTML = `
		html, html.darkTheme {
			--header-background-color: ` + bgColor + `;
			--header-text-color: var(--gray-900);
			--header-title-content: 'LeafOS Gerrit';
		}
	`;
	document.head.appendChild(styleEl);

        // Set a dark-theme cookie for use on git.leafos.org
	// Gerrit is always reloading after switching theme
        // As of Gerrit v3.7 there is no known way to check if dark theme is enabled
	var date = new Date();
	date.setYear(date.getYear() + 1900 + 5);
	document.cookie = "LeafDarkTheme=true; domain=.leafos.org; path=/; SameSite=Strict; expires=" + date.toGMTString() + ";";
});

