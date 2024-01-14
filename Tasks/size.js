const sizeToString = (value, unit) =>`${value} ${SIZE_UNITS[unit]}`;
const size = (bytes)=> {
  if (bytes === 0) return sizeToString(bytes,0);
    const exp = Math.floor(Math.log(bytes) / Math.log(1000));
const value = Math.round(bytes / 1000**exp);
   
   return sizeToString(value,exp);
};

module.exports = size;
