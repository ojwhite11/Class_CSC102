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

// Assignment 6.2: Player class and casino betting game logic added below.

// New OOP concept: Player class used to track casino betting stats.
class Player
{
    // Default constructor sets starting values for a brand new player.
    constructor ()
    {
        // Stores the player's display name.
        this.name = "Guest";
        // Stores the player's current chip total, starting at 100.
        this.chips = 100;
        // Stores the number of bets the player has won.
        this.wins = 0;
        // Stores the number of bets the player has lost.
        this.losses = 0;
        // Stores an array of strings describing every past bet.
        this.betHistory = [];
    }

    // Standard constructor
    /*constructor (name, chips, wins, losses, betHistory)
    {
        this.name = name;
        this.chips = chips;
        this.wins = wins;
        this.losses = losses;
        this.betHistory = betHistory;
    }*/

    // Applies the result of one bet to this player's chips, win/loss totals, and history.
    placeBet(amount, guess, result)
    {
        // If the player won this bet, add the bet amount to their chips.
        if (result === "win")
        {
            // Add the winnings onto the current chip total.
            this.chips = this.chips + amount;
            // Increase the win counter by one.
            this.wins = this.wins + 1;
        }
        // Otherwise the player lost this bet.
        else
        {
            // Subtract the lost amount from the current chip total.
            this.chips = this.chips - amount;
            // Increase the loss counter by one.
            this.losses = this.losses + 1;
        }

        // Build a short text record describing this bet.
        var betRecord = "Guessed " + guess + ", bet " + amount + " chips: " + result.toUpperCase();
        // Add the new record onto the end of the bet history array.
        this.betHistory.push(betRecord);
    }

    // Calculates the player's win rate as a whole number percentage.
    getWinRate()
    {
        // Add the wins and losses together to find the total number of bets.
        var totalBets = this.wins + this.losses;

        // Avoid dividing by zero when no bets have been played yet.
        if (totalBets === 0)
        {
            // Return 0 percent when there is no history to calculate from.
            return 0;
        }

        // Divide wins by total bets, multiply by 100, then round to a whole number.
        return Math.round((this.wins / totalBets) * 100);
    }

    // Builds an HTML snippet summarizing this player's current core stats.
    getStats()
    {
        // Start building the summary string with the player's name.
        var summary = "<p><strong>Player:</strong> " + this.name + "</p>";
        // Add the current chip total to the summary.
        summary = summary + "<p><strong>Chips:</strong> " + this.chips + "</p>";
        // Add the total wins to the summary.
        summary = summary + "<p><strong>Wins:</strong> " + this.wins + "</p>";
        // Add the total losses to the summary.
        summary = summary + "<p><strong>Losses:</strong> " + this.losses + "</p>";
        // Add the win rate percentage to the summary using the getWinRate method.
        summary = summary + "<p><strong>Win Rate:</strong> " + this.getWinRate() + "%</p>";

        // Return the completed HTML summary string.
        return summary;
    }
}

// Global variable that stores the current Player object so stats persist across flips.
let currentPlayer = null;

// Validates the player name form and creates a new Player object (Object + string validation).
function startGame() {
    // Get the player's name input value and remove leading/trailing whitespace.
    let nameInput = document.getElementById("playerName").value.trim();

    // Clear any previous name error message.
    document.getElementById("nameError").innerHTML = "";

    // Check if the player left the name box empty.
    if (nameInput === "") {
        // Show a message asking the player to enter a name.
        document.getElementById("nameError").innerHTML =
            "Please enter a name before starting the game.";
        // Stop the function early since the name is invalid.
        return false;
    }
    // Check if the name is too short to be a real name.
    else if (nameInput.length < 2) {
        // Show a message that the name is too short.
        document.getElementById("nameError").innerHTML =
            "Your name must be at least 2 characters long.";
        // Stop the function early since the name is invalid.
        return false;
    }
    // Check if the name is too long to display nicely.
    else if (nameInput.length > 20) {
        // Show a message that the name is too long.
        document.getElementById("nameError").innerHTML =
            "Your name must be 20 characters or fewer.";
        // Stop the function early since the name is invalid.
        return false;
    }

    // Create a brand new Player object using the default constructor.
    currentPlayer = new Player();
    // Overwrite the default name with the validated name the player entered.
    currentPlayer.name = nameInput;

    // Let the player know the game has started successfully.
    document.getElementById("nameError").innerHTML =
        "Welcome, " + currentPlayer.name + "! You have 100 chips. Place your first bet below.";

    // Refresh the stats panel to show the brand new player's starting stats.
    displayStats();

    // Return false so the page does not reload after the form submits.
    return false;
}

