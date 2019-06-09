function toBinary(a){
   let cos = 1
   let res = 0
   let bin = []

    while(cos > 0){
        
        cos = parseInt(a/2);
        res = a%2
        bin.push(res)
        a = cos
    }
    return bin
}
console.log(toBinary(47).toString());



module.exports = toBinary