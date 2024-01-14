const size = (bytes)=> {
  if (bytes === 0) return '0' + SIZE_UNITS[0];
    const exp = Math.floor(Math.log(bytes) / Math.log(1000));
const value = Math.round(bytes / 1000**exp);
    const unit =SIZE_UNITS[exp];
   return value.toString()+ ' ' +unit;
};

module.exports = size;
