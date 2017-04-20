function Dialogue(x, y, Width, Height, sourceText)
{
	this.textBox =
	{
		position: new Vector(),
		Width: Width,
		Height: Height,
		Margin: 10
	};

	this.textBox.position.x = x;
	this.textBox.position.y = y;

	this.sourceText = sourceText;
	this.innerText = "";


	this.time = 0;
	this.waitingTime = 10;

	this.font =
	{
		size: 20,
		type: 'Arial',
		color: '#BADA55'
	}

	this.lines = [""];

	this.maxLines = (this.textBox.Height-this.textBox.Margin*2)/this.font.size;

	this.currentLetter = 0;
	this.currentLine = 0;

	this.display =
	{
		x: 0,
		y: 0,
		currentLine: 0
	}

	this.pause = false;


	this.Start = function(){this.Update();};

	this.Update = function()
	{
		//Animate text
		if (this.time + this.waitingTime < Time.time && this.currentLetter < this.sourceText.length && !this.pause)
		{
			this.time = Time.time;

			if (this.currentLetter > ((this.textBox.Width/(this.font.size/2))-4)*(this.currentLine+1) && this.sourceText[this.currentLetter] == " ")
			{
				this.currentLine++;
				this.lines[this.currentLine] = "";

				if (this.currentLine >= this.display.currentLine+this.maxLines)
				{
					this.display.currentLine += this.maxLines;
				}
			}

			this.lines[this.currentLine] += this.sourceText[this.currentLetter];

			this.innerText += this.sourceText[this.currentLetter];
			this.currentLetter++;
		
		}

		if (Input.keysDown[38])
		{
			if (this.display.currentLine > 0) {this.display.currentLine--;}
		}

		if (Input.keysDown[40])
		{
			if (this.display.currentLine < this.lines.length-this.maxLines) {this.display.currentLine++;}
		}

		this.pause = false;

		if (Input.keysDown[32])
		{
			this.pause = true;
		}

		this.Render();
	}

	this.Render = function()
	{
		ctx.fillStyle = 'black';
		ctx.fillRect(this.textBox.position.x, this.textBox.position.y, this.textBox.Width, this.textBox.Height);

		ctx.font = this.font.size+"px "+this.font.type;
		ctx.fillStyle = this.font.color;

		for (let i = this.display.currentLine; i < this.display.currentLine + this.maxLines; i++)
		{
			if (this.lines[i])
			{
				let x = this.textBox.position.x + this.textBox.Margin;
				let y = this.textBox.position.y + this.textBox.Margin*2 + (i*this.font.size) - (this.display.currentLine*this.font.size);

				if (i == 2) {
					ctx.fillStyle = 'red';
				}
				ctx.fillText(this.lines[i], x, y);
				ctx.fillStyle = this.font.color;
			}
		}

	}
}