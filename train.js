function solution(str) {
  const charSet = new Set();

  for (let char of str) {
    if (charSet.has(char)) {
      return true;
    }
    charSet.add(char);
  }

  return false;
}
console.log(solution("hello"));