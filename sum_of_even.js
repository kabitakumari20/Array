var array=[4,5,3,2,6,8,9,12,14,16];
var i=0
var sum=0
while (i<array.length){
    if (array[i]%2==0){
        sum=sum+i
    }
    i++
}
console.log(sum)