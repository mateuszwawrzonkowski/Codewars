//First solution
function greet(name){
  if(name === "Johnny")
    return "Hello, my love!";
  else
    return "Hello, " + name + "!";
}

//Second solution
function greet(name){
  const greeting = (name === "Johnny") ? `Hello, my love!` : `Hello, ${name}!`;
    return greeting;
}

//Third solution
function greet(name){
  return greeting = (name === "Johnny") ? `Hello, my love!` : `Hello, ${name}!`;
}