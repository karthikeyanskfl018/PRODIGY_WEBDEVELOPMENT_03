let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

function handleCellClick(index) {
  if (!gameActive || board[index] !== "") return;

  board[index] = currentPlayer;
  document.getElementById("board").children[index].innerText = currentPlayer;

  if (checkWinner()) {
    document.getElementById(
      "result"
    ).innerText = `Player ${currentPlayer} wins!`;
    gameActive = false;
  } else if (board.every((cell) => cell !== "")) {
    document.getElementById("result").innerText = "It's a draw!";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    document.getElementById(
      "result"
    ).innerText = `Player ${currentPlayer}'s turn`;
  }
}

function checkWinner() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  return winConditions.some((condition) =>
    condition.every((index) => board[index] === currentPlayer)
  );
}

function resetGame() {
  currentPlayer = "X";
  board = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;

  document.getElementById("result").innerText = "";

  const cells = document.getElementById("board").children;
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
  }
}

// Dynamically create the Tic-Tac-Toe board
const boardElement = document.getElementById("board");
for (let i = 0; i < 9; i++) {
  const cell = document.createElement("div");
  cell.className = "cell";
  cell.addEventListener("click", () => handleCellClick(i));
  boardElement.appendChild(cell);
}
