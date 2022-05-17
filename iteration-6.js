const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

  console.log(duplicates.length);
  duplicates.sort();
  console.log(duplicates);

  function removeDuplicates() {
      for (let food of duplicates) {
        if (food.includes ('pizza') || food.includes('pasta')) {
            duplicates.splice(5,1)
        }
      }    
  }
  removeDuplicates();
  console.log(duplicates);