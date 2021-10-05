// console.log("34"+10)
// console.log("1"+2+3)
// console.log(1+2+"3")
// console.log(10-"34")
// console.log("10"-34)
// var a=""
// console.log(a=="")
// console.log(a==1)
// var b=[]
// var c=[]
// console.log(JSON.stringify(b)==JSON.stringify(c))
// console.log(b==c)

// var f={}
// var g={}
// console.log(JSON.stringify(f)==JSON.stringify(g))




var list = ["aba", "121", "mon", "pap","mom"]
var i = 0
var c = 0
let a=(list[i].length -1)
while (i < list.length) {
        if (list[i][0] == list[i][a]) {
            c = c + 1
        }
        i = i + 1
}
console.log(c)


