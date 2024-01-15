const inputArray = [1, 2, 3, 1, 2, 4, 5];
const result = DISTINCT(inputArray);

const distinct= (data) => {
  A = new Set();
  w = 0;
  data.forEach((a) => {
    if (A.has(a)) {
      delete data[w];
    } else {
      A.add(a);
    }
    w++;
  });console.log(result); 
  return data.filter
  (x => typeof x === 'number');
};

module.exports = DISTINCT;
