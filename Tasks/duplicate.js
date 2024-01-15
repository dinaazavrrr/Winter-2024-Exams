// Return an array without duplicates

const duplicate = (value, N) => N <= 0 ? [] : Array(N).fill(value); {
  if (N <= 0) {return [];}
  else {
    let res = [];
    for (let i = 0; i < N; i++) {
      res[i] = value;
    }
    return res;
  }
};

module.exports = duplicate;
