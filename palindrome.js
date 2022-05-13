
function check_Palindrome(str_entry) {
  var cstr = str_entry;
  console.log(cstr);
  var ccount = 0;

  if (cstr.length % 2 == 0) {
    ccount = cstr.length / 2;
    // console.log(ccount);
  } else {
    if (cstr.length == 1) {
      console.log("it is a palindrome.");
      return true;
    } else {
      ccount = (cstr.length - 1) / 2;
      console.log(ccount);
    }
  }
  for (let i = 0; i < ccount; i++) {
    if (cstr[i] != cstr.slice(-1)[0]) {
      console.log("it is not a palindrome.");
      return false;
    }
  }
  console.log("string is a palindrome.");
  return true;
}
check_Palindrome("moma");
