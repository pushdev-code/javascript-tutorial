function log(msg) {
	logElement.innerHTML += '<p class="result" >' + msg + '</p>';
}

function clearOutput() {
	logElement.innerHTML = '';
}

function capture() {
	log('capture: ' + this.firstChild.nodeValue); // get value of first child element
}

function bubble() {
	log('bubble: ' + this.firstChild.nodeValue); // get value of first child element
}

let logElement = document.querySelector('.log'); // get log section
let divs = document.getElementsByTagName('div'); // get and save all the divs into an array
let clearButton = document.querySelector('.clear'); // get clear button

for (const div of divs) {
	// div.addEventListener('click', capture, true); // add capture event
	// div.addEventListener('click', bubble, false); // add bubble event
}

clearButton.addEventListener('click', clearOutput); // add event event (by default is false = bubble)
