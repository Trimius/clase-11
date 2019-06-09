function toHexa(a){
    let cos = 1
    let res = 0
    let bin = []
 
     while(cos > 0){
         
         cos = parseInt(a/16);
         res = a%16    
         a = cos

         if(res === 10){
             res = 'A'
         }if(res === 11){
             res = 'B'
         }if(res === 12){
             res = 'C'
         }if(res === 13){
             res = 'D'
         }if(res === 14){
             res = 'E'
         }if(res === 15){
             res = 'F'
         }
         bin.push(res)
     }
     return bin
 }
 console.log(toHexa(1256).toString());
 
 
 
 module.exports = toHexa