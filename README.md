# project-find-and-replace-starter
The Scenario
We are developers on a team building a custom spreadsheet app for a local company to display customer data. We recently started development, so not all the features are present yet! But we do have some basic spreadsheet code already written.

Today, you have accepted a task to add a basic "find & replace" feature to our app.

You will find more helpful notes in the comments of your starter code.



## Get Started

 [x]  Fork and clone the starter repository.

[x]  Read the following requirements.

[x]  Implement the requirements.

### Requirements

[x]  Add a click event listener to the replaceAllButton.
  
  [x]  On click but outside of a loop, assign the values of the two input textboxes ( findInput and replaceInput), so that you are only retrieving these values once per click.

[x] Write a loop which loops over the rowElements array (which is already provided in the starter code).

[x] Inside this loop, use the getCellElements() function (already provided in the starter code) and assign the resulting array of cell elements to a variable.

[x] Write a nested loop which loops over the array of cell elements.

 [x] For each cell element, check if a cell contains the user-provided search string. Use the string method includes().

[x] If a cell does contain the user-provided search string, use innerHTML and the string method replace() to replace the user-provided search string with the user-provided replacement string.

 [x] In all your loops, use distinct counters like "i" and "j".

### Stretch Goals
[ ] Write a loop which loops over the rowElements array (which is already provided in the starter code).
 Display for the user the number of items replaced during the most recent replace button press. But do so with JavaScript, without changing the HTML file by hand. You can add some CSS for this.

[ ] Write a loop which loops over the rowElements array (which is already provided in the starter code).
 In addition to the "Replace All" button, create a "Replace One" button which only replaces the first occurrence of the found search string.

[ ] Write a loop which loops over the rowElements array (which is already provided in the starter code).

[ ]  Add a checkbox which toggles case-insensitive searches.

[ ] Write a loop which loops over the rowElements array (which is already provided in the starter code).
 Research and use LocalStorage and JSON.stringify() to store a history of the user-provided search strings which will persist beyond page refreshes. On page load, display any past search history in a console.log.
