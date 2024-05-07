import { style } from './style.css';
import { Ship, Gameboard, Player } from './battleship.js';
import { displayField, createContainers } from './dom.js';
const Real = new Player('Real');
const Robot = new Player('Robot');
createContainers();
displayField(Real.gameBoard.grid, 'Real');
displayField(Robot.gameBoard.grid, 'Robot');
