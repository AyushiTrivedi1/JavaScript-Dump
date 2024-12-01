function reverse_string(b) {
    let r = [...b];
    let new_array = [];
  
    let count
    for (let count = r.length - 1; count >= 0; count--) {
      new_array.push(r[count])
    }
    let new_string = new_array.toString()
    new_string = new_array.join("")
    return new_string;
  }
  reverse_string("adivardhan")
  
  function name(name1) {
    if (name1 == reverse_string(name1)) {
      console.log("It is palindrome")
    } else {
      console.log("Not a palindrome")
    }
  }
  name("malayalam")