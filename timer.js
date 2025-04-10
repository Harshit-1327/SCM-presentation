window.onload = function() {
    let timeLeft = 59;  // Time in seconds
    const timerElement = document.getElementById('timer');

    // Start the countdown
    const timerInterval = setInterval(function() {
        // Update the displayed time
        timerElement.textContent = timeLeft;

        // Decrement the time left
        timeLeft--;

        // Check if the timer has reached 0 or below
        if (timeLeft < 0) {
            clearInterval(timerInterval);  // Stop the countdown
            alert("Time's up!");  // Notify the user
            // Automatically submit the quiz or take other action
            document.getElementById('quiz-form').submit();
        }
    }, 1000);  // Run every 1 second
};
if (timeLeft === 0) {
    clearInterval(timerInterval);
    alert("Time's up!");
    document.getElementById('quiz-form').submit();
}
