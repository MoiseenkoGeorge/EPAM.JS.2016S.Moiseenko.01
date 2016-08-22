$(function()
{
	var zombies = [Zombie.Michael,Zombie.Strong];
	
	var zombieArray = [];

	$("#btnGenerate").on("click",generateZombie);
	$("#btnExplode").on("click",explode);
	$("#btnSlowUp").on("click",slowUp);
	$("#btnGrowOld").on("click",growOld);

	var id = setInterval(function(){
		for (var i = 0; i < zombieArray.length; i++){
			if(!zombieArray[i].move(zombieArray[i].speed)){
				end();
				clearTimeout(id);
				return;
			}
		}
	},100);

	function random(min, max){
		return Math.floor((Math.random() * max) + min);
	}

	function generateZombie(){
		var lines = $("#field .field-line");
		var line = lines[random(0,lines.length)];
		var zombie = new zombies[random(0,zombies.length)](line, 1);
		zombieArray.push(zombie);
	}

	function explode()
	{
		for (var i = 0; i < zombieArray.length; i++) {
			if(!zombieArray[i].injure(15)){
				zombieArray[i].die();
				zombieArray.splice(i,1);
			}
		}
	}

	function slowUp()
	{
		for (var i = 0; i < zombieArray.length; i++) {
			var zombie = zombieArray[i];
		    var speed = zombieArray[i].speed;
			zombie.speed = zombieArray[i].minSpeed;
			setTimeout(function(){
				zombie.speed = speed;
			},10000)
		}
	}

	function growOld()
	{
		var counter = 0;
		var growOldId = setInterval(function(){
			for (var i = 0; i < zombieArray.length; i++) {
				if(!zombieArray[i].injure(1)){
					zombieArray[i].die();
					zombieArray.splice(i,1);
				}
			}
			counter++;
			if(counter == 10)
				clearTimeout(growOldId);
				return;
		},1000)
	}

	function end()
	{
		zombieArray = [];
		$(".game-over").css("display","block");
		$(".zombie").remove();
	}
});