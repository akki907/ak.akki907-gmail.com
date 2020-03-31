const isIsomorphic = (first, second) => {
  if (typeof first !== "string" || typeof second !== "string") return false;

  // Check if the same length
  if (first.length !== second.length) return false;

  const letterMap = {};

  for (let i = 0; i < first.length; i++) {
    let firstLetter = first[i]
    let  seacondLetter = second[i]
    if (letterMap[firstLetter] === undefined) {
      letterMap[firstLetter] = seacondLetter;
    } else if (letterMap[firstLetter] !== seacondLetter) {
      return false;
    }
  }
  return true;
};

console.log(isIsomorphic("paper", 'title')) //true
console.log(isIsomorphic("egg", 'sad')) // false
console.log(isIsomorphic("dgg", 'add')) // true