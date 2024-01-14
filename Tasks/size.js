const size = (bytes)=> {
  const digits=bytes.toString().length;
    const exp = Math.floor((digits-1) / 3);
const value = (bytes / 1000**exp).toFixed();
   return `${ value}${SIZE_UNITS[exp]};
};

module.exports = size;
