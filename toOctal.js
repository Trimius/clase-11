function toOctal(a){
    let cos = 1
    let res = 0
    let bin = []
 
     while(cos > 0){
         
         cos = parseInt(a/8);
         res = a%8
         bin.push(res)
         a = cos
     }
     return bin
 }
 console.log(toOctal(775).toString());
 
 
 
 module.exports = toOctal