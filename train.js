
//Masala 2
function sonlar(son) {
  let count = 0;
  const sonlar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  for (let i = 0; i < son.length; i++) {
    if (sonlar.indexOf(son[i]) !== -1) {
      count++;
    } else {
      false;
    }
  }
  return count;
}
console.log(sonlar("1a1a5a1a1"));