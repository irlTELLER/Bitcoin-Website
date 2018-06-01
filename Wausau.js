function date() {
	var event;
	var time = new Date().getDay();
		if (time === 0) {
			event = "Nothing";
		} else if (time <= 5 ) {
			event = "Events"
		} else {
			event = "Who knows"
		}
	document.getElementById("events").innerHTML = event;
	}

function city() {
	var citi = document.getElementById("city");
	document.getElementById("citySelect").innerHTML = citi.innerHTML;
}