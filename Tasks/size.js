const size=(n,e=0)=>
(n<1000?`${n.toFixed()}${SIZE_UNITS[e]}`:size(n/1000,++e));
module.exports=size;
