let playerPosition = {x: 0, y: 1}
let interval=0
        
function renderPoint(position){
  context.beginPath();

  context.arc(position.x * roadWidth + 0.5 * roadWidth,
    position.y * roadHeight + 0.5 * roadHeight,
    roadWidth * 0.5, 0, Math.PI * 2)

  context.fillStyle = 'purple';
  context.fill();

  context.closePath()
}

function clearPoint(position){
  context.clearRect(position.x * roadWidth, position.y * roadWidth, roadWidth, roadWidth)
}
renderPoint(playerPosition)

function isLegalRoad(mazeArray, position){

  if (position.x < 0 || position.y >= mazeArray[0].length) {
    return false
  }

  if (position.y < 0 || position.y >= mazeArray.length) {
    return false
  }

  if (mazeArray[position.y][position.x] === 1) {
    return false
  }

  return true
}


  

window.onkeydown = function (event){
  console.log(event)
  let newPlayerPosition = null;
  switch (event.code) {
    case "ArrowRight":
      newPlayerPosition = {
        x: playerPosition.x + 1,
        y: playerPosition.y
      }
      break;
    case "ArrowLeft":
      newPlayerPosition = {
        x: playerPosition.x - 1,
        y: playerPosition.y
      }
      break;
    case "ArrowUp":
      newPlayerPosition = {
        x: playerPosition.x,
        y: playerPosition.y - 1
      }
      break;
    case "ArrowDown":
      newPlayerPosition = {
        x: playerPosition.x,
        y: playerPosition.y + 1
      }
      break;
    default :
      break;
    
      
  }

  if(newPlayerPosition != null && isLegalRoad(mazeArray, newPlayerPosition)){
      clearPoint(playerPosition)
      playerPosition = newPlayerPosition
      renderPoint(playerPosition)
  }

  if(playerPosition.x == mazeArray[0].length - 1 && playerPosition.y == mazeArray.length - 2){
    alert('you pass')
  }
}



var isWaiting = false;
var isRunning = false;
var seconds = 60;
var countdownTimer;
var finalCountdown = false;

function GameTimer() {
    var minutes = Math.round((seconds - 30) / 60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }
    document.getElementById('timer').innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        isRunning = true;
        seconds += 2;

        if (finalCountdown) {
            clearInterval(countdownTimer); // Clear the interval to stop the loop
        } else {
            finalCountdown = true; // This will allow the 2 additional seconds only once.
        }

    } else {
        isWaiting = true;
        seconds--;
    }
}
countdownTimer = setInterval(GameTimer, 1000);







