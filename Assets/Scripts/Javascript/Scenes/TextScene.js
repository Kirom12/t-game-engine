function TextScene()
{
	this.name = "Text";
	this.started = false;
	this.gameObjects = [];

	this.text = " Intuition is fucking important. Learn from fucking criticism. If you’re not being fucking honest with yourself how could you ever hope to communicate something meaningful to someone else? Someday is not a fucking day of the week. Paul Rand once said, “The public is more familiar with bad fucking design than good design. Intuition is fucking important. Learn from fucking criticism. If you’re not being fucking honest with yourself how could you ever hope to communicate something meaningful to someone else? Someday is not a fucking day of the week. Paul Rand once said, “The public is more familiar with bad fucking design than good design.";

	this.Awake = function()
	{
		if(!Application.debug) console.clear();

		Print('System: Scene ' + this.name + ' created');
	};

	this.Start = function()
	{
		if (!this.started) {
			Print('System: Scene ' + this.name + ' started')
			this.started = true;

			this.gameObjects.push(new Dialogue(50, 50, 400, 200, this.text));
		}

		this.Update();
		this.GUI();
	};

	this.Update = function(){
		if (!Application.GamePaused) {
			for (var i = 0; i < this.gameObjects.length; i++) {
				this.gameObjects[i].Start();
			}
		}
	};

	this.GUI = function(){
		if (Application.debug) {
			Debug.DebugScene();
		}
	};

	this.Awake();
}