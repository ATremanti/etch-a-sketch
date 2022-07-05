const container = document.querySelector('#container')
const reset = document.querySelector('#btnReset')
const slider = document.querySelector('#btnSlider')
const gridSize = document.querySelector('#size')

gridSize.textContent = slider.value
slider.oninput = function() {
    gridSize.textContent = this.value
}

function createGrid(size) {
    const gridsquareSize = (500/(size))
    resizeGrid()
    for (i = 0; i < size; i++) {
        const gridColumn = document.createElement('div')
        container.appendChild(gridColumn)
        for (j = 0; j < size; j++) {
            const gridSquare = document.createElement('div')
            gridSquare.classList.add('grid-square')
            gridSquare.setAttribute('style', `height: ${gridsquareSize}px; width: ${gridsquareSize}px`)
            gridColumn.appendChild(gridSquare)
        }
    }
    drawSquare()
}

function resizeGrid() {
    let container = document.getElementById('container')
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

function drawSquare() {
    const gridSquare = document.querySelectorAll('.grid-square')
    gridSquare.forEach((pixel) => {
        pixel.addEventListener('mouseenter', function() {
            pixel.classList.add('colored')
        })
    })
}

function clearGrid() {
    const gridSquare = document.querySelectorAll('.grid-square')
    gridSquare.forEach((pixel) => {
        pixel.classList.remove('colored')
    })
}

reset.addEventListener('click', function() {
    clearGrid()
})

slider.addEventListener('change', function() {
    createGrid(this.value)
})

createGrid(16)