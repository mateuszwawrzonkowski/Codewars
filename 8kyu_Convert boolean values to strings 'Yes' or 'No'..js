function boolToWord( bool ){
  if(bool == false){
    return "No";
  }
  else{
  return "Yes";
  }
}

//shorter
function boolToWord( bool ){
  if(bool == false)return "No";
  else return "Yes";
}

//or
function boolToWord( bool ){
  let Bool = (bool === false) ? "No" : "Yes";
  return Bool
}