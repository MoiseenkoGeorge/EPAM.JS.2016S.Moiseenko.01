
var array = [];
var type;

function getCount(){
	return this.count;
}

for (var i = 0; i < 5; i++) {
	array[i] = {};
	array[i].count = random(1,10);
	switch (random(1,3)){
		case 1:
			array[i].getCount1 = getCount;
			type = 1;
			break;
		case 2:
			array[i].getCount2 = getCount;
			type = 2;
			break;
		case 3:
			array[i].getCount2 = getCount;
			type = 3;
			break;
	}
	console.log("type=" + type + ", count=" + array[i].count);
}