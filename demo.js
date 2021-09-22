// let a=[]
// let b=[]
// console.log(a==b)



// var a=[1,8,3]
// var b=[1,2,3]
// if(JSON.stringify(a)==JSON.stringify(b)){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

var a=[1,6,3]
var b=[1,8,3]

if(JSON.stringify(a)==JSON.stringify(b)){
    console.log(true);
}
else{
    console.log(false);
}
let a = []
let b = JSON.stringify(a)
if(b == '[]') {
    console.log(typeof(b))
}else{
    console.log('h')
}

