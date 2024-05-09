import { shipOrNot, displayField } from './dom';
import { Real, Robot } from '.';

export function setupGameboardListeners(gameboard, playerType) {
  const boardId = playerType === 'Real' ? 'playboardOne' : 'playboardTwo';
  const gameboardElement = document.getElementById(boardId);

  gameboardElement.addEventListener('click', function (event) {
    const cell = event.target.closest('.game-cell');
    if (
      cell &&
      !cell.classList.contains('hit') &&
      !cell.classList.contains('miss')
    ) {
      const y = parseInt(cell.parentNode.dataset.y, 10);
      const x = parseInt(cell.dataset.x, 10);
      gameboard.hitOrMiss(y, x);
      cell.classList.add('clicked');

      if (playerType === 'Robot') {
        robotAttack(Real.gameBoard, 'Real');
      }

      const cellObj = gameboard.grid[y][x];
      cell.removeEventListener('click', handleCellClick);
      displayField(gameboard.grid, playerType);
    }
  });

  function handleCellClick(event) {
    const cell = event.target;
    const y = parseInt(cell.parentNode.dataset.y, 10);
    const x = parseInt(cell.dataset.x, 10);
    gameboard.hitOrMiss(y, x);
    cell.classList.add('clicked');

    const cellObj = gameboard.grid[y][x];
    shipOrNot(cellObj, cell);

    cell.removeEventListener('click', handleCellClick);

    displayField(gameboard.grid, playerType);
  }

  const cells = gameboardElement.querySelectorAll('.game-cell');
  cells.forEach((cell) => {
    cell.addEventListener('click', handleCellClick);
  });
}

function robotAttack(gameboard, playerType) {
  let validMove = false;

  while (!validMove) {
    const row = Math.floor(Math.random() * gameboard.size);
    const col = Math.floor(Math.random() * gameboard.size);

    if (!gameboard.attacks.has(`${row},${col}`)) {
      gameboard.hitOrMiss(row, col);
      validMove = true;
    }
  }

  displayField(gameboard.grid, playerType);
}
