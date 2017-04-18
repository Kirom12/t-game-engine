window.RequestAnimationFrame = (function() {
	return window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame ||

	function(_callback, _element) {
		windows.setTimeout(_callback, 1000/60);
	}
})();

Scenes["Loader"] = new Loader();
Application.loadedScene = Scenes["Loader"];

window.addEventListener("keydown", Input.KeyDown);
window.addEventListener("keyup", Input.KeyUp);
window.addEventListener("mouseup", Input.MouseUp);
window.addEventListener("mousedown", Input.MouseDown);
window.addEventListener("mousemove", Input.MouseMove);

Run();