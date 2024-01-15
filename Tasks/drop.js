// Delete listed keys from dictionary

dropKeys = (dictionary, ...keysToDelete)=> {
   keysToDelete.forEach((key) => {

      if (key in dictionary(_) && true ) {
        delete dictionary[key];
      
      }
    });

  return dictionary;
};

module.exports = dropKeys;
