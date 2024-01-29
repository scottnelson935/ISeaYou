document.addEventListener("DOMContentLoaded", function () {

  $(document).ready(function () {

    // Initialize variables to prevent multiple button presses
    var canNavigateToInstructions = true;
    var canNavigateToCanvas = true;

    var isTransitioning = false;

    // Check if fullscreen is supported and handle it here
    if (document.fullscreenEnabled) {
      // Check for browsers to exclude
      if (!navigator.userAgent.includes("Edge")) {
        // User is not using Edge (exclude Edge)
        // Display an overlay with instructions and buttons to go fullscreen or dismiss the warning
        var overlayHtml = `
        <div id="overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.80); color: white; z-index: 1000; display: flex; flex-direction: column; justify-content: center; align-items: center; font-size: 2.3vw; font-family: eb garamond;">
          <div style="display: flex; flex-direction: column; align-items: center">
            <button id="dismissButton" style="background: white; color: black; box-shadow: 3px 3px 5px rgba(255,255,255,0.2); border-radius: 5px; font-size: 1.5rem; width: 50%; margin-bottom: -2vw; font-family: eb garamond; font-weight: 900;">I understand</button>
            <p>THIS SITE REQUIRES FULLSCREEN MODE
            <br>
            <br>For mobile, create an icon on your home screen by:
            <br>&nbsp;&nbsp;&nbsp;&nbsp;ANDROID
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pressing the three dots in the upper corner,
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;selecting 'Add to Home screen'.
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Re-enter the site from <i>I Sea You</i> &nbsp;icon on your home screen
            <br>&nbsp;&nbsp;&nbsp;&nbsp;IPHONE/IPAD
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pressing 'Share' arrow,
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;selecting 'Add to Home Screen'.
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Re-enter the site from <i>I Sea You</i> &nbsp;icon on your home screen
            </p>
          </div>
        </div>
      `;
        $('body').append(overlayHtml);

        // When the user clicks the button to go fullscreen, request fullscreen
        $('#goFullscreenButton').on('click', function () {
          document.documentElement.requestFullscreen().then(function () {
            // Redirect to the main page
            window.location.href = 'index.html';
          }).catch(function (error) {
            console.error('Fullscreen request failed:', error);
          });
        });

        // When the user clicks the "No Thanks" button, dismiss the warning and proceed
        $('#dismissButton').on('click', function () {
          // Remove the overlay
          $('#overlay').remove();
        });
      } else {

      }
    } else {

    }

    // Initialize current div index
    var currentDivIndex = 0;
    var totalDivs = 3;
    var isDiv2FirstVisit = true;
    var firstNavPressed = false;
    var lastClickTime = 0;
    var clickThreshold = 50;

    $('#goToInstructions').on('click touchstart', function () {
      // Check if it's allowed to navigate
      if (canNavigateToInstructions) {
        canNavigateToInstructions = false; // Disable further presses temporarily
        window.transitionToPreviousDiv();
        // Enable navigation after a delay (adjust the delay duration as needed)
        setTimeout(function () {
          canNavigateToInstructions = true;
        }, 1000); // 1 second delay
      }
    });

    $('#goToCanvas').on('click touchstart', function () {
      // Check if it's allowed to navigate
      if (canNavigateToCanvas) {
        canNavigateToCanvas = false; // Disable further presses temporarily
        transitionToNextDiv();
        // Enable navigation after a delay (adjust the delay duration as needed)
        setTimeout(function () {
          canNavigateToCanvas = true;
        }, 1000); // 1 second delay
      }
    });

    $('#navigateFromFirstDiv').on('click touchstart', function () {
      var currentTime = Date.now();
      if (currentTime - lastClickTime >= clickThreshold) {
        transitionToNextDiv();
        lastClickTime = currentTime;
      }
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

      if (isTransitioning) return;

      isTransitioning = true;

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
        $("#div" + (currentDivIndex + 1)).fadeTo(500, 1, function () {
          updateBackgroundImage();
        });

      });

      setTimeout(function () {
        isTransitioning = false; // Reset the flag after the transition
      }, 500); // Adjust the timeout based on your animation duration

    }

    // Function to transition to the previous div
    window.transitionToPreviousDiv = function () {

      if (isTransitioning) return; // Check the flag

      isTransitioning = true; // Set the flag

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
        $("#div" + (currentDivIndex + 1)).fadeTo(500, 1, function () {
          updateBackgroundImage();
        });

      });
      setTimeout(function () {
        isTransitioning = false; // Reset the flag after the transition
      }, 500); // Adjust the timeout based on your animation duration
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

  // Listen for fullscreen change event
  document.addEventListener('fullscreenchange', function () {
    if (document.fullscreenElement) {
      // Fullscreen mode entered
      console.log('Fullscreen mode entered');
    } else {
      // Fullscreen mode exited
      console.log('Fullscreen mode exited');
    }
  });

});