$(document).ready(function () {
  // Initialize current div index
  var currentDivIndex = 0;
  var totalDivs = 3;
  var isDiv2FirstVisit = true;
  var firstNavPressed = false;

  // window.addEventListener("orientationchange", function () {
  //   if (window.orientation === 0) {
  //     alert("For best experience, please rotate your device to landscape mode.");
  //     // You can also trigger a full-screen overlay similar to the CSS example above
  //   }
  // }, false);

  $('#goToInstructions').on('click touchstart', function () {
    window.transitionToPreviousDiv();
  });

  $('#goToCanvas').on('click touchstart', function () {
    transitionToNextDiv();
  });

  $('#navigateFromFirstDiv').on('click touchstart', function () {
    if (!firstNavPressed) {
      transitionToNextDiv();
      firstNavPressed = true;
    }
    // transitionToNextDiv();

  });

  // Function to update the background image
  function updateBackgroundImage() {
    if (currentDivIndex === 0) {
        // If div1 is active, set the image background
        $('body').css('background-image', 'url("../Media/image.jpeg")');
    } else {
        // If div2 or div3 are active, set the background to white
        $('body').css('background-image', 'none');
        $('body').css('background-color', 'white');
    }
  }


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

      if (currentDivIndex === 1 && isDiv2FirstVisit) {
        // Autoplay Vimeo video
        $("#vimeoVideo").attr("src", "https://player.vimeo.com/video/886620905?h=02ebc099d2&color=ffffff&badge=0&autoplay=1");
        isDiv2FirstVisit = false;
      }

      // Fade in the next div
      $("#div" + (currentDivIndex + 1)).fadeTo(500, 1, function() {
        updateBackgroundImage();
      });

      // Play the video when div2 becomes active
      if (currentDivIndex === 1) {
        var video = document.getElementById("myVideo");
        video.play();
      }

    });
  }

  // Function to transition to the previous div
  window.transitionToPreviousDiv = function () {
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
      $("#div" + (currentDivIndex + 1)).fadeTo(500, 1, function() {
        updateBackgroundImage();
      });

    });
  }

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

$(document).ready(function () {
  $(document).on('mousemove', function (e) {
    $('#circularcursor').css({
      left: e.pageX,
      top: e.pageY
    });
  })
});