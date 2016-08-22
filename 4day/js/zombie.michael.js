Zombie.Michael = function($line){
	Zombie.call(this, "michael", $line);
	this.fullHealth = 70;
	this.health = this.fullHealth;
	this.speed = 2;
}

Zombie.Michael.prototype = Zombie;//наследуемся от зомби