var Input = 
{
	keysDown: [],
	mousePosition: new Vector(),
	mouseClick: false,

	KeyDown: function(e)
	{
		if (Application.Debug) {;
			e.preventDefault();
			e.stopPropagation();	
		}

		Input.keysDown[e.keycode] = true;
	},
	KeyUp: function(e)
	{
		delete Input.keysDown[e.keycode];
	},
	MouseDown: function(e){
		Input.mouseClick = true;
	},
	MouseUp: function(e){
		Input.mouseClick = false;
	},
	MouseMove: function(e){
		var Rect = canvas.getBoundingClientRect();
		Input.mousePosition.x = (e.clientX - Rect.left) / (Rect.right - Rect.left) * canvas.width | 0;
		Input.mousePosition.y = (e.clientY - canvas.offsetTop) / (Rect.bottom - Rect.top) * canvas.height | 0;
	}
}