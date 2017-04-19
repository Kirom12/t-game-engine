function Square()
{
	this.name = "Square";
	this.enabled = false;
	this.started = false;
	this.rendered = true;

	this.position = new Vector();

	this.vx = 5;
	this.vy = 5;

	this.Awake = function()
	{
		Print("System: GameObject " + this.name + " created");
	};
	
	this.Start = function(){
		if (!this.started) {
			this.started = true;

			Print('System: GameObject ' + this.name + ' started');
		}

		this.Update();
	};

	this.Update = function(){
		if (Input.keysDown[37]) //Left
		{
			this.position.x -= this.vx;
		}
		else if (Input.keysDown[39]) //Right
		{
			this.position.x += this.vx;
		}
		else if (Input.keysDown[38]) //Up
		{
			this.position.y -= this.vy;
		}
		else if (Input.keysDown[40]) //Down
		{
			this.position.y += this.vy;
		}

		ctx.fillStyle = 'black';
		ctx.beginPath();
		ctx.arc(this.position.x, this.position.y, 25,0,2*Math.PI);
		ctx.closePath();
		ctx.stroke();
	};

	this.GUI = function(){};

	this.Awake();
}