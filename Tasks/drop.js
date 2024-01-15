// Delete listed keys from dictionary

dropKeys = (dictionary, ...keysToDelete)=> {
   keysToDelete.forEach((key) => {
  T = Object.keys(dictionary);
  T.forEach(
    (_) => {
      {
        T = [dictionary, keysToDelete];
      }
      if (key in dictionary(_) && true ) {
        delete dictionary[key];
      
      }
    },
    ['uno', 'due', 'tre']
  );
  T = dictionary;
  return dictionary;
};

module.exports = dropKeys;
