document.addEventListener("DOMContentLoaded", function () {

  $(document).ready(function () {

    // Check if fullscreen is supported and handle it here
    if (document.fullscreenEnabled) {
      // Check for browsers to exclude
      if (!navigator.userAgent.includes("Edge")) {
        // User is not using Edge (exclude Edge)
        // Display an overlay with instructions and buttons to go fullscreen or dismiss the warning
        var overlayHtml = `
        <div id="overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.80); color: white; z-index: 1000; display: flex; flex-direction: column; justify-content: center; align-items: center; font-size: 1.6vw; font-family: Darker Grotesque, sans-serif; font-weight: 900;">
          <div style="display: flex; flex-direction: column; align-items: center">
            <p>THIS WEBSITE WORKS BEST IN FULLSCREEN MODE
            <br>
            <br>1. We've only tested in Chrome-based browsers
            <br>2. On a PC:
            <br>&nbsp;&nbsp;&nbsp;&nbsp;Windows' system fullscreen key is F11 (or fn + F11)
            <br>&nbsp;&nbsp;&nbsp;&nbsp;macOS' system fullscreen methods are:
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;view->'Enter fullscreen'
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fn + F
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctrl + Command + F
            <br>3. Mobile browsers may lack a fullscreen option,
            <br>&nbsp;&nbsp;&nbsp;&nbsp;but adding this page as a web app to your Home screen will run it in fullscreen:
            <br>
            <br>&nbsp;&nbsp;&nbsp;&nbsp;Android---In Chrome browser, while on this page,
            <br>&nbsp;&nbsp;&nbsp;&nbsp;press the three dots in the upper corner and then select 'Add to Home screen'.
            <br>
            <br>&nbsp;&nbsp;&nbsp;&nbsp;iPhone---In Chrome browser, while on this page,
            <br>&nbsp;&nbsp;&nbsp;&nbsp;press 'Share' and then 'Add to Home Screen'. (This may also work with Safari).
            </p>
            <button id="dismissButton" style="background: white; color: black; box-shadow: 3px 3px 5px rgba(255,255,255,0.2); border-radius: 5px; font-size: 1.5rem; width: 50%">I understand</button>
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
        // User is using a browser to be excluded (Edge)
        // Display a message indicating that fullscreen may not work in this browser
        var unsupportedBrowserMessage = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.75); color: white; z-index: 1000; display: flex; justify-content: center; align-items: center;">
          <p>Fullscreen may not work in your current browser.</p>
          <button id="dismissButton">Dismiss</button>
        </div>
      `;
        $('body').append(unsupportedBrowserMessage);

        // When the user clicks the "Dismiss" button, remove the warning
        $('#dismissButton').on('click', function () {
          // Remove the warning message
          $('#unsupportedBrowserMessage').remove();
        });
      }
    } else {
      // User's browser does not support fullscreen
      // Display a message indicating that fullscreen is not supported
      var noFullscreenSupportMessage = `
      <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.75); color: white; z-index: 1000; display: flex; justify-content: center; align-items: center;">
        <p>Your browser does not support fullscreen mode.</p>
        <button id="dismissButton">Dismiss</button>
      </div>
    `;
      $('body').append(noFullscreenSupportMessage);

      // When the user clicks the "Dismiss" button, remove the warning
      $('#dismissButton').on('click', function () {
        // Remove the warning message
        $('#noFullscreenSupportMessage').remove();
      });
    }

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
        $("#div" + (currentDivIndex + 1)).fadeTo(500, 1, function () {
          updateBackgroundImage();
        });

        // Play the video when div2 becomes active
        // if (currentDivIndex === 1) {
        //   var video = document.getElementById("myVideo");
        //   video.play();
        // }

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
        $("#div" + (currentDivIndex + 1)).fadeTo(500, 1, function () {
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

  var touchstartX = 0;
  var touchendX = 0;

  document.addEventListener("touchstart", function (event) {
    touchstartX = event.touches[0].clientX;
  });

  document.addEventListener("touchmove", function (event) {
    touchendX = event.touches[0].clientX;
  });

  document.addEventListener("touchend", function () {
    var swipeDirection = touchstartX - touchendX;
    var swipeThreshold = 400;

    if (swipeDirection > swipeThreshold) {
      // Swipe left (transition to the next div)
      transitionToPreviousDiv();
    } else if (swipeDirection < -swipeThreshold) {
      // Swipe right (transition to the previous div)
      transitionToNextDiv();
    }
    // event.preventDefault(); // Prevent default touch behavior
  });

});