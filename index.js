/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertEl = document.getElementById('convert-el')

const lengthEl = document.getElementById('length-el')
const volumeEl = document.getElementById('volume-el')
const massEl = document.getElementById('mass-el')


convertEl.addEventListener('click', function() {
    let value = document.getElementById('value-el').value
    
    lengthEl.textContent = convertLength(value)
    volumeEl.textContent = convertVolume(value)
    massEl.textContent = convertMass(value)
    document.getElementById('value-el').value = ''
})

function convertLength(val) {
    return `${val} meter(s) = ${(val * 3.281).toFixed(3)} feet | ${val} feet = ${(val / 3.281).toFixed(3)} meter(s)`
}

function convertVolume(val) {
    return `${val} liter(s) = ${(val * 0.264).toFixed(3)} gallon(s) | ${val} gallon(s) = ${(val / 0.264).toFixed(3)} liter(s)`
}

function convertMass(val) {
    return `${val} kilo(s) = ${(val * 2.204).toFixed(3)} pound(s) | ${val} pound(s) = ${(val / 2.204).toFixed(3)} kilo(s)`
}
