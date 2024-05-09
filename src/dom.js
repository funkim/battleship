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

export function shipOrNot(obj, cell, player) {
  if (player === 'Real') {
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
  } else {
    if (obj instanceof Ship) {
      cell.textContent = '~';
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
}

export function displayField(array, player) {
  let playboardOne = document.getElementById('playboardOne');
  let playboardTwo = document.getElementById('playboardTwo');
  let i = 0;
  if (player == 'Real') {
    rowLoops(playboardOne, array, 'Real');
  } else if (player == 'Robot') {
    rowLoops(playboardTwo, array, 'Robot');
  }
}

function rowLoops(gameboard, array, player) {
  gameboard.innerHTML = ''; // Clear the existing gameboard UI
  array.forEach((rowArray, rowIndex) => {
    let row = document.createElement('div');
    row.id = `row${rowIndex}`;
    row.classList.add('row', 'game-row');
    row.dataset.y = rowIndex;
    gameboard.appendChild(row);

    rowArray.forEach((cellObj, cellIndex) => {
      let cell = document.createElement('div');
      cell.classList.add('cell', 'game-cell');
      cell.dataset.x = cellIndex;
      row.appendChild(cell);
      shipOrNot(cellObj, cell, player);
    });
  });
}
