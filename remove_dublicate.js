var array=[2,3,2,4,5,6,5,4]
var i=0
var b=[]
var len=array.length
while (i<len){
    if (b.indexOf(array[i]===-1) ){
        b.push(array[i])
    }
    i++

}
console.log(b)