function char_count(str, choose_letter) {
  var letter_Count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == choose_letter) {
      letter_Count += 1;
    }
  }
  return letter_Count;
}

console.log(char_count("w3resource.com", "3"));
