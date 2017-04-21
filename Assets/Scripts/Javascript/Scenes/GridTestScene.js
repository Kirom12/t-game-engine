function GridTestScene()
{
	this.name = "GridTest";
	this.started = false;
	this.gameObjects = [];

	this.MapImages = {};

	this.Grid;

	this.Awake = function()
	{
		if(!Application.debug) console.clear();

		Print('System: Scene ' + this.name + ' created');
	};

	this.Start = function()
	{
		if (!this.started) {
			this.started = true;
			Print('System: Scene ' + this.name + ' started');

			this.img = new Image();
			this.img.src = "img/tileset.png";

			this.MapImages.Tileset = 
			{
				img: this.img,
				Tiles: 
				[
					{name: "grass", sx: 0, sy: 0, sWidth: 32, sHeight: 32},
					{name: "tree", sx: 0, sy: 32, sWidth: 32, sHeight: 32},
				]
			}

			this.Grid = new Grid(50, 50, this.MapImages);
		}

		this.Update();
		this.GUI();
	};

	this.Update = function(){
		this.Grid.DisplayGrid();


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