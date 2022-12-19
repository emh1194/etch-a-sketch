const grid = document.getElementById('grid');
const display = document.getElementById('sizeDisplay');
const btn = document.getElementById('sizeSelectBtn');

let gridSize = 16;
window.onload = createGrid();

btn.addEventListener('click', function() {
    let size = prompt('Enter a number between 1 and 100:');
    size = Number(size);
    if (size >= 1 && size <= 100) {
        gridSize = size;
        clearGrid();
        changeDisplay();
        createGrid();
    } else {
        alert('Make sure your number is between 1 and 100');
    };
});

function changeDisplay() {
    display.textContent = `Current Size: ${gridSize} x ${gridSize}`;
}

function createGrid() {
grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (i = 0; i <= gridSize * gridSize; i++) {
        const div = document.createElement('div');
        grid.appendChild(div);

        div.addEventListener('mouseover', function() {
            div.classList.add('active');
    });
    }
}

function clearGrid() {
    grid.innerHTML = '';
}
