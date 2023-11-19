// Select the dodger element from the document
const dodger = document.getElementById("dodger");

// Function to move the dodger to the left
function moveDodgerLeft() {
  // Get the current left position, remove 'px', and convert it to a number
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  // Check if the dodger is not at the left edge
  if (left > 0) {
    // Move the dodger 1 pixel to the left
    dodger.style.left = `${left - 1}px`;
  }
}

// Function to move the dodger to the right
function moveDodgerRight() {
  // Get the current left position, remove 'px', and convert it to a number
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  // Calculate the maximum left position (game field width minus dodger width)
  const maxLeftPosition = 400 - 40; // Game field is 400px wide, dodger is 40px wide

  // Check if the dodger is not at the right edge
  if (left < maxLeftPosition) {
    // Move the dodger 1 pixel to the right
    dodger.style.left = `${left + 1}px`;
  }
}

// Add an event listener for the keydown event
document.addEventListener("keydown", function(e) {
  // Check if the left arrow key was pressed
  if (e.key === "ArrowLeft") {
    // Move the dodger to the left
    moveDodgerLeft();
  }
  // Check if the right arrow key was pressed
  else if (e.key === "ArrowRight") {
    // Move the dodger to the right
    moveDodgerRight();
  }
});
