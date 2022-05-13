const string = "abacddbec";
function findUniqChAR(string) {
  var arra1 = string.split("");
  var result = "";
  var ctr = 0;

  for (var i = 0; i < arra1.length; i++) {
    count = 0;

    for (var j = 0; j < arra1.length; j++) {
      if (arra1[i] === arra1[j]) {
        count += 1;
      }
    }

    if (count < 2) {
      result = arra1[i];
    }
  }
  return result;
}
console.log(findUniqChAR("abacddbec"));
