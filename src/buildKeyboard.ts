let keyboard = document.getElementById("keyboard");

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

	for (let j = 0; j < letters.length; j++) {
		let btn = document.createElement("button");
		btn.className = "btn";
		btn.textContent = letters[j];
		row.appendChild(btn);
	}
	keyboard?.appendChild(row);
}
