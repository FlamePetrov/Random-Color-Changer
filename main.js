const square1 = document.getElementById('square1')
const square2 = document.getElementById('square2')

let colors = [
    'red',
    'green',
    'blue',
    "yellow",
    "purple",
    "black",
    "grey",
    "pink",
    "orange",
    "brown",
    "cyan"
]
let n = colors.length

const clearBtn = document.getElementById('clearColor')
const randomBtn = document.getElementById('randomColor')
const addBtn = document.getElementById('addColor')

let counter = document.getElementById('counter')

const inputBox = document.getElementById('inputBox')
const addColorBtn = document.getElementById('add')


clearBtn.addEventListener('click', ClearScreen)
randomBtn.addEventListener('click', RandomColor)
addBtn.addEventListener('click', ShowInputBox)
addColorBtn.addEventListener('click', AddColor)

function ClearScreen(){
    square1.style.backgroundColor = 'white'
    square2.style.backgroundColor = 'white'
}

function RandomColor(){  
        let x1 = Math.floor(Math.random()*n)
        let x2 = Math.floor(Math.random()*n)
        square1.style.backgroundColor = colors[x1]
        square2.style.backgroundColor = colors[x2] 
     
}

function ShowInputBox(){
    document.getElementById('counterDiv').style.display = 'block'
    inputBox.style.display = 'block'
    addColorBtn.style.display = 'block'
    counter.innerText = n
}
function AddColor(){
    let value = inputBox.value
    colors.concat(value, "")
    inputBox.value = ""
    n += 1
    counter.innerText = n
}


