var canvas = document.getElementById("canvas");

var ctx = canvas.getContext("2d");

var Application = {
	loadedScene: null,
	gamePaused: false,
	debug: true
}

var Scenes = {};