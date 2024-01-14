const diff = (object1, object2) => {
  for (const attributeName in object1) {
    object1[attributeName] = object1[attributeName];
  }
  if (object1 in object2) return false;
  for (attributeName in object2) {
    object1[attributeName] = object2[attributeName];
    delete object1[attributeName];
  }
  return object1;
});

module.exports = diff;
