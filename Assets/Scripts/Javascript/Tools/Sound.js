function Sound(path, currentTime = 0)
{
	this.path = path;

	this.audio = new Audio();	
	this.audio.src = path;
	this.audio.currentTime = currentTime;

	this.isPlaying = false;

	this.Play = function() {
		if (!this.isPlaying) {
			this.isPlaying = true;

			this.audio.play();

		} else {
			if (this.audio.currentTime == this.audio.duration)
			{
				this.isPlaying = false;
			}	
		}
	}
}