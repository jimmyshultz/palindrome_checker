let button = document.getElementById("check-btn");
button.onclick = checkForPalindrome;

function checkForPalindrome() {
    let userInput = document.getElementById('text-input').value;
    if (userInput.trim() === '') {
        alert('Please input a value');
    } else {
        let strippedString = stripString(userInput);
        let reversedStrippedString = reverseString(strippedString);
        if (strippedString == reversedStrippedString) {
            document.getElementById("result").innerHTML = `${userInput} is a palindrome.`;
        } else {
            document.getElementById("result").innerHTML = `${userInput} is not a palindrome`;
        }
    }
}

//strip all spaces and special characters from the string and make it lower case
function stripString(string) {
    return string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

//reverse the string and set that result equal to a new variable
function reverseString(string) {
    return string.split("").reverse().join("");
}