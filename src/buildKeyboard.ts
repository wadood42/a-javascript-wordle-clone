let keyboard = document.getElementById("keyboard");
let grid = document.getElementById("grid");

const GREY = "#86886a";
const GREEN = "#538d4e";
const YELLOW = "#c9b458";

let wordList = [
	"patio",
	"darts",
	"piano",
	"horse",
	"hello",
	"water",
	"pizza",
	"sushi",
	"crabs",
];
let secretWord = "piano";

let currentAttempt = "";
let history: string[] = [];
window.addEventListener("keydown", (e: KeyboardEvent) => handleKeyDown(e));

export default function buildKeyboard() {
	console.log("building keyboard");

	keyboardRow("qwertyuiop", false);
	keyboardRow("asdfghjkl", false);
	keyboardRow("zxcvbnm", true);
}

function keyboardRow(letters: string, isLast: boolean) {
	console.log("building keyboard row", keyboard);

	let row = document.createElement("div");
	row.className = "keyboard-row";

	if (isLast) {
		let btn = document.createElement("button");
		// btn.className = "btn";
		btn.classList.add("enter");
		btn.textContent = "Enter";
		btn.addEventListener("click", (e) => {
			handleKeyDown(e);
		});
		row.appendChild(btn);
	}

	for (let j = 0; j < letters.length; j++) {
		let btn = document.createElement("button");
		btn.className = "btn";

		btn.textContent = letters[j];
		btn.addEventListener("click", (e) => handleKeyDown(e));
		row.appendChild(btn);
	}

	if (isLast) {
		let btn = document.createElement("button");
		// btn.className = "btn";
		btn.classList.add("delete");
		// let span = document.createElement("span");
		// span.className = "material-icons";
		// span.textContent = "clear";
		// btn.textContent = "";
		// btn.appendChild(span);
		btn.textContent = "delete";
		btn.addEventListener("click", (e) => {
			handleKeyDown(e);
		});
		row.appendChild(btn);
	}

	keyboard?.appendChild(row);
}

function handleKeyDown(e: any) {
	if (e.ctrlKey || e.metaKey || e.altKey) return;
	let letter = "";
	console.log("handling keydow", e.target.innerText);
	if (e.key) {
		letter = e.key.toLowerCase();
	} else {
		letter = e.target.innerText.toLowerCase();
	}

	console.log("letter is hahah", letter);
	handleKey(letter);
}

function updateGrid() {
	console.log("updating grid");
	let row = grid?.firstChild;
	for (let pastAttempt of history) {
		if (row) {
			drawPastAttemps(row, pastAttempt);
			row = row.nextSibling;
		}
	}
	if (row) {
		drawCurrentAttempt(row, currentAttempt);
	}
}

function getBgColor(attemp: string, i: number) {
	let correctLetter = secretWord[i];
	let attemptedLetter = attemp[i];

	if (
		attemptedLetter === undefined ||
		secretWord.indexOf(attemptedLetter) === -1
	) {
		return GREY;
	}
	if (attemptedLetter === correctLetter) {
		return GREEN;
	}
	return YELLOW;
}

function drawPastAttemps(row: ChildNode, attempt: string) {
	console.log("drawing past attempts");

	for (let i = 0; i < 5; i++) {
		let cell: any = row.childNodes[i];
		cell.textContent = attempt[i];
		cell.style.backgroundColor = getBgColor(attempt, i);
	}
}

function drawCurrentAttempt(row: any, attempt: string) {
	console.log("drawing current attemp");

	for (let i = 0; i < 5; i++) {
		let cell = row.children[i];
		cell.textContent = attempt[i];
	}
	for (let i = 0; i < attempt.length; i++) {
		let cell = row.children[i];

		cell.classList.add("selected");
	}
}

function handleKey(letter: string) {
	if (letter === "enter") {
		console.log("handling enter");
		if (currentAttempt.length < 5) {
			return;
		}
		if (!wordList.includes(currentAttempt)) {
			let popup = document.getElementById("popup");
			if (popup) {
				popup.style.visibility = "visible";
				return;
			}
		}
		history.push(currentAttempt);
		currentAttempt = "";
	} else if (letter === "backspace" || letter === "delete") {
		console.log("handling backspace");
		currentAttempt = currentAttempt.slice(0, currentAttempt.length - 1);
		console.log("XXX cur", currentAttempt);
	} else if (/^[a-z]$/.test(letter)) {
		if (currentAttempt.length < 5) {
			currentAttempt += letter;
			console.log("current attempt", currentAttempt);
		}
	}
	updateGrid();
}
