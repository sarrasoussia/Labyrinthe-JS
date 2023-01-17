


 mazeArray= [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
    [1, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    
  ];
  



let canvas = document.getElementById("canvas")
let context = canvas.getContext('2d')
let roadWidth = 600/ mazeArray[0].length
let roadHeight = 600/ mazeArray.length
// mazaArray[0].length represent how many squares each column
// mazaArray.length represent how many squares (walls and roads) each column.
function renderMaze(context, maze) {
    for (let i = 0; i < maze.length; i++) {
      for (let j = 0; j < maze[i].length; j++) {
        context.beginPath();
  
        context.rect(j * roadWidth, i * roadHeight, roadWidth, roadHeight)
  
        context.fillStyle = maze[i][j] === 0 ? 'transparent' : 'black';
        context.fill();
  
        context.closePath()
      }
    }
  }
  
  renderMaze(context, mazeArray)



 