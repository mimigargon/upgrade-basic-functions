const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(numbers) {
    let suma = 0;
    numbers.forEach(function(number){
        suma += number;
    })
    return suma; 
}

let suma = sumAll(numbers);
console.log(suma);
