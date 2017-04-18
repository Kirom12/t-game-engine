function Block()
{
	this.name = "Square";
	this.enabled = false;
	this.started = false;
	this.rendered = true;

	this.Awake = function()
	{
		console.log("System: GameObject " + this.name + " created !");
	};
	
	this.Start = function(){
		if (!this.started) {
			this.started = true;
			console.log('System: Scene ' + this.name + ' started');
		}

		this.Update();
	};

	this.Update = function(){};
	this.GUI = function(){};
}