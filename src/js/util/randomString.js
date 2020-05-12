export default function (count) {
  var letters = [];
  for (var i = 48; i < 123; i++) {
    (i <= 57 && i >= 48) || (i >= 65 && i <= 90) || i >= 97 ?
      letters.push(String.fromCharCode(i)) :
      "";
  }
  for (var i = 0; i < letters.length; i++) {
    var temp = Math.floor(Math.random() * (letters.length - i));
    var tempChar = letters[temp];
    letters[temp] = letters[letters.length - 1];
    letters[letters.length - 1] = tempChar;
  }
  var randomWords = letters.toString().replace(/\,/g, "").substr(0, count);

  return randomWords;
}
