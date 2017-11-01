function throwit() {
	throw new Error('');
}

function catchit() {
	try {
		throwit();
	} catch(e) {
		console.log(e.stack);
	}
}
catchit();

function* fib(max) {
	var t,a=0,b=1,n=1;
	while(n<max) {
		yield a;
		t = a+b;
		a = b;
		b = t;
		n++;
	}
	return a;
}
var f = fib(10);
for(var x of f){
	console.log(x);
}

function* next_id(){
	var i=0;
	while(true){
		yield i++;
	}	
	return i;
}
var f = next_id();
console.log(f.next());
console.log(f.next());
console.log(f.next());

























