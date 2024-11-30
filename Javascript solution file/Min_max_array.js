
function find_min_max(array){
    let min= array[0];
    let max=array[0];
    for (let count=0; count<array[0]; count++){
    
        if(min>array[count]){
      min = array[count]
      }
      if(max<array[count]){
      max= array[count]
      }
      
    }
    return [min,max];
    }
    let output = find_min_max([9,7,6,3,2,1])
    console.log(output);