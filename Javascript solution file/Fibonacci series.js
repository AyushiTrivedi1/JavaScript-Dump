function fibonacci(n) {
    let prev = 0
    let next = 1
    let sum
    let fibo_array = []
    if (n == 0) {
      return fibo_array;
    }
    sum = prev + next
    
    fibo_array.push(prev)
    if (n == 1) {
      return prev;
    }
    fibo_array.push(next)
    if (n == 2) {
      return next;
    }
    if(n0){
        return []
    }
  
    fibo_array.push(sum)
    for (let count = 3; count  n; count++) {
      prev = next
      next = sum
      sum = prev + next
      fibo_array.push(sum)
    }
    return fibo_array
  }
  new_array = fibonacci(15)
  console.log(new_array)
  