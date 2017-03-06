var num = 600851475143;
for(var i = 2; i < 100000; i++){
	while(num % i == 0){
		//if num is perfectly divisible by i
		num /= i;
		if(num == 1 || num == i){
			console.log(i);			
	    }
	}
}