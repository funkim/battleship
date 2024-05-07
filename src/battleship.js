
export class Ship
{
    constructor(length)
    {
        this.length = length;
        this.damage = 0;
        this.sunk = false;
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
        const grid = [];
        for (let i = 0; i < this.size; i++) {
        grid[i] = Array(this.size).fill(null);
    }
        return grid;
}

    createShips() {
        const shipLengths = [5, 4, 3, 3, 2];
        for (const length of shipLengths) {
        this.ships.push(new Ship(length));
    }
        this.shipsAlive = this.ships.length;
    }


    placeShips() {
    for (const ship of this.ships) {
        let placed = false;
        while (!placed) {
            const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
            const x = Math.floor(Math.random() * this.size);
            const y = Math.floor(Math.random() * this.size);

            if (this.canPlaceShip(ship, x, y, orientation)) {
                this.placeShip(ship, x, y, orientation);
                placed = true;
                }
            }
        }
    }

    canPlaceShip(ship, x, y, orientation) {
        if (orientation === 'horizontal') {
            if (x + ship.length > this.size) return false;
            for (let i = x; i < x + ship.length; i++) {
            if (this.grid[y][i] !== null) return false;
            }
            } else {
            if (y + ship.length > this.size) return false;
            for (let i = y; i < y + ship.length; i++) {
            if (this.grid[i][x] !== null) return false;
            }
        }
        return true;
    }

    placeShip(ship, x, y, orientation) {
        if (orientation === 'horizontal') {
        for (let i = x; i < x + ship.length; i++) {
            this.grid[y][i] = ship;
        }
        } else {
        for (let i = y; i < y + ship.length; i++) {
            this.grid[i][x] = ship;
        }
        }
    }

    receiveAttack(x, y) {
        const coord = `${x},${y}`;
        if (this.attacks.has(coord)) {
        return false;
        }
        this.attacks.add(coord);
        const ship = this.grid[y][x];
        if (ship !== null) {
        ship.hit();
        }
        return true;
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