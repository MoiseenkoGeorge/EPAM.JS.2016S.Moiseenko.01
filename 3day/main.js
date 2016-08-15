$(document).ready(function()
{
	$("#Generate").on("click", generate);
	$("#SetColor").on("click", setColor);
	$("#Reset").on("click", reset);
})

function random(min, max) {
	return Math.floor((Math.random() * max) + min);
}

function getColor(number)
{
	if(number > 75)
		return "#f44336";
	if (number > 50)
		return "#ff9800";
	if(number > 25)
		return "#4caf50";
	return "white";
}

function generate()
{
	for (var i = 0; i < 50; i++) {
		var $obj = $("<div></div>");
		$obj.text(random(0,100));
		$obj.addClass("item");
		$(".field").append($obj);
	}
	$("#Reset").prop("disabled",false);
	$("#SetColor").prop("disabled",false);
	$(this).prop("disabled",true);
}

function setColor()
{
	$(".item").each(function()
	{
		$(this).css("background-color", getColor($(this).text()));
	})
	$(this).prop("disabled",true);
}

function reset(){
	$(".item").remove();
	$("#Generate").prop("disabled",false);
	$("#SetColor").prop("disabled",true);
	$(this).prop("disabled",true);
}
