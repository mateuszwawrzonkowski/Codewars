function getMiddle(s)
{
  let middle = (s.length)/2;
  if(s.length%2==0)
  {
     return s.substr(middle-1,2);
  }else
  {
       return s.substr(middle,1);
  }
}