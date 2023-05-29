export default class Item {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type; // 'gun', 'healthPotion', or 'cover'
  }

  placeItem(grid) {
    let itemCode;
    if (this.type === 'gun') {
      itemCode = 2;
    } else if (this.type === 'ammo') {
      itemCode = 3;
    } else if (this.type === 'healthPotion') {
      itemCode = 4;
    } else if (this.type === 'cover') {
      itemCode = 5;
    }
    grid.gridItems[this.y][this.x] = itemCode;
  }
}