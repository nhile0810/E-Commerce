// Set the offer end date to 2 hours from the current time
var offerEndDate = new Date().getTime() + (2 * 60 * 60 * 1000); // 2 hours in milliseconds

// Update the countdown every 1 second
var countdownInterval = setInterval(function() {
    // Get the current time
    var now = new Date().getTime();
    
    // Calculate the time remaining
    var timeRemaining = offerEndDate - now;

    // Time calculations for hours, minutes, and seconds
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Output the result in the respective elements
    document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
    document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
    document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);

    // If the countdown is over, display a message
    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".countdown-timer").innerHTML = "Offer has ended!";
    }
}, 1000);
