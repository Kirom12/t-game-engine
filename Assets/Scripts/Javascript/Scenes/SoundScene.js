function SoundScene()
{
	this.name = "Sound";
	this.started = false;
	this.gameObjects = [];
	this.Sounds = {};

	this.Awake = function()
	{
		if(!Application.debug) console.clear();

		Print('System: Scene ' + this.name + ' created');
	};

	this.Start = function()
	{
		if (!this.started) {
			Print('System: Scene ' + this.name + ' started')
			this.started = true;

			this.Sounds = {
				Test: new Sound("sounds/piano/a1.mp3")
			}
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

		this.Sounds.Test.Play();
	};

	this.GUI = function(){
		if (Application.debug) {
			Debug.DebugScene();
		}
	};

	this.Awake();
}