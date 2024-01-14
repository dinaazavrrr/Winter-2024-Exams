const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

parseDay= (s) => {
const result=parseDay('Mon');
  
  for (let i = 0; i < day.length; i++) {
    if (s.startsWith(day[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
console.log(result);
};
