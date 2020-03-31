const overLapping = (arr = [10, 20, 4, 14, 4]) => {
  // keep a count 
  let arr1 = [], arr2 = []
  for(let i= arr[0]; i <= arr[1]; i++){
    arr1.push(i)
  }
   for(let i= arr[2]; i <= arr[3]; i++){
    arr2.push(i)
  }
  return arr1.filter(item=> arr2.indexOf(item)>-1).length >= arr[4]
};

console.log(`Is Overlappin Exist ${overLapping()}`,);
