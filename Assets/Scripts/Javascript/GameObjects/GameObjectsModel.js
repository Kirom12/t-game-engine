function GameObject()
{
	this.name = "Object";
	this.enabled = false;
	this.started = false;
	this.rendered = true;

	this.Awake = function()
	{
		Print("System: GameObject " + this.name + " created !");
	};
	
	this.Start = function(){
		if (!this.started) {
			this.started = true;

			Print('System: Scene ' + this.name + ' started');
		}

		this.Update();
	};

	this.Update = function(){};
	this.GUI = function(){};
}