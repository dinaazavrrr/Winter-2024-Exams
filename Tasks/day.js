const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

_parse_day_ = (s) => {
  
  for (let i = 0; i < day.length; i++) {
    if (s.startsWith(day[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};
