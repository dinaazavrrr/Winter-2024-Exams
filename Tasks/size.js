const size = (bytes)=> {
  if (bytes === 0) return '0 byte';
  else {
    const exp = Math.floor(Math.log(bytes) / Math.log(1000));
const value = Math.round(bytes / 1000**exp);
    let unit =' byte';
    if (exp == 1) unit = ' kb';
    if (exp == 2) unit = ' mb';
    if (exp == 3) unit = ' gb';
   return value.toString()+unit;
};

module.exports = size;
