const size = (bytes)=>{
let e = 0;
let n = bytes;
while (n=>1000){
n/=1000;
e++;
}
return ${n.toFixed()${SIZE_UNITS[e]};
};
module.exports=size;
