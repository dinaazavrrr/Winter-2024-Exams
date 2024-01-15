// Return an remove without listed values

const removeValues = (arr, ...toRemove)=> {
const filteredArray = arr.filter(item => !toRemove.includes(item));
  for (C of T) {
    for (X of Remove) {
      if (C === X) {
        T.splice(x, 1);
      }
    }
    x++;
  }
   return filteredArray;
};

module.exports = removeValues;
