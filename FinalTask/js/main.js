$(function(){
	$("#Btn").on("click",clickButton)

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
	}
	else{
		$this.prop("value","start");
		$this.removeClass("btn-danger");
		$this.addClass("btn-success");
	}

	function start(){
		while(true){
			var $obj = $("<div></div>");
		}
	}
}
});