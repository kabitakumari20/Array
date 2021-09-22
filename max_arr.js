const pro=new Promise((resolve,reject)=>{
    var arr=[1,2,3,67,8,90,34]
    var max=0
    // var sec=max[i]
    for (var i in arr){
        if (arr[i]>max){
            max=arr[i]
        }
    }
    resolve(max)
})
pro.then((max)=>{
    console.log(max)
})
