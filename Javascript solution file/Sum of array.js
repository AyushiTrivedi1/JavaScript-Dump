function array_addition(array){
	let sum = 0;
	for(let count=0; count<array.length; count++){
		sum=sum+array[count];
	}
	
  return sum;
}

let sum_of_array=array_addition([5,10,5]);
console.log(sum_of_array);

