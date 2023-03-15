function max (number) {
    let max = 0;
    if (number.length !==0){
        for (let i = 0; i < number.length; i=i+1){
           if (number[i]> max){
               max = number[i];
      }
          
    }
    return max;
    
    }
     if (number = []) {
       return undefined
    }
    } 
    
    // escribe la función max acá
    
    console.log(max([1, 3, 2])) // 3
    console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
    console.log(max([])) // undefined