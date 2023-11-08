// Select the  element
const grid = document.querySelector('.grid');
const resetButton = document.querySelector('#resetButton')

// Generate the initial grid
let size = 16;
generateGrid(size);

// Reset the grid on request
resetButton.addEventListener('click', () => {
  let newSize = prompt("How big grid do you want:", 16);
  grid.innerHTML = '';
  generateGrid(newSize);
})

function generateGrid(size) {
  // Generate a row {size} times
  for (let vertical = 1; vertical <= size; vertical++) {
    // Create a row element with propper class/id
    let row = document.createElement('div');
    row.className = 'row';
    row.id = `row${vertical}`;
    
    grid.appendChild(row);
    currentRow = document.querySelector(`#row${vertical}`);
    
    // Generate {size} squares in that specific row
    for (let horizontal = 1; horizontal <= size; horizontal++) {
      // Generate a square element of propper class
      let square = document.createElement('div');
      square.className = 'square';
      currentRow.appendChild(square);

      // Change the square color on mouseover
      square.addEventListener('mouseover', () => {
        square.style.backgroundColor = '#221522';
      });
    }
  }
}
