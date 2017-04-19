function Loader()
{
	this.name = "Loader";
	this.started = false;
	this.gameObjects = [];

	this.Awake = function()
	{
		if(!Application.debug) console.clear();

		Print('System: Scene ' + this.name + ' created');
	};

	this.Start = function()
	{
		if (!this.started)
		{
			Print('System: Scene ' + this.name + ' started');
			this.started = true;

			//Create scenes here

			Scenes['Image'] = new ImageScene();

			//Change loaded scenes

			Application.loadedScene = Scenes['Image'];
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