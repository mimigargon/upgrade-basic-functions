const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

  let repeated = [];

  function repeatCounter() {
      counterWords.forEach(function(word) {
          repeated[word] = (repeated[word] || 0) + 1;
      })
  }
  repeatCounter();
  console.log(repeated);