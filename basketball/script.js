let homeboard = document.getElementsByClassName("homescore")[0]
let awayboard = document.getElementsByClassName("awayscore")[0]
let hcount = 0
let acount = 0

function onehp() {
    hcount += 1
    homeboard.textContent = hcount
}

function twohp() {
    hcount += 2
    homeboard.textContent = hcount
}

function threehp() {
    hcount += 3
    homeboard.textContent = hcount
}

function oneap() {
    acount += 1
    awayboard.textContent = acount
}

function twoap() {
    acount += 2
    awayboard.textContent = acount
}

function threeap() {
    acount += 3
    awayboard.textContent = acount
}

function hreset() {
    homeboard.textContent = 0
    hcount = 0
}

function areset() {
    awayboard.textContent = 0
    acount = 0
}


 