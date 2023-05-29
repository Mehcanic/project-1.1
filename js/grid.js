function createGrid() {
  const grid = document.getElementById('grid-container');
  const gridItems = [];

  function setColumnNumber() {
    const screenWidth = window.innerWidth;
    let newColumnNumber;

    if (screenWidth < 480) {
      newColumnNumber = 10;
    } else if (screenWidth < 768) {
      newColumnNumber = 20;
    } else if (screenWidth < 1024) {
      newColumnNumber = 30;
    } else {
      newColumnNumber = 40;
    }

    return newColumnNumber;
  }   

  let columnNumber = setColumnNumber();
  let rowNumber = columnNumber / 2;

  for (let i = 0; i < columnNumber; i++) {
    const row = document.createElement('div');
    row.classList.add('column');

    for (let j = 0; j < rowNumber; j++) {
      const cell = document.createElement('div');
      cell.classList.add('row');
      row.appendChild(cell);
      gridItems.push(cell);
    }

    grid.appendChild(row);
  }

  const gridSizeStyle = document.documentElement.style.setProperty('--grid-column-size', columnNumber);
  const gridRowSizeStyle = document.documentElement.style.setProperty('--grid-row-size', rowNumber);

  window.addEventListener('resize', () => {
    const newColumnNumber = setColumnNumber();

    if (newColumnNumber !== columnNumber) {
      columnNumber = newColumnNumber;
      rowNumber = columnNumber / 2;
      grid.innerHTML = '';

      for (let i = 0; i < columnNumber; i++) {
        const row = document.createElement('div');
        row.classList.add('column');

        for (let j = 0; j < rowNumber; j++) {
          const cell = document.createElement('div');
          cell.classList.add('row');
          row.appendChild(cell);
          gridItems.push(cell);
        }

        grid.appendChild(row);
      }

      const gridSizeStyle = document.documentElement.style.setProperty('--grid-column-size', columnNumber);
      const gridRowSizeStyle = document.documentElement.style.setProperty('--grid-row-size', rowNumber);
    }
  });
}

export { createGrid };