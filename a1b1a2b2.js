var a=['A','B']
var readlineSync = require("readline-sync");
var num = readlineSync . questionInt("enter the num = ");
var i=1
var arr=[]
while (i <= num){
    var j = 0
    var sum=0
    while (j<a.length){
        sum=a[j]+[i]
        arr.push(sum)
        j++
    }
    i++
}console.log(arr)
