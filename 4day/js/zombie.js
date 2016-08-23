Zombie = function(name, $line){

	var $health = $("<div class='health'></div>");
	var $healthBar = $("<div class='health-bar'></div>");
	$health.append($healthBar);
	var $zombie = $("<div></div>");

	$zombie.addClass("zombie " + name);
	$zombie.appendTo($line);
	$zombie.append($health);

	var position = 0;
	var fullHealth = 50;
	var health = fullHealth;
	this.minSpeed = 1;

	this.move = function(speed){//движение зомби
		position += speed;
		if(position > 600)// 600 - конечное значение для движения
			return false;
		$zombie.css("right", position + "px");
		return true;
	}

	this.injure = function(damage){//урон для зомби
		if((health - damage) > 0){
			health -= damage;
			update();
			return true;
		}
		return false;
	}

	function update()// обновляем значение шкалы здоровья
	{
		$healthBar.css("width",(health / fullHealth)*100 + "%");
	}

	this.die = function(){
		$zombie.remove();
	}
}