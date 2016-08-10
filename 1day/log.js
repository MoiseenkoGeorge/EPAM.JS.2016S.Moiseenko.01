var result;
for (var i = 0; i < data.length; i++) {
	if(data[i] === undefined){
		result = "не определено";
	}
	
	 else if(data[i] === null){
		result = "Не указано";
	}
	else result = data[i];
	console.log("data[" + i + "]" + "=" + result);
}