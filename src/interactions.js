export function setupGameboardListeners(gameboard) {
  const rows = document.querySelectorAll('.game-row');
  rows.forEach((row, y) => {
    const cells = row.querySelectorAll('.game-cell');
    cells.forEach((cell, x) => {
      cell.addEventListener('click', function (event) {
        event.preventDefault();
        if (
          !cell.classList.contains('hit') &&
          !cell.classList.contains('miss')
        ) {
          gameboard.hitOrMiss(x, y);
          displayField(gameboard.grid, gameboard.player);
        }
      });
    });
  });
}
