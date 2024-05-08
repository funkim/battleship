import { style } from './style.css';
import { Ship, Gameboard, Player } from './battleship.js';
import { displayField, createContainers } from './dom.js';
import { setupGameboardListeners } from './interactions.js';

const Real = new Player('Real');
const Robot = new Player('Robot');
Real.gameBoard = new Gameboard(8, 'Real');
Robot.gameBoard = new Gameboard(8, 'Robot');
createContainers();

displayField(Real.gameBoard.grid, 'Real');
displayField(Robot.gameBoard.grid, 'Robot');
setupGameboardListeners(Robot.gameBoard);
setupGameboardListeners(Real.gameBoard);
