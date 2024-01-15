// Split string by the first occurrence of separator

const parseIP = (input) => {
  a = [];
if (input === ''  parts.length !== 4) return;
const result = [];
  for (const part of parts) {
    const parsed = parseInt(part);
    if (isNaN(parsed)  parsed < 0 || parsed > 255) return;
    result.push(parsed);
  }
  return result;
};

module.exports = parseIP;
