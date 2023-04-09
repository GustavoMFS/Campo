function isSubsequence(array1, array2) {
    let i = 0;
    let j = 0;

    
    while (i < array1.length && j < array2.length) {
      if (array1[i] === array2[j]) {
        j++;
      }
      i++;
    }
    
    return j === array2.length;
  }

let array1 = [1,2,3,4]
let array2 = [1,3,4]

console.log(isSubsequence(array1, array2))