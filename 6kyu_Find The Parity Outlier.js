function findOutlier(integers){
   const oddTable = [];
   const evenTable = [];
   
   for(let i = 0; i < integers.length; i++)
   {
       if(integers[i] % 2 === 0) evenTable.push(integers[i]);
       else oddTable.push(integers[i]);
   }
  if(evenTable.length > oddTable.length)return oddTable[0];
  else return evenTable[0];
}