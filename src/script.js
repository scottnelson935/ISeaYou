$(document).ready(function () {
  // Initialize current div index
  var currentDivIndex = 0;
  var totalDivs = 3;

  // Function to transition to the next div
function transitionToNextDiv() {
  // Fade out the current div
  $("#div" + (currentDivIndex + 1)).fadeTo(500, 0, function () {
    // Remove the active class from the current div
    $("#div" + (currentDivIndex + 1)).removeClass("active");

    // Increment the current div index
    currentDivIndex++;
    console.log("Current div index: " + currentDivIndex);

    // Check if current div index exceeds total divs
    if (currentDivIndex >= totalDivs) {
      currentDivIndex = 0; // Reset current div index to start over
    }

    // Add the active class to the next div
    $("#div" + (currentDivIndex + 1)).addClass("active");
    console.log("Adding active class to div #" + (currentDivIndex + 1));

    // Fade in the next div
    $("#div" + (currentDivIndex + 1)).fadeTo(500, 1);
  });
}

// Function to transition to the previous div
function transitionToPreviousDiv() {
  // Fade out the current div
  $("#div" + (currentDivIndex + 1)).fadeTo(500, 0, function () {
    // Remove the active class from the current div
    $("#div" + (currentDivIndex + 1)).removeClass("active");

    // Decrement the current div index
    currentDivIndex--;
    console.log("Current div index: " + currentDivIndex);

    // Check if current div index is less than 0
    if (currentDivIndex < 0) {
      currentDivIndex = totalDivs - 1; // Set current div index to the last div index
    }

    // Add the active class to the previous div
    $("#div" + (currentDivIndex + 1)).addClass("active");
    console.log("Adding active class to div #" + (currentDivIndex + 1));

    // Fade in the previous div
    $("#div" + (currentDivIndex + 1)).fadeTo(500, 1);
  });
}


  // // Mouse click event listener
  // $(document).on("click", function () {
  //   transitionToNextDiv();
  //   console.log(currentDivIndex);
  // });

  // Keyboard event listener
  $(document).on("keydown", function (event) {
    // Check if it's a right arrow key (key code 39) or spacebar (key code 32)
    if (event.keyCode === 39 || event.keyCode === 32) {
      if (currentDivIndex !== totalDivs - 1) {
        transitionToNextDiv();
        console.log(currentDivIndex);
      }
    }
    // Check if it's a left arrow key (key code 37)
    else if (event.keyCode === 37) {
      if (currentDivIndex !== 0) {
        transitionToPreviousDiv();
        console.log(currentDivIndex);
      }
    }
  });
});