// Validates the bet form, flips the coin, and updates the current player (decision logic + functions).
function placeBet() {
    // Clear any previous bet result message.
    document.getElementById("betMessage").innerHTML = "";

    // Check if a player has been created yet.
    if (currentPlayer === null) {
        // Tell the player to start a game first.
        document.getElementById("betMessage").innerHTML =
            "Please enter your name and start the game before betting.";
        // Stop the function early since there is no player yet.
        return false;
    }

    // Get the player's guess and convert it to lowercase for comparison.
    let guess = document.getElementById("betGuess").value.toLowerCase().trim();
    // Get the bet amount and convert it from text into a number.
    let betAmount = Number(document.getElementById("betAmount").value);

    // Check that the guess is exactly "heads" or "tails".
    if (guess !== "heads" && guess !== "tails") {
        // Show a message asking for a valid guess.
        document.getElementById("betMessage").innerHTML =
            "Please type heads or tails.";
        // Stop the function early since the guess is invalid.
        return false;
    }
    // Check that the bet amount is a positive number.
    else if (!(betAmount > 0)) {
        // Show a message that the bet must be positive.
        document.getElementById("betMessage").innerHTML =
            "Bet amount must be a positive number.";
        // Stop the function early since the bet amount is invalid.
        return false;
    }
    // Check that the bet amount does not exceed the player's current chips.
    else if (betAmount > currentPlayer.chips) {
        // Show a message that the bet is too large.
        document.getElementById("betMessage").innerHTML =
            "You only have " + currentPlayer.chips + " chips. Lower your bet.";
        // Stop the function early since the bet amount is invalid.
        return false;
    }

    // Generate a random number that is either 0 or 1 to flip the coin.
    let coinNumber = Math.floor(Math.random() * 2);
    // Create an empty variable to hold the coin result.
    let coinSide = "";

    // If coinNumber is 0, the coin landed on heads.
    if (coinNumber === 0) {
        // Set the coin result to heads.
        coinSide = "heads";
    }
    // Otherwise the coin landed on tails.
    else {
        // Set the coin result to tails.
        coinSide = "tails";
    }

    // Create a variable to hold whether this bet was a win or a loss.
    let betResult = "";

    // Check if the player's guess matches the coin result.
    if (guess === coinSide) {
        // Mark this bet as a win.
        betResult = "win";
    }
    // Otherwise the player guessed the wrong side.
    else {
        // Mark this bet as a loss.
        betResult = "loss";
    }

    // Apply the bet result to the current player using the Player class method.
    currentPlayer.placeBet(betAmount, guess, betResult);

    // Check if the bet was a win to choose the right message.
    if (betResult === "win") {
        // Show a win message including the coin side and the amount won.
        document.getElementById("betMessage").innerHTML =
            "The coin landed on " + coinSide + ". You won " + betAmount + " chips!";
    }
    // Otherwise the bet was a loss.
    else {
        // Show a loss message including the coin side and the amount lost.
        document.getElementById("betMessage").innerHTML =
            "The coin landed on " + coinSide + ". You lost " + betAmount + " chips.";
    }

    // Refresh the stats panel so the new totals and bet history are visible.
    displayStats();

    // Return false so the page does not reload after the form submits.
    return false;
}

// Displays the current player's stats and loops through the last 5 bets (loop + function).
function displayStats() {
    // Check if there is no current player yet.
    if (currentPlayer === null) {
        // Show a default message since there is nothing to display.
        document.getElementById("statsPanel").innerHTML =
            "<p>No active player. Enter a name above to start playing.</p>";
        // Stop the function early since there is no player to display.
        return;
    }

    // Start the stats output with the basic stats summary from the Player object.
    let statsOutput = currentPlayer.getStats();

    // Add a heading for the bet history section.
    statsOutput = statsOutput + "<p><strong>Last 5 Bets:</strong></p>";

    // Check if the player has not placed any bets yet.
    if (currentPlayer.betHistory.length === 0) {
        // Add a message saying there is no history yet.
        statsOutput = statsOutput + "<p>No bets placed yet.</p>";
    }
    // Otherwise loop through the most recent bets.
    else {
        // Find the starting index so only the last 5 bets are shown.
        let startIndex = currentPlayer.betHistory.length - 5;

        // If there are fewer than 5 bets, start from the beginning of the array.
        if (startIndex < 0) {
            // Reset the starting index to the first bet in the array.
            startIndex = 0;
        }

        // Loop through the bet history array starting at the calculated index.
        for (let i = startIndex; i < currentPlayer.betHistory.length; i++) {
            // Add each bet record to the stats output as its own line.
            statsOutput = statsOutput + "<p>" + currentPlayer.betHistory[i] + "</p>";
        }
    }

    // Display the completed stats output in the stats panel using innerHTML.
    document.getElementById("statsPanel").innerHTML = statsOutput;
}

// Resets the current player and clears the betting section back to its starting state.
function resetPlayer() {
    // Set the current player back to null so a new Player can be created.
    currentPlayer = null;

    // Clear the player name input box.
    document.getElementById("playerName").value = "";
    // Clear the bet guess input box.
    document.getElementById("betGuess").value = "";
    // Clear the bet amount input box.
    document.getElementById("betAmount").value = "";

    // Clear the name error/welcome message.
    document.getElementById("nameError").innerHTML = "";
    // Clear the bet result message.
    document.getElementById("betMessage").innerHTML = "";

    // Refresh the stats panel to show that there is no active player.
    displayStats();
}
