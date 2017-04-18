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
		ctx.fillText(Application.loadedScene.name, canvas.width - 100, 20);
	},

	ShowFPS: function()
	{
		ctx.fillStyle = 'rgba(122, 122, 122, 0.4)';
		ctx.RoundedBox(4, 4, 120, 70, 70);
		ctx.RoundedBox(canvas.width - 130, 4, 125, 20, 20);
	}
};