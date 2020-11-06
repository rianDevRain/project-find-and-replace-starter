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

// I feel the code below needs very little explanation. The code tells the story...

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

// Below is the find and replace done with i = 0 

// replaceAllButton.addEventListener("click", () => {
// 	let findVal = findInput.value
// 	let replaceVal = replaceInput.value
// 	for (let i = 0; i < rowElements.length; i++) {
// 		let cellElements = getCellElements(rowElements[i])
// 		for (let j = 0; j < cellElements.length; j++) {
// 			let cellCopy = cellElements[j].innerHTML
// 			if (cellCopy.includes(findVal)) {
// 				let regexpress = new RegExp(findVal)
// 				let newVal = cellCopy.replace(regexpress, replaceVal)
// 				cellElements[j].innerHTML = newVal
// 			}
// 		}
// 	}
// })

// Below is my attempt to do project with nodelist.forEach

// replaceAllButton.addEventListener("click", () => {
// 	let findVal = findInput.value;
// 	let replaceVal = replaceInput.value;
// 	rowElements.forEach((row) => {
// 		let cellElements = getCellElements(row);
// 		cellElements.forEach(cell => {
// 			let cellCopy = cell.innerHTML;
// 			if (cellCopy.includes(findVal)) {
// 				let regexpress = new RegExp(findVal);
// 				let newVal = cellCopy.replace(regexpress, replaceVal);
				
// 	})
// })
// 	})
// 	})