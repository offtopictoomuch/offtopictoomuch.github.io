var a = 1;
var b = 1;
var holder = 0;
var total = 0;
while(holder < 4000000){
	holder = a + b;
	a = b;
	b = holder;
	if(b % 2 === 0){
		total += b;
	}
}
console.log(total);