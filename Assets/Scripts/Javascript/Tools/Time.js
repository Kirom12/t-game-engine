var Time =
{
	time: 0,
	deltaTime: 0,
	FPS: 0,
	timeOfLastFrame: 0,


	gameStart: 0,
	gameLoaded: 0,
	sceneStart: 0,
	sceneLoaded: 0,

	SetTimeValues: function()
	{
		this.time = Date.now();
		this.deltaTime = (this.time - this.timeOfLastFrame) / 1000;

		this.averageDelay += ((this.Time - this.timeOfLastFrame) - this.averageDelay) / 10;
		this.FPS = (1000/this.averageDelay).toFixed(1);
		this.timeOfLastFrame = this.time;
	}
}