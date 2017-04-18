function Loader()
{
	this.name = "Loader";
	this.started = false;

	this.Awake = function()
	{
		if(!Application.debug) console.clear();

		Print('System: Scene ' + this.name + ' created');
	};

	this.Start = function()
	{
		if (!this.started)
		{
			Print('System: Scene ' + this.name + ' started');
			this.started = true;

			//Create scenes here

			// Scenes['Txt'] = new TextScene();

			//Change loaded scenes

			// Application.loadedScene = Scenes['Txt'];
		}

		this.Update();
		this.GUI();
	};

	this.Update = function(){
		
	};

	this.GUI = function(){
		if (Application.debug) {
			Debug.DebugScene();
		}
	};

	this.Awake();
}