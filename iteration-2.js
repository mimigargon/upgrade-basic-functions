const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.' , 'Doctor Strange'];

let myAvenger = "";

function findLongestWord() {
    for (const avenger of avengers) {
        console.log(avenger.length);
        if (avenger.length > myAvenger.length) {
            myAvenger = avenger;
        }
        
    }


    
}
findLongestWord();
console.log(myAvenger);