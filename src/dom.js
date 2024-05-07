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

function shipOrNot(obj, row) {
  if (obj === 1 || obj === 2 || obj === 3 || obj === 4 || obj === 5) {
    let ship = document.createElement('div');
    row.appendChild(ship).textContent = obj;
  } else {
    let emptySpace = document.createElement('div');
    row.appendChild(emptySpace);
    emptySpace.classList.add('empty');
    emptySpace.textContent = '~';
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
  array.forEach((obj) => {
    i++;
    let row = document.createElement('div');
    row.id = `row${i}`;
    row.classList.add('row');
    gameboard.appendChild(row);
    shipOrNot(obj, row);

    obj.forEach((obj) => {
      // Now loops for every Array inside of the current array aka the row its currently on
      shipOrNot(obj, row);
    });
  });
}
