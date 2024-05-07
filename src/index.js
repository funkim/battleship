import { style } from "./style.css"
import {Ship, Gameboard, Player} from "./battleship.js"
        // Create a gameboard
        const gameBoard = new Gameboard(8);
        gameBoard.createShips();
        gameBoard.placeShips();

        // Access these in console
        window.gameBoard = gameBoard;

        // Example of creating a player
        const player = new Player('human', gameBoard);
        window.player = player;