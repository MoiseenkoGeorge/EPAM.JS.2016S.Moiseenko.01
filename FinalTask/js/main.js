$(function(){
	$("#Btn").on("click",clickButton)
    var fruitId;
    var bombId;
    var gameStart = false;
	var items = ["cheese","orange","cherry","pumpkin","bomb"]

	function random(min, max){
		return Math.floor((Math.random() * max) + min);
	}

	function clickButton(){
		var $this = $(this);
		if($this.hasClass("btn-success")){
			$this.prop("value","stop");
			$this.removeClass("btn-success");
			$this.addClass("btn-danger");
			$(".field .item").remove(); //удаляеям все элементы в поле
			$(".item-container .score").each(function(){ //сбрасываем все счетчики
				$(this).text("-");
			});
			gameStart = true;
			fruitId = setInterval(generateFruits,500);
			bombId = setInterval(generateBomb,5000);
		}
		else{
			gameStart = false;
			$this.prop("value","start");
			$this.removeClass("btn-danger");
			$this.addClass("btn-success");
			clearTimeout(fruitId);
			clearTimeout(bombId);
		}
	}

	function clickItem(){
		$this = $(this);
		var cls = $this.attr("class").split(' ').pop();
		if(cls != "bomb"){
			$this.stop();
			var $container = $(".item-container").has("." + cls);
			var $score = $container.find(".score");
			$score.text(($score.text() == "-" ? 0 : +$score.text()) + 1);
			var parent = $container.find("." + cls).offset();
			var child = $this.offset();
			$this.animate({
				top: "+=" + (parent.top - child.top) + "px",
				left: "+=" + (parent.left - child.left) + "px"
			}, 500, function(){
				$this.remove();
			})
			$container.addClass("green");//помечаем контейнер зеленым для лучшего визуального восприятия
			setTimeout(function(){// снимаем зеленый цвет
				$container.removeClass("green");
			},250);
		}
	}

	function generateFruits(){ // генерация фруктов на экране
		var $obj = $("<div></div>");
		$obj.addClass("item " + items[random(0,4)]);
		$obj.css("left",random(0,500));//случайный отступ слева и
		$obj.css("top", random(0,500));//сверху
		$(".field").append($obj);
		$obj.on("click",clickItem);
		$obj.fadeIn(1700,function(){
			if(gameStart)
				this.remove();
		});
	}

	function generateBomb(){ //генерация бомб на экране
		var $obj = $("<div></div>");
		$obj.addClass("item bomb");
		$obj.css("left",random(0,500));//случайный отступ слева и
		$obj.css("top", random(0,500));//сверху
		$(".field").append($obj);
		$obj.on("click",clickItem);
		$obj.fadeIn(2000,function(){
			if(gameStart){
				subtractPoints(10);
				this.remove();
			}
		});
	}

	function subtractPoints(points)
	{
		var $container = $(".item-container").has("." + items[random(0,4)]);
		var $score = $container.find(".score"); //выбираем score для случайно выбранного элемента
		$score.text($score.text() == "-" || $score.text() - points <= 0 ? "-" : $score.text() - points);
		$container.addClass("red");//помечаем контейнер красным для лчушего визуального восприятия
		setTimeout(function(){// снимаем красный цвет
			$container.removeClass("red");
		},250)
	}
});