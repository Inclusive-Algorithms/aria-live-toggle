// Timer

var clockTimer = 60;
setInterval(updateClock,1000);

function updateClock() {
	clockTimer--;

	// reset the timer after it hits 0
	if(clockTimer < 0){
		clockTimer = 60;
	}

	if(clockTimer%10 == 0){
		// if time left is divisible by 10, switch to aria-live="assertive"
		$('#timeLeft').attr('aria-live','assertive');
	} else {
		// any other time set aria-live="off"
		$('#timeLeft').attr('aria-live','off');
	}

	// update the timer
	$('#clock').html(formatClockTime(clockTimer));

}

function formatClockTime(s) {
	var seconds, minutes;
	seconds = s%60;
	minutes = s/60;
	return Math.floor(minutes) + ":" + (seconds<10?"0":"") + seconds;
}
