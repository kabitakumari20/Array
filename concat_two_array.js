// const hege = ["Cecilie", "Lone"];
// const stale = ["Emil", "Tobias", "Linus"];
// const children = hege.concat(stale);
// console.log(children)


// const ara1=[1,2,3,4,5]
// const ara2=[6,7,8,9]
// const add=ara1.concat(ara2)
// console.log(add)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.copyWithin(2,0);
// console.log(fruits)

const ages = [3, 10, 18, 20];

function checkAge(age) {
  return age > 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.find(checkAge);
}
