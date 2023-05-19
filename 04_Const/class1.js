function reinitConst(){
    const me = 1;
    console.log(me);
    me = 2;   //Not working as using 'const'
    console.log(me);
 }
 
 reinitConst();