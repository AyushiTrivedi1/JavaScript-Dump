function RandomNumber(a){
	return new Promise((resolve, reject) => {
		if (a>5){
			reject('Number rejected because greater than 5');
		}
  	else if(a<=5){
  		resolve('Number resolved because smaller or equals 5');
  	}
	})
}

RandomNumber(2)
.then((message)=>{
	console.log('Success: '+ message);
})
.catch((message)=>{
	console.log('Unsuccessful: '+ message);
});