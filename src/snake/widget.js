const boardWidth = 16;
const boardHeight = 10;
const board = document.getElementById("board");

const snake = {
  x: boardWidth / 2,
  y: boardHeight / 2,
  size: 5,
  direction: { x: 1, y: 0 },
};

const boardInfo = {
  previousX: [7, 6, 5, 4],
  previousY: [5, 5, 5, 5],
};

const food = {
  x: 0,
  y: 0,
};

function containsSnakeBody(x, y) {
  if (x === snake.x && y === snake.y) {
    return true;
  }
  for (let index = 0; index < snake.size; index++) {
    const currentX = boardInfo.previousX[index];
    const currentY = boardInfo.previousY[index];
    if (currentX === x && currentY === y) {
      return true;
    }
  }
  return false;
}

function renderBoard() {
  let newBoard = "";

  for (let y = 0; y < boardHeight; y++) {
    for (let x = 0; x < boardWidth; x++) {
      if (containsSnakeBody(x, y)) {
        newBoard += "*";
      } else if (x === food.x && y === food.y) {
        newBoard += "+";
      } else {
        newBoard += " ";
      }
    }
    newBoard += "\n";
  }
  board.textContent = newBoard;
}

function gameLoop() {
  generateSnake();
  snake.x += snake.direction.x;
  snake.y += snake.direction.y;

  if (snake.x >= boardWidth) {
    snake.x = 0;
  }
  if (snake.x < 0) {
    snake.x = boardWidth - 1;
  }

  if (snake.y >= boardHeight) {
    snake.y = 0;
  }
  if (snake.y < 0) {
    snake.y = boardHeight;
  }
  if (containsSnakeBody(food.x, food.y)) {
    snake.size++;
    generateFood();
  }
  renderBoard();
}

function generateFood() {
  food.x = Math.floor(Math.random() * (boardWidth - 0)) + 0;
  food.y = Math.floor(Math.random() * (boardHeight - 0)) + 0;
  if (containsSnakeBody(food.x, food.y)) {
    generateFood();
  }
}

function generateSnake() {
  boardInfo.previousX.pop();
  boardInfo.previousY.pop();
  boardInfo.previousX.unshift(snake.x);
  boardInfo.previousY.unshift(snake.y);
  if (boardInfo.previousX.length !== snake.size) {
    boardInfo.previousX.push(
      boardInfo.previousX[boardInfo.previousX.length - 1]
    );
    boardInfo.previousY.push(
      boardInfo.previousY[boardInfo.previousY.length - 1]
    );
  }
}

generateFood();
renderBoard();
setInterval(gameLoop, 500);

const keyToDirection = {
  ArrowUp: { x: 0, y: -1 },
  ArrowRight: { x: 1, y: 0 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
};

document.addEventListener("keydown", (e) => {
  if (keyToDirection[e.key]) {
    snake.direction = keyToDirection[e.key];
  }
});
