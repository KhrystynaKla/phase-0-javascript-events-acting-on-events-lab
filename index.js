// Your code here
const dodger = document.getElementById("dodger");
const game = document.getElementById('game');
dodger.style.backgroundColor = "#000000";
dodger.style.backgroundColor="#FF69B4";

  function moveDodgerLeft() {
    const leftString = dodger.style.left.replace("px", "");
    const leftNumber = parseInt(leftString, 10);
    if (leftNumber > 0) {
      dodger.style.left = `${leftNumber - 1}px`;
    }
  }

  function moveDodgerRight() {
    const leftString = dodger.style.left.replace("px", "");
    const leftNumber = parseInt(leftString, 10);
    if (leftNumber < 360) {
      dodger.style.left = `${leftNumber + 1}px`;
    }
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
      moveDodgerRight();
    }
  });