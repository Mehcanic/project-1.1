export default class Grid {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.gridItems = [];
    for(let i = 0; i < rows; i++){
      this.gridItems[i] = [];
      for(let j = 0; j < cols; j++){
        this.gridItems[i][j] = 0; // 0 means an empty cell
      }
    }
  }

  drawGrid() {
    let grid = document.createElement('div');
    grid.id = 'grid-container';
    grid.style.gridTemplateRows = `repeat(${this.rows}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${this.cols}, 1fr)`;

    for(let i = 0; i < this.rows; i++){
      for(let j = 0; j < this.cols; j++){
        let cell = document.createElement('div');

        switch(this.gridItems[i][j]) {
          case 1:
            cell.className = 'player';
            break;
          case 2:
            cell.className = 'gun';
            break;
          case 3:
            cell.className = 'ammo';
            break;
          case 4:
            cell.className = 'healthPotion';
            break;
          case 5:
            cell.className = 'cover';
            break;
          
          default:
            cell.className = '';
            break;
        }
        grid.appendChild(cell);
      }
    }
    document.body.innerHTML = ''; // clear previous grid
    document.body.appendChild(grid);
  }
}