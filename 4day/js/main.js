$(function()
{
	var zombies = [Zombie.Michael,Zombie.Strong];
	
	$("#btnGenerate").on("click",generateZombie);

	function random(min, max){
		return Math.floor((Math.random() * max) + min);
	}

	function generateZombie(){
		var lines = $("#field .field-line");
		var line = lines[random(0,lines.length)];
		var zombie = new zombies[random(0,zombies.length)](line, 1);
		setInterval(function(){
			zombie.move(1);
		},100);
	}
});