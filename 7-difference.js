const diff = (object1, object2) => { 
const result = {};
  for (const name of Object.keys(object1)) {
const value = object1[name];
    if (object1[name] ! == value) {
result[name] = value;}
  }
  return result;
};

module.exports = diff;
