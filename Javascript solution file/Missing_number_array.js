
function missing_number(array){
	let count=0;
  let a;
  
  for(let count=0; countarray.length-1; count++){
  	if(array[count+1]-array[count] != 1){
    
    a=array[count]+1;
    
    }
    
  }
  return a;
  
}
let b=missing_number([1,3,4,5,6,7]);
console.log(b);


