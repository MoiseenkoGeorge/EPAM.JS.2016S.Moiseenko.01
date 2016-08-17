$(function()
{
	$("#Generate").on("click", generate);
	$("#SetColor").on("click", setColor);
	$("#Reset").on("click", reset);

	function random(min, max){
		return Math.floor((Math.random() * max) + min);
	}

	function getColor(number){
		if(number > 75)
			return "red";
		if (number > 50)
			return "orange";
		if(number > 25)
			return "green";
		return "white";
	}

	function generate(){
		if(!$(this).hasClass("disabled")){
			for (var i = 0; i < 50; i++){
				var $obj = $("<div></div>");
				$obj.text(random(0,100));
				$obj.addClass("item");
				$(".field").append($obj);
			}
			$("#Reset").removeClass("disabled");
			$("#SetColor").removeClass("disabled");
			$(this).addClass("disabled");
		}
	}

	function setColor(){
		if(!$(this).hasClass("disabled")){
			$(".item").each(function(){
				$(this).addClass(getColor($(this).text()));
			})
			$(this).addClass("disabled");
		}
	}

	function reset(){
		if(!$(this).hasClass("disabled")){
			$(".item").remove();
			$("#Generate").removeClass("disabled");
			$("#SetColor").addClass("disabled");
			$(this).addClass("disabled");
		}
	}

})
