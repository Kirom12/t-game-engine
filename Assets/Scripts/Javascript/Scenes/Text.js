function TextScene()
{
	this.name = 'Text';
	this.started = false;

	this.Awake = function()
	{
		if(!Application.debug) console.clear();

		Print('System: Scene ' + this.name + ' created');
	}

	this.Start = function()
	{
		if (!this.started)
		{
			this.started = true;
			Print('System: Scene ' + this.name + ' started')
		}

		this.Update();
		this.GUI();
	}

	this.Update = function()
	{

		if(Input.mouseClick)
		{
			ctx.fillStyle = "red";
		}else
		{
			ctx.fillStyle = "green";
		}

		ctx.font = "30px Arial";
		ctx.fillText("x : " + Input.mousePosition.x + " y : " + Input.mousePosition.y,Input.mousePosition.x,Input.mousePosition.y);
	}

	this.GUI = function(){
		if (Application.debug) {
			Debug.DebugScene();
		}
	};

	this.Awake()
}