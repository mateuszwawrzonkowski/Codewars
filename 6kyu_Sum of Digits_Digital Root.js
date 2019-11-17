function digital_root(n) {
let result = 0;
let table = Array.from(String(n), Number);

  for(let i = 0; i < table.length; i++){
      if(table.length > 2){
        result = table.reduce((p,c) => {return p + c })
        table = Array.from(String(result), Number);
      }else{
        result = table.reduce((p,c) => {return p + c });
      }
  }
  return result;
}