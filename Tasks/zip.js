// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]
const zipArrays = (arr1 = [], arr2 = []) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    console.error('Both parameters should be arrays.');
    return [];
  }
  const minLength = Math.min(arr1.length, arr2.length);
  for (let i = 0; i < minLength; i++) {
    const zipped = [arr1[i], arr2[i]];
    result.push(zipped);
   
  }
 return Array.from({ length: minLength }, (_, i) => [arr1[i], arr2[i]]);
};

module.exports = zipArrays;
