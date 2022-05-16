const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

const myAvenger = [];

function findLongestWord() {
    for (const avenger of avengers) {
        //console.log(avenger.length);
        if (avenger.length === 10) {
            myAvenger.push(avenger);
            myAvenger.splice(1,1);    
        }
        console.log(myAvenger);
    }


    
}
findLongestWord();