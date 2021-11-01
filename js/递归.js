function factory(num){
  if(num < 2){
    return num;
  }else{
    return num * arguments.callee(num -1)
  }
}