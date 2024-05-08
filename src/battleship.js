export class Ship {
  constructor(length) {
    this.length = length;
    this.damage = 0;
    this.sunk = false;
    this.orientation = Math.random() < 0.5 ? 'Horizontal' : 'Vertical';
  }

  hit() {
    this.damage++;
    this.isSunk();
  }

  isSunk() {
    if (this.damage === this.length) {
      this.sunk = true;
    }
  }
}

export class Gameboard {
  constructor(size) {
    this.size = size;
    this.ships = [];
    this.attacks = new Set();
    this.shipsAlive = 0;
    this.grid = this.createGrid();
  }

  createGrid() {
    const grid = [];
    for (let i = 0; i < this.size; i++) {
      let array = [];
      for (let j = 0; j < this.size; j++) {
        array.push(null);
      }
      grid.push(array);
    }
    return grid;
  }

  pushShips() {
    for (let i = 0; i < this.ships.length; i++) {
      this.createNewShip(this.ships[i]);
    }
  }

  createNewShip(ship) {
    let orientation = ship.orientation;
    let shipLength = ship.length;
    let valid = false;
    let attempts = 0;
    let maxAttempts = 100;

    while (!valid && attempts < maxAttempts) {
      attempts++;
      let row = Math.floor(Math.random() * this.size);
      let col = Math.floor(Math.random() * this.size);
      let canPlace = true;

      if (orientation === 'Horizontal') {
        if (col + shipLength > this.size) {
          canPlace = false;
        } else {
          for (let i = 0; i < shipLength; i++) {
            if (this.grid[row][col + i] !== null) {
              canPlace = false;
              break;
            }
          }
        }
      } else {
        // Vertical
        if (row + shipLength > this.size) {
          canPlace = false;
        } else {
          for (let i = 0; i < shipLength; i++) {
            if (this.grid[row + i][col] !== null) {
              canPlace = false;
              break;
            }
          }
        }
      }
      if (canPlace) {
        this.putShipOntoBoard(ship, col, row);
        valid = true;
      }
    }

    if (attempts === maxAttempts) {
      console.log('Failed to place the ship after many attempts');
    }
  }

  putShipOntoBoard(ship, col, row) {
    let orientation = ship.orientation;
    let shipLength = ship.length;
    if (orientation === 'Horizontal') {
      for (let i = 0; i < shipLength; i++) {
        this.grid[row][col + i] = ship;
      }
    } else {
      // Vertical
      for (let i = 0; i < shipLength; i++) {
        this.grid[row + i][col] = ship;
      }
    }
  }

  hitOrMiss(y, x) {
    console.log(`Coordinates clicked: (${y}, ${x})`);
    console.log(`Current cell content:`, this.grid[y][x]);
    const ship = this.grid[y][x];
    if (ship instanceof Ship) {
      ship.hit();
      this.grid[y][x] = 'Hit';
      console.log('Hit!');
    } else {
      this.grid[y][x] = 'Miss';
      console.log('Miss!');
    }
    this.attacks.add(`${y},${x}`);
  }
  allShipsDestroyed() {
    return this.ships.every((ship) => ship.sunk);
  }

  addShip(length) {
    const ship = new Ship(length);
    this.ships.push(ship);
  }
}

export class Player {
  constructor(type) {
    this.type = type;
    this.gameBoard = new Gameboard(8);
    this.gameBoard.addShip(1);
    this.gameBoard.addShip(2);
    this.gameBoard.addShip(3);
    this.gameBoard.addShip(4);
    this.gameBoard.addShip(5);
    this.gameBoard.pushShips();
  }
}
