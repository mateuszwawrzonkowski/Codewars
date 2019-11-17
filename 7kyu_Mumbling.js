function accum(s) {  

  const table = [...s.toLowerCase()];
  let txt = "";
  let index = 1;
  
  for(let i = 0; i < table.length; i++)
  {   
    for(let j = 0; j < index; j++){
      if(j == 0 ){
        txt += table[i].toUpperCase();
      }else{
      txt += table[i];
      }
    }
    index++;    
    if(i<table.length - 1) txt += "-";
  }
  return txt;
}