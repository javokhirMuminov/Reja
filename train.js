
//Masala 2
function sonlar(str) {
  let regex = /[^0-9]/g;
  return str.replace(regex, "").length;
}