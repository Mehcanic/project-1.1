export default class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ammo = 0;
    this.health = 100;
    this.gun = null;
  }

  move(direction, grid) {
    // Clear previous player position
    grid.gridItems[this.y][this.x] = 0;

    if(direction === 'up' && this.y > 0) {
      this.y--;
    }
    else if(direction === 'down' && this.y < grid.rows - 1) {
      this.y++;
    }
    else if(direction === 'left' && this.x > 0) {
      this.x--;
    }
    else if(direction === 'right' && this.x < grid.cols - 1) {
      this.x++;
    }

    // Set new player position
    grid.gridItems[this.y][this.x] = 1;
  }

  pickUpItem(item, grid) {
    if(item.type === 'gun') {
      this.gun = item;
    }
    else if(item.type === 'ammo') {
      this.ammo += item.amount;
    }
    else if(item.type === 'healthPotion') {
      this.health += item.amount;
      if (this.health > 100) this.health = 100;
    }
    else if(item.type === 'cover') {
      grid.gridItems[item.y][item.x] = 0;
    }
  }
}