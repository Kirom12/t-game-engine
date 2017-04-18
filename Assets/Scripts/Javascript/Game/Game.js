function Run() {
	Time.SetTimeValues();
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	if (Application.loadedScene != null) {
		Application.loadedScene.Start();
	}

	RequestAnimationFrame(Run);
}