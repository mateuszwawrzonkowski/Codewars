//First solution
function highAndLow(numbers){

const numbersInt = numbers.split(' ').map(Number);
console.log(numbersInt)

  let low = numbersInt[0];
  let high = numbersInt[0];
  
  for(let i = 0; i < numbersInt.length; i++){
    if(high <= numbersInt[i] ){
       high = numbersInt[i];
     }
  }
  
  for(let i = 0; i < numbersInt.length; i++){
    if(low >= numbersInt[i] ){
       low = numbersInt[i];
     }
  }
  return `${high} ${low}`;
}

//Second solution
function highAndLow(numbers){

  const numbersInt = numbers.split(' ').map(Number);
  
  const high = Math.max(...numbersInt);
  const low = Math.min(...numbersInt);
  
  return `${high} ${low}`;
}