
var Zombie = function(name, $line){

	var $zombie = $("<div></div>");
	var position = 0;

	$zombie.addClass("zombie " + name);
	$zombie.appendTo($line);

	this.move = function(speed){
		position += speed;
		$zombie.css("right", position + "px");
	}

	this.die = function(){
		$zombie.remove();
	}
}