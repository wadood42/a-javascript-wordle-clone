export function handleKeyDown(e: KeyboardEvent, currentAttempt: string) {
	if (e.ctrlKey || e.metaKey || e.altKey) return;
	console.log("handling keydow", e.key);

	let letter = e.key.toLowerCase();
	if (letter === "enter") {
	} else if (letter === "backspace") {
	} else if (/^[a-z]$/.test(letter)) {
		if (currentAttempt.length < 5) {
			currentAttempt += letter;
			console.log("current attempt", currentAttempt);
		}
	}
	updateGrid();
}

function updateGrid() {
	console.log("updating grid");
}
