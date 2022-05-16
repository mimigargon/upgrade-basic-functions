const numbers = [12, 21, 38, 5, 45, 37, 6];
console.log(numbers.length);
function average(numbers) {
  let sum = 0;
  numbers.forEach (function(number){
      sum += number; 
      

  })
  return sum;
}
let sum = average(numbers);
console.log(sum / 7);
