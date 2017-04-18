function Green()
{
	this.name = 'Green';
	this.started = false;

	this.Awake = function()
	{
		//console.clear();
		console.log('System: Scene ' + this.name + ' created');
	}

	this.Start = function()
	{
		if (!this.started) {
			this.started = true;
			console.log('System: Scene ' + this.name + ' started')
		}

		this.Update();
	}

	this.Update = function(){
		ctx.fillStyle = 'green';
		ctx.fillRect(0, 0, 99999, 99999);
	}
	this.GUI = function(){}

	this.Awake()
}