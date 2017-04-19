Math.Random = {};

Math.Random.RangeInt = function(min, max, inclusive = false)
{
	let minValue = min < max ? min : max;
	let maxValue = max > min ? max : min;

	if (!inclusive) {
		minValue--;
		maxValue++;
	}

	return Math.floor((Math.random() * maxValue - minValue ) + minValue);
};

Math.Random.RangeFloat = function(min, max, inclusive = false)
{
	let minValue = min < max ? min : max;
	let maxValue = max > min ? max : min;

	if (inclusive) {
		return minValue + Math.floor(Math.random() * (maxValue - minValue));
	} else {
		return (Math.random() * (maxValue - minValue) + minValue);
	}
};

Math.Random.InArray = function(array)
{
	let index = Math.Random.RangeInt(0, array.length-1);

	return array[index];
};

Math.Random.InScreen = function(canvas) //In canvas
{
	let coord =
	{
		x : Math.Random.RangeInt(0, canvas.width),
		y : Math.Random.RangeInt(0, canvas.height)
	}

	return coord;
};

Math.Random.InCircle = function(radius) //Cercle
{
	let angle = Math.random()*Math.PI*2;

	let coord =
	{
		x: Math.cos(angle)*radius,
		y: Math.sin(angle)*radius
	}

	return coord;
};

Math.Random.InDisk = function(radius) //Cercle surface
{
	let randInCircle =  Math.Random.InCircle(radius);

	let coord =
	{
		x: Math.Random.RangeInt(0, randInCircle.x, true),
		y: Math.Random.RangeInt(0, randInCircle.y, true)
	}

	return coord;
};

Math.Random.InArea = function(width, height)
{
	let coord =
	{
		x : Math.Random.RangeInt(0, width),
		y : Math.Random.RangeInt(0, height)
	}

	return coord;
};

Math.Random.ColorRGB = function()
{
	let color =
	{
		R: Math.Random.RangeInt(0, 255, true),
		G: Math.Random.RangeInt(0, 255, true),
		B: Math.Random.RangeInt(0, 255, true)
	}

	return color;
};

Math.Random.ColorRGBA = function()
{
	let color = Math.Random.ColorRGB();
	color.alpha = Math.Random.RangeFloat(0, 1, true).toFixed(2);

	return color;
};

Math.Random.ColorHEX = function()
{
	let array = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
	let color = '#';

	for (let i = 0; i < 6; i++)
	{
		color += Math.Random.InArray(array);
	}

	return color;
};

Math.Random.AngleRadian = function()
{
	return Math.random()*Math.PI*2;
};

Math.Random.AngleDegree = function()
{
	return Math.Random.AngleRadian() * (180 / Math.PI);
};
