// Split string by the first occurrence of separator

const parseIP = (input) => {
  a = [];
 if (input === '') return;
const parts = input.split('.');
   if (parts.length !== 4) return;
  const result = [];
    for (let i = 0; i < parts.length; i++) {
    const parsed = parseInt(parts[i]);
    if (isNaN(parsed)) return;
    result.push(parsed);
  }
  return result;
};

module.exports = parseIP;
