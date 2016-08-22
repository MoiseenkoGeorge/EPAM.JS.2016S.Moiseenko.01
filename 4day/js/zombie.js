Zombie = function(name, $line){

	var $health = $("<div class='health'></div>");
	var $healthBar = $("<div class='health-bar'></div>");
	$health.append($healthBar);
	var $zombie = $("<div></div>");
	var position = 0;

	$zombie.addClass("zombie " + name);
	$zombie.appendTo($line);
	$zombie.append($health);

	this.fullHealth = 50;
	this.health = this.fullHealth;
	this.minSpeed = 1;

	this.move = function(speed){
		position += speed;
		if(position > 600)
			return false;
		$zombie.css("right", position + "px");
		return true;
	}

	this.injure = function(damage){
		if((this.health - damage) > 0){
			this.health -= damage;
			this.update();
			return true;
		}
		return false;
	}

	this.update = function()
	{
		$healthBar.css("width",(this.health / this.fullHealth)*100 + "%");
	}

	this.die = function(){
		$zombie.remove();
	}
}