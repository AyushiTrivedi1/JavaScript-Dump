function factorial(n){
    let mul=1;

for(let count=n; count>0; count--){

mul=mul*count;


}
return mul;
}
let f=factorial(5)
console.log(f);