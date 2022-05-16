const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
console.log(mixedElements.length);
function averageWord(param) {
   let sum = 0;

   for (const para of param) {
     typeof(para) == 'number'
     ? sum = sum + para
     : sum = sum + para.length
   }

   return sum;
  }

let sum = averageWord(mixedElements);
console.log(sum / 9);