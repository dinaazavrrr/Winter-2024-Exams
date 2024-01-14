const size = (bytes)=> {
  if (bytes === 0) return '0 byte';
    const exp = Math.floor(Math.log(bytes) / Math.log(1000));
const value = Math.round(bytes / 1000**exp);
    const unit = exp ===0? 'byte' : SIZE_UNITS[exp-1];
   return value.toString()+ ' ' +unit;
};

module.exports = size;
