$(document).ready(function(){
	$(Btn).on("click",clickButton)
})

function clickButton()
{
	$(this).prop("value","stop");
	$(this).removeClass("btn-success");
	$(this).addClass("btn-danger");
}