// This function validates the user's inputs when the form is submitted.
function validateInputs() {

    // Get the first name value from the first name input box.
    let firstName = document.getElementById("firstName").value.trim();

    // Get the last name value from the last name input box.
    let lastName = document.getElementById("lastName").value.trim();

    // Get the zip code value from the zip code input box.
    let zipCode = document.getElementById("zipCode").value.trim();

    // Combine the first name, a space, and the last name into one variable.
    let fullName = firstName + " " + lastName;

    // Clear any previous validation or secret messages so old text is removed.
    document.getElementById("nameMessage").innerHTML = "";
    document.getElementById("zipMessage").innerHTML = "";
    document.getElementById("secretMessage").innerHTML = "";

    // Check if the combined full name is longer than 20 characters.
    if (fullName.length > 20) {

        // Display a warning that the name is too long using innerHTML.
        document.getElementById("nameMessage").innerHTML =
            "Warning: Your full name must be 20 characters or fewer. " +
            "You entered " + fullName.length + " characters (" + fullName + ").";

        // Return false to stop the program from continuing.
        return false;
    }

    // Create a regular expression pattern that matches exactly 5 digits.
    let zipPattern = /^\d{5}$/;

    // Check if the zip code does NOT match the 5-digit pattern.
    if (!zipPattern.test(zipCode)) {

        // Display a warning that the zip code is invalid using innerHTML.
        document.getElementById("zipMessage").innerHTML =
            "Warning: Zip code must be exactly 5 digits (numbers only). Please try again.";

        // Return false to stop the program from continuing.
        return false;
    }

    // If all inputs passed validation, display the secret message using innerHTML.
    document.getElementById("secretMessage").innerHTML =
        "Access granted, " + fullName + "!" +
        "<br><br>" +
        "Your secret message is:" +
        "<br><br>" +
        "<span class='revealMessage'>" +
        "The universe's best kept secret: the answer to everything is 42..." +
        "but only those who ask the right question, ever find the door." +
        "</span>";

    // Return false to prevent the form from reloading the page.
    return false;
}

// This function checks every word/phrase the user entered to see if it is a palindrome.
function checkPalindromes() {

    // Get the value from the palindrome input box and remove leading/trailing spaces.
    let userInput = document.getElementById("palindromeInput").value.trim();

    // Clear any previous results so old output is removed.
    document.getElementById("palindromeResults").innerHTML = "";

    // Check if the user left the input box empty.
    if (userInput === "") {

        // Display a message asking the user to enter at least one word, using innerHTML.
        document.getElementById("palindromeResults").innerHTML =
            "Please enter a word or phrase before submitting.";

        // Return false to stop the form from reloading the page.
        return false;
    }

    // Split the user's input into a list of separate words/phrases using commas.
    let wordList = userInput.split(",");

    // Create an empty string that will collect all of the result messages.
    let output = "";

    // Loop through every word/phrase the user entered, one at a time.
    for (let i = 0; i < wordList.length; i++) {

        // Get the current word/phrase and remove leading/trailing spaces.
        let currentWord = wordList[i].trim();

        // If this entry is empty (caused by an extra comma), skip it and check the next one.
        if (currentWord === "") {
            continue;
        }

        // Remove all spaces and convert to lowercase so the comparison ignores spacing and case.
        let cleanedWord = currentWord.toLowerCase().split(" ").join("");

        // Start with an empty string that will hold the reversed version of the word.
        let reversedWord = "";

        // Loop through the cleaned word from the last character to the first.
        for (let j = cleanedWord.length - 1; j >= 0; j--) {

            // Add the current character onto the end of the reversed string.
            reversedWord = reversedWord + cleanedWord[j];
        }

        // Compare the cleaned word to its reversed version.
        if (cleanedWord === reversedWord) {

            // Add a success message for this word to the output, styled in green.
            output = output + "<p class='palindromeYes'>\"" + currentWord + "\" is a palindrome! &#9989;</p>";

        } else {

            // Add a failure message for this word to the output, styled in red.
            output = output + "<p class='palindromeNo'>\"" + currentWord + "\" is not a palindrome. &#10060;</p>";
        }
    }

    // Display every result message at once using innerHTML.
    document.getElementById("palindromeResults").innerHTML = output;

    // Return false to prevent the form from reloading the page.
    return false;
}
