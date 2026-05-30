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
        "but only those who ask the right question ever find the door." +
        "</span>";

    // Return false to prevent the form from reloading the page.
    return false;
}
