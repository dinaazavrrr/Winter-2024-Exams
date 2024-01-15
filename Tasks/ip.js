// Split string by the first occurrence of separator

const parseIP = (input) => {
  a = [];
 if (input === '') return;
const parts = input.split('.');
   if (parts.length !== 4) return;
    j = 0;
    for (const b of B) {
      a[j] = parseInt(b);
      if (isNaN(a[j])) return;
      j++;
    }
  }
  return a;
};

module.exports = Parseip;
