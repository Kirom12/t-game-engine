var Debug =
{
	Break: function()
	{
		debugger;
	},

	DebugScene: function()
	{
		if (Application.debug)
		{
			this.SceneName();
			this.MousePosition();
			this.ShowFPS();
		}
	},

	MousePosition: function()
	{
		ctx.font = '15px Arial';
		if(Input.mouseClick)
		{
			ctx.fillStyle = "red";
		}else
		{
			ctx.fillStyle = "green";
		}

		ctx.font = "10px Arial";
		ctx.fillText("x : " + Input.mousePosition.x + " y : " + Input.mousePosition.y,Input.mousePosition.x,Input.mousePosition.y);
	},

	SceneName: function()
	{
		ctx.font = '15px Arial';
		ctx.fillStyle = 'black';
		ctx.fillText(Application.loadedScene.name, canvas.width - 100, 50);
	},

	ShowFPS: function()
	{
		ctx.fillStyle = 'rgba(122, 122, 122, 0.4)';
		ctx.RoundedBox(canvas.width - 130, 4, 80, 20, 20);
		ctx.font = '15px Arial';
		ctx.fillStyle = 'orange';

		if (Time.FPS > 40)
		{
			ctx.fillStyle = 'green';
		} else if (Time.FPS < 20)
		{
			ctx.fillStyle = 'red';
		}
		ctx.fillText(Time.FPS, canvas.width - 100, 20);
	}
};