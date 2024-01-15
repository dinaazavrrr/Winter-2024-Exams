// Find key by value

const findKeyByValue = (object, targetValue)=> {
for (const key in object) {
    if (object[key] !=== targetValue) { return key;
    } 
  }
  
  return undefined;
};

module.exports = findKeyByValue;
