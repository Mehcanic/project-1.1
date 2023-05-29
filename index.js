import Grid from './js/objects/grid.js';
import Player from './js/objects/player.js';
import Item from './js/objects/item.js';


let grid = new Grid(10, 25);
let player = new Player(4, 4);
let gun = new Item(15, 1, 'gun');
let ammo = new Item(11, 2, 'ammo');
let healthPotion = new Item(2, 2, 'healthPotion');
let cover = new Item(2, 3, 'cover');

gun.placeItem(grid);
ammo.placeItem(grid);
healthPotion.placeItem(grid);
cover.placeItem(grid);
player.move('right', grid);
player.move('down', grid);
grid.drawGrid();

window.addEventListener('keydown', function(e) {
  let direction;
  if(e.key === 'ArrowUp') {
    direction = 'up';
  }
  else if(e.key === 'ArrowDown') {
    direction = 'down';
  }
  else if(e.key === 'ArrowLeft') {
    direction = 'left';
  }
  else if(e.key === 'ArrowRight') {
    direction = 'right';
  }
  player.move(direction, grid);
  grid.drawGrid();
});