// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

const zipArrays = function (arr1 = [], arr2 = []) {
  const result = [];
  const minLength = Math.min(arr1.length, arr2.length);
  for (let i = 0; i < minLength; i++) {
    const zipped = [arr1[i], arr2[i]];
    result.push(zipped);
   
  }
  return result ;
};

module.exports = zipArrays;
