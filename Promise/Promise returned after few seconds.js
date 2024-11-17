function waitForSeconds(){
	return new Promise((resolve, reject)=>{
		setTimeout(() =>{
    resolve('Success');
  	}, 5000);
	});
}
waitForSeconds()
.then((message)=>{
	console.log('Order successful'+ message);
});
