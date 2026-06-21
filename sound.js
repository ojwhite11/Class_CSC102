// get a reference to the hidden background audio element so we can control playback
let bgAudio = document.getElementById("bgAudio");

// function called by the Play Sound button to start the looping background sound
function playSound() {
    // call play on the audio element to begin playback
    bgAudio.play();
    // disable the Play button so it cannot be clicked again while playing
    document.getElementById("playSoundBtn").disabled = true;
    // enable the Mute button so the user can stop the sound
    document.getElementById("muteSoundBtn").disabled = false;
    // write a status message to the page using innerHTML instead of alert
    document.getElementById("soundStatus").innerHTML = "Background sound is now playing on a loop.";
}

// function called by the Mute Sound button to stop the background sound
function stopSound() {
    // pause the audio element to stop playback
    bgAudio.pause();
    // reset the playback position back to the beginning of the track
    bgAudio.currentTime = 0;
    // disable the Mute button since there is nothing playing to stop
    document.getElementById("muteSoundBtn").disabled = true;
    // re-enable the Play button so the user can start the sound again
    document.getElementById("playSoundBtn").disabled = false;
    // write a muted status message using innerHTML instead of alert
    document.getElementById("soundStatus").innerHTML = "Background sound is muted.";
}
