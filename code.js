// This function runs the coin flip game when the form is submitted.
function playCoinGame() {
    // Gets the player's text input and converts it to lowercase.
    let guess = document.getElementById("guess").value.toLowerCase();
    // Validates that the player typed a valid option.
    if (guess !== "heads" && guess !== "tails") {
        // Displays a validation message using innerHTML instead of an alert.
        document.getElementById("gameResult").innerHTML =
            "Please type heads or tails.";

        // Stops the function early so the game does not continue.
        return false;
    }
    // Generates a random number that is either 0 or 1.
    let coinNumber = Math.floor(Math.random() * 2);
    // Creates an empty variable to hold the coin result.
    let coinSide = "";
    // If coinNumber is 0, the coin landed on heads.
    if (coinNumber === 0) {
        // Sets the coin result to heads.
        coinSide = "heads";
    }
    // If coinNumber is 1, the coin landed on tails.
    else {
        // Sets the coin result to tails.
        coinSide = "tails";
    }
    // Checks if the player's guess matches the coin result.
    if (guess === coinSide) {
        // Displays a win message on the page.
        document.getElementById("gameResult").innerHTML =
            "The coin landed on " + coinSide + ". You won!";
    }
    // Runs if the player guessed the wrong side.
    else {
        // Displays a loss message on the page.
        document.getElementById("gameResult").innerHTML =
            "The coin landed on " + coinSide + ". You lost!";
    }
    // Calls the second function and passes the player's guess as a parameter.
    showMessage(guess);
    // Returns false to prevent the form from refreshing the page.
    return false;
}
// This function takes the player's guess as a parameter and displays a thank-you message.
function showMessage(playerGuess) {

    // Outputs a personalized message to the page.
    document.getElementById("playerMessage").innerHTML =
        "You guessed " + playerGuess + ". Thanks for playing Quarks Casino!";
}

// Module 5 OOP classes: Rocket and Payload

class Rocket
{
    // Default constructor
    constructor ()
    {
        this.name = "Falcon 9";
        this.fuelLevel = 100;
        this.isLaunched = false;
    }

    // Standard constructor
    /*constructor (name, fuelLevel, isLaunched)
    {
        this.name = name;
        this.fuelLevel = fuelLevel;
        this.isLaunched = isLaunched;
    }*/

    launch()
    {
        alert("The " + this.name + " has launched!");
    }

    refuel()
    {
        alert("The " + this.name + " is refueling. Fuel level: " + this.fuelLevel + "%");
    }

    getStatus()
    {
        alert("Rocket: " + this.name + " | Launched: " + this.isLaunched + " | Fuel: " + this.fuelLevel + "%");
    }
}

class Payload
{
    // Default constructor
    constructor ()
    {
        this.name = "Satellite";
        this.mass = 3.14;
        this.isDeployed = false;
    }

    // Standard constructor
    /*constructor (name, mass, isDeployed)
    {
        this.name = name;
        this.mass = mass;
        this.isDeployed = isDeployed;
    }*/

    deploy()
    {
        alert("Payload " + this.name + " has been deployed!");
    }

    inspect()
    {
        alert("Inspecting payload: " + this.name + " | Mass: " + this.mass + " kg");
    }

    getInfo()
    {
        alert("Payload: " + this.name + " | Mass: " + this.mass + " kg | Deployed: " + this.isDeployed);
    }
}

// Demo: Rocket object
var newRocket = new Rocket();
alert(newRocket.name);
newRocket.launch();
newRocket.refuel();
newRocket.getStatus();

// Demo: Payload object
var newPayload = new Payload();
alert(newPayload.name);
newPayload.deploy();
newPayload.inspect();
newPayload.getInfo();
