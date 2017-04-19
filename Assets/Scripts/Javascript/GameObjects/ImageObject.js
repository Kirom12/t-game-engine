function ImageObject()
{
	this.name = "ImageObject";
	this.enabled = false;
	this.started = false;
	this.rendered = true;

	this.img;
	this.box = new Box();

	this.rotation = 0;

	this.rescaleSpeed = 30;

	this.Awake = function()
	{
		Print("System: GameObject " + this.name + " created !");
	};
	
	this.Start = function(){
		if (!this.started) {
			Print('System: GameObject ' + this.name + ' started');
			this.started = true;

			this.img = new Image();
			this.img.src = "http://elelur.com/data_images/mammals/seal/seal-05.jpg";

			this.box.w = 200; 
			this.box.h = 200; 
		}

		this.Update();
	};

	this.Update = function(){


		if (Input.keysDown[38]) //Up
		{
			this.box.w += this.box.w/this.rescaleSpeed;
			this.box.h += this.box.h/this.rescaleSpeed;
		}
		else if (Input.keysDown[40]) //Down
		{
			this.box.w -= this.box.w/this.rescaleSpeed;
			this.box.h -= this.box.h/this.rescaleSpeed;
		}

		if (Input.keysDown[37]) //Left
		{
			this.rotation -= 1;
		}
		else if (Input.keysDown[39]) //Right
		{
			this.rotation += 1;
		}

		this.box.x = 0;
		this.box.y = 0;

		ctx.save();
		ctx.translate((canvas.width/2)-(this.box.w/2),(canvas.height/2)-(this.box.h/2));
		ctx.rotate(this.rotation*Math.PI/180);
		
		ctx.drawImage(this.img, this.box.x, this.box.y, this.box.w, this.box.h);

		ctx.restore();


	};

	this.GUI = function(){};

	this.Awake();
}