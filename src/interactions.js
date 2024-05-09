import { shipOrNot, displayField } from './dom';

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

      const cellObj = gameboard.grid[y][x];
      shipOrNot(cellObj, cell);
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

  // Attach the handleCellClick function to each cell
  const cells = gameboardElement.querySelectorAll('.game-cell');
  cells.forEach((cell) => {
    cell.addEventListener('click', handleCellClick);
  });
}
