function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let countSheep = 0;
  for( let i = 0; i<arrayOfSheep.length; i++)
  {
    if(arrayOfSheep[i] == true){
      countSheep++;
    }
  }
  return countSheep;
}