const inputDay = 'Wednesday';
const index = parseDay(inputDay.toLowerCase());

if (index !== -1) {
  console.log(${inputDay} is day number ${index} of the week.);
} else {
  console.log(${inputDay} is not a valid day.);
}
