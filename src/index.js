import { style } from "./style.css"
import {Ship, Gameboard, Player} from "./battleship.js"
        const gameBoard = new Gameboard(8);
        window.gameBoard = gameBoard;
gameBoard.addShip(5);
gameBoard.addShip(4);
gameBoard.addShip(3);
gameBoard.addShip(2);
gameBoard.pushShips();