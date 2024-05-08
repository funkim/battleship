import { Ship } from './battleship';
export function createContainers() {
  const container = document.createElement('div');
  const playerOnePlayBoard = document.createElement('div');
  const playerTwoPlayBoard = document.createElement('div');
  container.classList.add('container');
  playerOnePlayBoard.classList.add('playboard');
  playerTwoPlayBoard.classList.add('playboard');
  document.body.appendChild(container);
  container.appendChild(playerOnePlayBoard);
  container.appendChild(playerTwoPlayBoard);
  playerOnePlayBoard.id = 'playboardOne';
  playerTwoPlayBoard.id = 'playboardTwo';
}

function shipOrNot(obj, cell) {
  if (obj instanceof Ship) {
    cell.textContent = obj.length;
    cell.classList.add('ship');
  } else if (obj === 'Hit') {
    cell.textContent = 'X';
    cell.classList.add('hit');
  } else if (obj === 'Miss') {
    cell.textContent = 'O';
    cell.classList.add('miss');
  } else {
    cell.textContent = '~';
    cell.classList.add('empty');
  }
}

export function displayField(array, player) {
  let playboardOne = document.getElementById('playboardOne');
  let playboardTwo = document.getElementById('playboardTwo');
  let i = 0;
  if (player == 'Real') {
    rowLoops(playboardOne, array, i);
  } else if (player == 'Robot') {
    rowLoops(playboardTwo, array, i);
  }
}

function rowLoops(gameboard, array, i) {
  gameboard.innerHTML = ''; // Clear the existing gameboard UI
  array.forEach((obj) => {
    i++;
    let row = document.createElement('div');
    row.id = `row${i}`;
    row.classList.add('row', 'game-row');
    gameboard.appendChild(row);

    obj.forEach((obj) => {
      let cell = document.createElement('div');
      cell.classList.add('cell', 'game-cell');
      row.appendChild(cell);
      shipOrNot(obj, cell);
    });
  });
}
