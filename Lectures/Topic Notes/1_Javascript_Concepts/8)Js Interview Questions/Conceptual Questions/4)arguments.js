function log(a,b,c,d) {
    console.log(a,b,c,d)
    arguments[0] = 'bfe'
    arguments[3] = 'dev'
   
    console.log(a,b,c,d);// bfe,2,3,undefined
  }
  
  log(1,2,3)