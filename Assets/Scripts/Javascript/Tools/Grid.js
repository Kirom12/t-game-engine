function Grid(cellWidth, cellHeight, MapImages)
{
	this.cellWidth = cellWidth;
	this.cellHeight = cellHeight;

	this.cellsNbX = Math.floor(canvas.width/cellWidth);
	this.cellsNbY = Math.floor(canvas.height/cellHeight);

	this.cells = [];

	this.rate = 0.5;

	this.MapImages = MapImages;

	this.currentCellImage;

	this.matchesTiles =
	{
		0: "grass",
		1: "tree"
	}

	this.Create = function() {
		this.GenerateGrid();
	};

	this.GenerateGrid = function()
	{
		for (let i = 0; i < this.cellsNbX; i++) {
			this.cells[i] = [];
			for (let j = 0; j < this.cellsNbY; j++) {
				this.cells[i][j] = Math.random() < this.rate ? 1 : 0;
			}
		}
	};

	this.DisplayGrid = function()
	{
		for (let x = 0; x < this.cellsNbX; x++) {
			for (let y = 0; y < this.cellsNbY; y++) {
				ctx.fillStyle = 'black';

				for (let i in this.matchesTiles){
					if (this.cells[x][y] == i) {
						this.currentCellImage = this.MapImages.Tileset.Tiles[i];
					}
				}

				ctx.drawImage(this.MapImages.Tileset.img, this.currentCellImage.sx, this.currentCellImage.sy, this.currentCellImage.sWidth, this.currentCellImage.sHeight, x*this.cellWidth, y*this.cellHeight, this.cellWidth, this.cellHeight);
			}
		}
	};

	this.Create();
}