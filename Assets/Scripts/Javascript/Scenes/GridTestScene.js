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
				tileWidth: 32,
				tileHeight: 32,
				Tiles: 
				[
					{name: "grass", sx: 0, sy: 0},
					{name: "tree", sx: 0, sy: 1},
					{name: "rock", sx: 2, sy: 14},
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