
for (var i = 0; i < data.length; i++) {
	if(data[i] === undefined){
		console.log("не определено");
		continue;
	}
	if(data[i] === null){
		console.log("Не указано");
		continue;
	}
	console.log("data[" + i + "]" + "=" +data[i]);
}