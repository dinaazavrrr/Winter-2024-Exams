const diff = (object1, object2) => {
  for (const attributeName in object2) {
    delete object1[attributeName];
  }
  return object1;
});

module.exports = diff;
