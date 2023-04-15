let homeScore = document.getElementById("homescore")
let scoreA = 0

function incrementByOneA () {
    scoreA += 1
    homeScore.textContent = scoreA
}

function incrementByTwoA () {
    scoreA += 2
    homeScore.textContent = scoreA
}

function incrementByThreeA () {
    scoreA += 3
    homeScore.textContent = scoreA
}


let guestScore = document.getElementById("guestscore")
let scoreB = 0

function incrementByOneB () {
    scoreB += 1
    guestScore.textContent = scoreB
}

function incrementByTwoB () {
    scoreB += 2
    guestScore.textContent = scoreB
}

function incrementByThreeB () {
    scoreB += 3
    guestScore.textContent = scoreB
}

function setToZero () {
    scoreA = 0
    homeScore.textContent = scoreA
    scoreB = 0
    guestScore.textContent = scoreB
}
