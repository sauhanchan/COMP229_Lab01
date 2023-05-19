//Var:
function iterateVar() {
    for(var i = 0; i < 10; i++) {
       console.log(i);
    }
    console.log(i);
 }
 iterateVar(); 

 //Let:
 function iterateLet() {
    for(let i = 0; i < 10; i++) {
       console.log(i);
    }
    console.log(i);  //*Not working as using Let
 }
 iterateLet();
 