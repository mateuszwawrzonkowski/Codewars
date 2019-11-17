var moveZeros = function (arr) { 
  const filterZero = arr.filter(index => index !== 0);
  const filterNum = arr.filter(index => index ===0);

  return filterZero.concat(filterNum);
}