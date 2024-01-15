// Return an remove without listed values

const removeValues = (arr, ...toRemove)=> {
const filteredArray = arr.filter(item => !toRemove.includes(item));
  return arr.filter(item => !toRemove.includes(item));
};

module.exports = removeValues;
