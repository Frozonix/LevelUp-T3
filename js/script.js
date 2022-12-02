let min = document.getElementById('timerMinutes').innerText
let sec = document.getElementById('timerSeconds').innerText
let millsec = document.getElementById('timerMilliseconds').innerText

let startMinutes = min**1
let startSec = sec**1
let startMillisec = millsec**1

let timerSec= setInterval(() => {
	startMillisec--
	if (startMillisec < 0) {
		startSec--
		startMillisec = 99
		document.getElementById('timerSeconds').innerText = startSec
	}
	if (startSec < 0) {
		startMinutes--
		startSec = 59
		document.getElementById('timerMinutes').innerText = startMinutes
	}

	if (startMinutes < 10) 
		document.getElementById('timerMinutes').innerText ='0' + startMinutes

	if (startSec < 10)
		document.getElementById('timerSeconds').innerText = '0' + startSec
	else
		document.getElementById('timerSeconds').innerText  = startSec

	if (startMillisec < 10) 
		document.getElementById('timerMilliseconds').innerText ='0' + startMillisec
	else
		document.getElementById('timerMilliseconds').innerText = startMillisec

	if(startMinutes == 0 && startSec == 0 && startMillisec == 0) {
		clearInterval(timerSec)
	}
}, 10)
