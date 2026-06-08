// get a reference to the meme image so we can measure and place it on load
let memeImg = document.getElementById("memeImage");
// variable that stores the current horizontal position, starting in the horizontal center
let posX = (window.innerWidth - memeImg.offsetWidth) / 2;
// variable that stores the current vertical position, starting in the vertical center
let posY = (window.innerHeight - memeImg.offsetHeight) / 2;
// variable that controls horizontal speed; positive means moving right
let dx = 3;
// variable that controls vertical speed; positive means moving down
let dy = 2;
// variable that holds the requestAnimationFrame ID so we can cancel it
let animationId = null;

// place the image at its centered starting position as soon as the page loads
memeImg.style.left = posX + "px";
// set the initial vertical position so the image appears centered before Start is clicked
memeImg.style.top = posY + "px";

// function called by the Start button to begin moving the meme image
function startMoving() {
    // disable the Start button to prevent it from being clicked again mid-animation
    document.getElementById("startBtn").disabled = true;
    // enable the Stop button so the user can halt the animation
    document.getElementById("stopBtn").disabled = false;
    // write a status message to the page using innerHTML instead of alert
    document.getElementById("statusMessage").innerHTML = "The meme is on the move!";
    // call animate to begin the requestAnimationFrame movement loop
    animate();
}

// function called by the Stop button to halt the meme image movement
function stopMoving() {
    // cancel the pending animation frame using the stored ID
    cancelAnimationFrame(animationId);
    // reset animationId to null since no animation is running
    animationId = null;
    // disable the Stop button since the animation has ended
    document.getElementById("stopBtn").disabled = true;
    // re-enable the Start button so the user can start again
    document.getElementById("startBtn").disabled = false;
    // write a stopped status message using innerHTML instead of alert
    document.getElementById("statusMessage").innerHTML = "The meme has stopped. Click Start to go again!";
}

// function that moves the image one step per frame and schedules the next frame
function animate() {
    // get the meme image element from the page
    let img = document.getElementById("memeImage");
    // get the total width of the browser viewport
    let windowWidth = window.innerWidth;
    // get the total height of the browser viewport
    let windowHeight = window.innerHeight;
    // get the rendered pixel width of the image
    let imgWidth = img.offsetWidth;
    // get the rendered pixel height of the image
    let imgHeight = img.offsetHeight;

    // advance the horizontal position by the current speed
    posX += dx;
    // advance the vertical position by the current speed
    posY += dy;

    // check if the right edge of the image has reached the right side of the screen
    if (posX + imgWidth >= windowWidth) {
        // flip horizontal direction so the image bounces back to the left
        dx = -dx;
        // clamp position so the image does not go past the right edge
        posX = windowWidth - imgWidth;
    }
    // check if the left edge of the image has reached the left side of the screen
    if (posX <= 0) {
        // flip horizontal direction so the image bounces back to the right
        dx = -dx;
        // clamp position so the image does not go past the left edge
        posX = 0;
    }
    // check if the bottom edge of the image has reached the bottom of the screen
    if (posY + imgHeight >= windowHeight) {
        // flip vertical direction so the image bounces back upward
        dy = -dy;
        // clamp position so the image does not go past the bottom edge
        posY = windowHeight - imgHeight;
    }
    // check if the top edge of the image has reached the top of the screen
    if (posY <= 0) {
        // flip vertical direction so the image bounces back downward
        dy = -dy;
        // clamp position so the image does not go past the top edge
        posY = 0;
    }

    // update the image's CSS left property to move it horizontally
    img.style.left = posX + "px";
    // update the image's CSS top property to move it vertically
    img.style.top = posY + "px";

    // schedule the next frame and save the ID in case we need to cancel it
    animationId = requestAnimationFrame(animate);
}
