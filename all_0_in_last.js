// var arr=[1,2,3,4,5,6,0,5,0,7]
// var i=0
// var my_lit=[]
// while(i<arr.length){
//     if(arr[i]==0){
//         my_lit.unshift(arr[i])
//     }
//     else{
//         my_lit.push(arr[i])
//     }
//     i=i+1
// }
// console.log(my_lit)


var arr=[0,1,0,3,2,0]
var i=0
var my_lit=[]
var list=[]
while(i<arr.length){
    if(arr[i]!=0){
        list.push(arr[i])
    }
    else{
        my_lit.push(arr[i])
    }
    i=i+1
    
}
var add=[...list,...my_lit]
console.log(add)
