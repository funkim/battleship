export function createContainers() {
  const container = document.createElement('div');
  container.classList.add('container');
  const playBoard = document.createElement('div');
  playBoard.classList.add('playboard');
  document.body.appendChild(container);
  container.appendChild(playBoard);
  playBoard.id = 'playboard';
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

export function displayField(array) {
  let playBoard = document.getElementById('playboard');
  let i = 0;
  array.forEach((obj) => {
    i++;
    let row = document.createElement('div');
    row.id = `row${i}`;
    row.classList.add('row');
    playBoard.appendChild(row);
    shipOrNot(obj, row);

    obj.forEach((obj) => {
      // Now loops for every Array inside of the current array aka the row its currently on
      shipOrNot(obj, row);
    });
  });
}
