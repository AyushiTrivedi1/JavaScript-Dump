function get_longest_word_in_sentence(mySentence){
    let array= mySentence.split(" ");
    let max_word="";
    
    console.log(array);
    let count=0;
    
    for(let count=0; count<array.length; count++){
    
        if(array[count].length>max_word.length){
            max_word=array[count];
    }
    
    }
        return max_word;
    }
    
    console.log("the longest word is: "+get_longest_word_in_sentence('This is a sentence. Find the longest word here.'))