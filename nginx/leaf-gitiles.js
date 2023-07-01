function getCookie(name){
    var pattern = RegExp(name + "=.[^;]*")
    var matched = document.cookie.match(pattern)
    if(matched){
        var cookie = matched[0].split('=')
        return cookie[1]
    }
    return false
}

window.addEventListener('DOMContentLoaded', (event) => {
	// Dark Theme support, see also leaf.js gerrit plugin
	if (getCookie("LeafDarkTheme") == "true") {
		var element = document.createElement("link");
		element.setAttribute("rel", "stylesheet");
		element.setAttribute("type", "text/css");
		element.setAttribute("href", "/static/dark.css");
		document.head.appendChild(element);
	}
});
