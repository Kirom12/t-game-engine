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

			// Scenes['Txt'] = new TextScene();

			//Change loaded scenes

			// Application.loadedScene = Scenes['Txt'];

			//Create game objetcs

			this.gameObjects.push(new Square());


			let array = ['a', 'b', 'c', 'd'];
			console.log(Math.Random.InArray(array));

			console.log(Math.Random.InScreen(canvas));

			console.log(Math.Random.InCircle(50));

			console.log(Math.Random.AngleRadian());

			console.log(Math.Random.AngleDegree());

			console.log(Math.Random.ColorRGB());

			console.log(Math.Random.ColorRGBA());

			console.log(Math.Random.ColorHEX());

			console.log(Math.Random.InDisk(50));

			console.log(Math.Random.RangeFloat(.5, .8, true));

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