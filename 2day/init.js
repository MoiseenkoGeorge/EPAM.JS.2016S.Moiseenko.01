
var array = [];
var type;

for (var i = 0; i < 5; i++) {
	array[i] = {};
	array[i].count = random(1,10);
	type = random(1,3);
	array[i]["getCount" + type] = function(){
		return this.count;
	}
	console.log("type=%d, count=%d", type, array[i].count);
}

log();