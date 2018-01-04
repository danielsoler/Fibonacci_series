var b=0
var a=1
var c=0

for(var x = 0; x < 20; x++){
	console.log(c);
	c=a+b;
	a=b;
	b=c; 
}