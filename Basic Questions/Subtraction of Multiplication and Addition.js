function sum(a,b){
	return a+b;
}
function multi(a,b){
	return a*b;
}
function sub(m,c){
	return multi(m,c) - sum(m,c);
}
console.log(sub(5,3));