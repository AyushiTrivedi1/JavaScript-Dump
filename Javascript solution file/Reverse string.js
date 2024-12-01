function reverse_string(b){
    let r=[...b];
    console.log(b);
    let new_array=[];
    
    
    
    
    let count;
    for(let count=r.length-1; count>=0; count--){
    new_array.push(r[count]);
    
    
    }
    console.log(new_array);
    let new_string=new_array.toString();
    new_string=new_array.join("");
    console.log(new_string);
    
    }
    reverse_string("adivardhan");