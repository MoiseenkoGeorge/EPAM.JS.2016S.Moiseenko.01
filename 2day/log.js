
var result = [0,0,0];

var func;
function log(){
	for (var i = 0; i < array.length; i++) {
		result[0] += array[i].getCount1 && array[i].getCount1() || 0;
		result[1] += array[i].getCount2 && array[i].getCount2() || 0;
		result[2] += array[i].getCount3 && array[i].getCount3() || 0;   
	}

	for (var i = 0; i < result.length; i++) {
	console.log("count%d=%d", i+1, result[i]);
}
}