
export class Ship
{
    constructor(length)
    {
        this.length = length;
        this.damage = 0;
        this.sunk = false; 
        this.orientation = Math.random() < 0.5 ? 'Horizontal' : 'Vertical';
    }

    hit() {
        this.damage++
        this.isSunk();
    }

    isSunk() {
        if (this.damage === this.length) { 
            this.sunk = true;
        }
    }

}

export class Gameboard
{
    constructor(size)
    {
        this.size = size;
        this.ships = [];
        this.attacks = new Set();
        this.shipsAlive = 0;
        this.grid = this.createGrid();
    }

    createGrid() {
        const grid = []
        for(let i = 0; i < this.size; i++) {
            let array = [];
            for(let j = 0; j < this.size; j++) {
                array.push(null)
            }
            grid.push(array)
    }
    return grid;
}


createNewShip(ship) {
    let orientation = ship.orientation;
    let shipLength = ship.length;
    let valid = false;

    while (!valid) {
        let row = Math.floor(Math.random() * this.size);
        let col = Math.floor(Math.random() * this.size);
        let canPlace = true;

        if (orientation === 'Horizontal') {
            if (col + shipLength > this.size) canPlace = false; 
            else {
                for (let i = 0; i < shipLength; i++) {
                    if (this.grid[col + i][row] !== null) {
                        canPlace = false;
                        break;
                    }
                }
            }
        } else { 
            if (row + shipLength > this.size) canPlace = false; 
            else {
                for (let i = 0; i < shipLength; i++) {
                    if (this.grid[col][row + i] !== null) {
                        canPlace = false;
                        break;
                    }
                }
            }
        }

        if (canPlace) {
            putShipOntoBoard(ship)
            valid = true; 
        }
    }
}

putShipOntoBoard(ship) {
    let orientation = ship.orientation
            if (orientation === 'Horizontal') {
                for (let i = 0; i < shipLength; i++) {
                    this.grid[col + i][row] = ship; 
                }
            } else { 
                for (let i = 0; i < shipLength; i++) {
                    this.grid[col][row + i] = ship; 
                }
            }
}

    receiveAttack(x, y) {

    }

    allShipsDestroyed() {
        return this.ships.every(ship => ship.sunk);
    }
}


export class Player
{
    constructor(type, gameBoard) {
        this.type = type;
        this.gameBoard = gameBoard
    }

}