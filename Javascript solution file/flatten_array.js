let array=[[2,7,8],[7], [1,2]];
function flatten_array(a){
let sum=[];

 for(let count=0; count<a.length; count++){
 sum=sum.concat(a[count]);
 
 }
 console.log(sum);
}

flatten_array(array);