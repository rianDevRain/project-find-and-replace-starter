/** @format */

// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.
// console.clear();
const findInput = document.querySelector(".find-input");
const replaceInput = document.querySelector(".replace-input");
const replaceAllButton = document.querySelector(".replace-all-button");

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row");
// console.table(rowElements)
// console.log(rowElements)
// When you call the function below, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen?
function getCellElements(currentRowElement) {
	return currentRowElement.querySelectorAll(".cell");
}

// YOUR CODE GOES HERE

replaceAllButton.addEventListener("click", () => {
	let findVal = findInput.value;
	let replaceVal = replaceInput.value;
	for (let row of rowElements) {
		let cellElements = getCellElements(row);
		for (let cell of cellElements) {
			let cellCopy = cell.innerHTML;
			if (cellCopy.includes(findVal)) {
				let regexpress = new RegExp(findVal);
				let newVal = cellCopy.replace(regexpress, replaceVal);
				cell.innerHTML = newVal;
			}
		}
	}
});
// cell.innerHTML = replaceval;
// console.log("this ran");
