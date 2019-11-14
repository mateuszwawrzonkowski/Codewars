class SmallestIntegerFinder {
  findSmallestInt(args) {
    var smallest = args[0];
    for (var i = 0; i <= args.length; i++){
      if(smallest>args[i+1])
      {
         smallest = args[i+1];
      }
    }
    return smallest;
  }
}