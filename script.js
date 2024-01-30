const container = document.querySelector('#container')
const reset = document.querySelector('#btnReset')
const slider = document.querySelector('#btnSlider')
const eraser = document.querySelector('#btnEraser')
const color = document.querySelector('#btnColor')
const brush = document.querySelector('#btnBrush')
const rainbow = document.querySelector('#btnRainbow')
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
            gridSquare.setAttribute('style', `height: ${gridsquareSize}px; width: ${gridsquareSize}px;`)
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
        pixel.addEventListener('mouseover', mouseevent => {
            if (mouseevent.buttons === 1) {
                pixel.style.background = `${color.value}`
            }
        })
    })
}

function drawRainbow() {
    const gridSquare = document.querySelectorAll('.grid-square')
    gridSquare.forEach((pixel) => {
        pixel.addEventListener('mouseover', mouseevent => {
            if (mouseevent.buttons === 1) {
                pixel.style.background = `#${Math.floor(Math.random()*16777215).toString(16)}`
            }
        })
    })
}

function eraseSquare() {
    const gridSquare = document.querySelectorAll('.grid-square')
    gridSquare.forEach((pixel) => {
        pixel.addEventListener('mouseover', mouseevent => {
            if (mouseevent.buttons === 1) {
                pixel.style.background = 'white'
            }
        })
    })
}

function clearGrid() {
    const gridSquare = document.querySelectorAll('.grid-square')
    gridSquare.forEach((pixel) => {
        pixel.style.background = 'white'
    })
}

reset.addEventListener('click', function() {
    clearGrid()
})

slider.addEventListener('change', function() {
    createGrid(this.value)
})

eraser.addEventListener('click', function() {
    eraseSquare()
})

brush.addEventListener('click', function() {
    drawSquare()
})

rainbow.addEventListener('click', function() {
    drawRainbow()
})

createGrid(16)