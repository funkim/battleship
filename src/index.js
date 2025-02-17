import { style } from './style.css';
import { Ship, Gameboard, Player } from './battleship.js';
import { displayField, createContainers } from './dom.js';
import { setupGameboardListeners } from './interactions.js';

export const Real = new Player('Real');
export const Robot = new Player('Robot');
createContainers();

setupGameboardListeners(Robot.gameBoard, 'Robot');
setupGameboardListeners(Real.gameBoard, 'Real');

displayField(Robot.gameBoard.grid, 'Robot');
displayField(Real.gameBoard.grid, 'Real');
