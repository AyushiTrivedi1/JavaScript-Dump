let p=new Promise((resolve, reject)=>{
    let a= 4+3;
        if (a==8){
        resolve('answer is right')
        }
      else{
      reject('answer is wrong')
      }
    
    });
    
    p.then((message)=>{
    console.log('Then means resolve hence ' + message)
    }).catch((message)=>{
    console.log('catch means reject hence '+ message)
    })
    