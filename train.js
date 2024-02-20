
//Masala 3
// class Shop {
//   constructor(non, cola, lagmon) {
//     this.non = non;
//     this.cola = cola;
//     this.lagmon = lagmon;
//   }

//   qabul(type, num) {
//     if (type === "non") {
//       this.non = this.non + num;
//     } else if (type === "cola") {
//       this.cola = this.cola + num;
//     } else {
//       this.lagmon = this.lagmon + num;
//     }
//   }
//   sotish(type, num) {
//     if (type === "non") {
//       this.non = this.non - num;
//     } else if (type === "cola") {
//       this.cola = this.cola - num;
//     } else {
//       this.lagmon = this.lagmon - num;
//     }
//   }
//   qoldiq() {
//     return `hozir ${new Date().getHours()} : ${new Date().getMinutes()} da ${
//       this.non
//     } ta non, ${this.lagmon} ta lagmon va ${this.cola} ta cola mavjud!`;
//   }
// }





//Masala 4

// Task - E
function solution(str) {
  let answer = "";
  for (let i = str.length - 1; i >= 0; i--) {
    answer += str[i];
  }
  return answer;
}

console.log(solution("hello"));