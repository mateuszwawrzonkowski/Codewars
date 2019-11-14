function even_or_odd(number) {
  if (number%2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

//shorter version
function even_or_odd(number) {
  if (number%2 == 0) return "Even";
  else return "Odd";
}

//or
function even_or_odd(number) {
 let Number = (number%2 === 0) ? "Even" : "Odd";
 return Number;
}

