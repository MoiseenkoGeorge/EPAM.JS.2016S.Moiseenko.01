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

	function generateZombie(){//генерация нового зомби
		var lines = $("#field .field-line");
		var line = lines[random(0,lines.length)];
		var zombie = new zombies[random(0,zombies.length)](line, 1);//создаем нового зомби
		zombieArray.push(zombie);//добавляем нового зомби в массив
	}

	function explode()
	{
		for (var i = 0; i < zombieArray.length; i++) {
			if(!zombieArray[i].injure(15)){//всем зомби минус 15 едениц здоровья
				zombieArray[i].die();
				zombieArray.splice(i,1);
			}
		}
	}

	function slowUp()
	{
		for (var i = 0; i < zombieArray.length; i++) {
			var zombie = zombieArray[i];
		    var speed = zombieArray[i].speed;// сохраняем текущую скорость зомби
			zombie.speed = zombieArray[i].minSpeed;// устанавливаем минимальную скорость для зомби, берем ее у родителя
			setTimeout(function(){
				zombie.speed = speed;//через 10 секунд востанавливаем скорость зомби
			},10000)
		}
	}

	function growOld()
	{
		var counter = 0;
		var growOldId = setInterval(function(){//устанавливаем интервалб при котором будем отнимать у всех зомби 1 еденицу здоровья
			for (var i = 0; i < zombieArray.length; i++) {
				if(!zombieArray[i].injure(1)){//наносим урон
					zombieArray[i].die();//если здоровье = 0, удаляем зомби
					zombieArray.splice(i,1);
				}
			}
			counter++;
			if(counter == 10)//полсе 10 секунд прекращем выполнение данной функции
				clearTimeout(growOldId);
		},1000)
	}

	function end()
	{
		zombieArray = [];//очищаем массив зомби и удаляем их
		$(".game-over").css("display","block");
		$(".zombie").remove();
	}
});