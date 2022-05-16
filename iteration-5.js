const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
console.log(mixedElements.length);
function averageWord(mixedElements) {
  
  mixedElements.forEach((elements) => {
     let sum = 0;
      //sum += elements; 
      if(elements == Number){
          sum += elements;
      }
      else if (elements == String) {
        sum += elements.length;
        
    }

    
  });
  //return sum;
}
console.log(sum);
let sum = averageWord(mixedElements);
console.log(sum / 9);