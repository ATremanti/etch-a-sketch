const container = document.querySelector('#container')
let rows = 16;

function createRow() {
    const row = document.createElement('div')
    row.classList.add('row')
    container.appendChild(row)
    for (i = 1; i <= rows; i++) {
        const square = document.createElement('div')
        square.classList.add('grid-div')
        row.appendChild(square)
    }
}

function createGrid() {
    for (n = 0; n < rows; n++) {
        createRow()
    }
}

function clearGrid() {
    const pixel = document.querySelectorAll('.grid-div')
    pixel.forEach((pixel) => {
        pixel.classList.remove('colored')
    })
}

window.onload = function () {
    const pixel = document.querySelectorAll('.grid-div')
    pixel.forEach((pixel) => {
        pixel.addEventListener('mouseenter', () => {
            pixel.classList.add('colored')
        })
    })    
}

const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
    clearGrid()
})

createGrid()