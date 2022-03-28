import drawGrid from "./draw_grid";
import buildKeyboard from "./buildKeyboard";
import "./styles.css";

let span = document.getElementById("help");
let helpModal = document.getElementById("help-modal");
span?.addEventListener("click", () => {
	if (helpModal) {
		helpModal.style.visibility = "visible";
	}
	let closeBtn = document.getElementById("close-modal");
	if (closeBtn) {
		closeBtn.addEventListener("click", () => {
			if (helpModal) {
				helpModal.style.visibility = "hidden";
			}
		});
	}
});
drawGrid();
buildKeyboard();
