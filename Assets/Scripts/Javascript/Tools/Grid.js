function Grid(cellWidth, cellHeight, MapImages)
{
	this.cellWidth = cellWidth;
	this.cellHeight = cellHeight;

	this.cellsNbX = Math.floor(canvas.width/cellWidth);
	this.cellsNbY = Math.floor(canvas.height/cellHeight);

	this.cells = [];

	this.Rate = 
	{
		obstacle: 0.2,
		rock: 0.2
	};

	this.MapImages = MapImages;

	this.currentCellImage;

	this.matchesTiles =
	{
		0: "grass",
		1: "tree",
		2: "rock"
	}

	this.Create = function() {
		this.GenerateGrid();
	};

	this.GenerateGrid = function()
	{
		let value;

		for (let i = 0; i < this.cellsNbX; i++) {
			this.cells[i] = [];
			for (let j = 0; j < this.cellsNbY; j++) {
				//this.cells[i][j] = Math.random() < this.Rate.obstacle ? 1 : 0;

				if (Math.random() < this.Rate.obstacle) {
					if (Math.random() < this.Rate.rock) {
						value = 2;
					} else {
						value = 1;
					}
				} else {
					value = 0;
				}

				this.cells[i][j] = value;
			}
		}
	};

	this.DisplayGrid = function()
	{
		for (let x = 0; x < this.cellsNbX; x++) {
			for (let y = 0; y < this.cellsNbY; y++) {
				ctx.fillStyle = 'black';

				for (let i in this.matchesTiles){
					if (this.MapImages.Tileset.Tiles[this.cells[x][y]].name == this.matchesTiles[i]) {
						this.currentCellImage = this.MapImages.Tileset.Tiles[i];
					}
				}

				ctx.drawImage(
					this.MapImages.Tileset.img,
					this.currentCellImage.sx*this.MapImages.Tileset.tileWidth,
					this.currentCellImage.sy*this.MapImages.Tileset.tileHeight,
					this.MapImages.Tileset.tileWidth,
					this.MapImages.Tileset.tileHeight,
					x*this.cellWidth,
					y*this.cellHeight,
					this.cellWidth,
					this.cellHeight);
			}
		}
	};

	this.Create();
}