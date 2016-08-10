
for (var i = 0; i < data.length; i++) {
	if(data[i] === undefined){
		console.log("не определено");
	}
	
	 else if(data[i] === null){
		console.log("Не указано");
	}
	console.log("data[" + i + "]" + "=" +data[i]);
}