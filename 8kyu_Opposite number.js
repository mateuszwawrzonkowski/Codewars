function opposite(number) {
    if (number > 0)
    {
      number = number - 2*number;
      return number;
    }
    else{
      number = number + 2*(-number);
      return number;
    }    
  }