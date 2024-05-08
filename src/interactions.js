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
      const y = parseInt(cell.parentNode.dataset.y, 10); // Retrieve and parse the y-coordinate from the parent row
      const x = parseInt(cell.dataset.x, 10); // Retrieve and parse the x-coordinate
      gameboard.hitOrMiss(y, x);
    }
  });
}
