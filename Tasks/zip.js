// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]

const zipArrays = function (arr1 = [], arr2 = []) {
  const result = [];
  let iindex = 0;
for (const val2 of arr2) {
    const zipped = [arr1[index++], val2];
   result.push(zipped);
   
  }
  return result.filter(item => item[0] !== undefined);
};

module.exports = zipArrays;
