const password = document.getElementById("password");
const generateButton = document.getElementById("generateButton");
const miniscules = document.getElementById("miniscules");
const majuscules = document.getElementById("majuscules");
const digits = document.getElementById("digits");
const specialCharacter = document.getElementById("specialCharacters");
const passwordLength = document.getElementById("passwordLength");
const lengthDisplay = document.getElementById("lengthDisplay");
const copyButton = document.getElementById("copyButton");

updateLength();

function generateRandomSentence() {
  {
    let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let specialCharacters = "!@#$%^&*()_+-=,./<>?;:{}[]|";
    let characterSets = [];
    if (miniscules.checked) characterSets.push(lowercaseLetters);
    if (majuscules.checked) characterSets.push(uppercaseLetters);
    if (digits.checked) characterSets.push(numbers);
    if (specialCharacter.checked) characterSets.push(specialCharacters);
    var sentenceLength = passwordLength.value;
    var randomSentence = "";
    if (characterSets.length != 0) {
      while (randomSentence.length < sentenceLength) {
        var randomSetIndex = Math.floor(Math.random() * characterSets.length);
        var randomSet = characterSets[randomSetIndex];
        var randomIndex = Math.floor(Math.random() * randomSet.length);
        var randomChar = randomSet.charAt(randomIndex);
        randomSentence += randomChar;
      }
    }
    password.value = randomSentence;
  }
}
function updateLength() {
  lengthDisplay.innerHTML = "Password Length: " + passwordLength.value;
}

generateButton.addEventListener("click", generateRandomSentence);
miniscules.addEventListener("change", generateRandomSentence);
majuscules.addEventListener("change", generateRandomSentence);
digits.addEventListener("change", generateRandomSentence);
specialCharacter.addEventListener("change", generateRandomSentence);
passwordLength.addEventListener("input", updateLength);
passwordLength.addEventListener("input", generateRandomSentence);

copyButton.addEventListener("click", function () {
  navigator.clipboard.writeText(password.value).then(function () {
    copyButton.src = "icons/copiedIcon.png";
    setTimeout(function () {
      copyButton.src = "icons/copyIcon.png";
    }, 1000);
  });
});
