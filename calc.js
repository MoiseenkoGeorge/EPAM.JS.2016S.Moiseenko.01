for (var i = 0; i < data.length; i++) {
	if(typeof data[i] != "number" && typeof data[i] != "string"){
		continue;
	}
	if(data[i] == 0){
		data[i] = +data[i] + 10;
		continue;
	}
	if(data[i] > 100){
		data[i] = +data[i] - 100;
		continue;
	}
	if(data[i] < 100){
		data[i] = +data[i].valueOf() + 100;
		continue;
	}
}