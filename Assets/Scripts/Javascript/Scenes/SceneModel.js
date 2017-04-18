function Scene()
{
	this.name = "Model";
	this.started = false;
	this.gameObjects = [];

	this.Awake = function()
	{
		if(!Application.debug) console.clear();

		Print('System: Scene ' + this.name + ' created');
	};

	this.Start = function()
	{
		if (!this.started) {
			this.started = true;
			Print('System: Scene ' + this.name + ' started')
		}

		this.Update();
		this.GUI();
	};

	this.Update = function(){
		if (!Application.GamePaused) {
			for (var i = 0; i < this.gameObjects.length; i++) {
				this.gameObjects[i].Start();
			}
		}
	};

	this.GUI = function(){
		if (Application.debug) {
			Debug.DebugScene();
		}
	};

	this.Awake();
}