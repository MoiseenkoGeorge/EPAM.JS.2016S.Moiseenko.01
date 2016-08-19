
var Zombie = function(name, $line){

	var $zombie = $("<div></div>");
	var position = 0;

	$zombie.addClass("zombie " + name);
	$zombie.appendTo($line);

	this.move = function(speed){
		position += speed;
		if(position > 600)
			return false;
		$zombie.css("right", position + "px");
		return true;
	}

	this.die = function(){
		$zombie.remove();
	}
}