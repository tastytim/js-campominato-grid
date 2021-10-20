function generateArray(totalCells) {
  // Creiamo array
  let array = [];
  // Compilo con i numeri che dipende dalla difficolta
  for (let i = 1; i <= totalCells; i++) {
    array.push(i);
  }

  //  la function che disordina array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // Generate random number
      let j = Math.floor(Math.random() * (i + 1));

      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  //   chiamo la function
  shuffleArray(array);

  let selected = array.slice(0, 16);
  console.log("array = " + selected);
  // ritorno Array con 16 numer random
  return selected;
}
