let homeScore = document.getElementById("homescore")
let scoreA = 0

function incrementByOneA () {
    scoreA += 1
    homeScore.textContent = scoreA
}
window.incrementByOneA = incrementByOneA
function incrementByTwoA () {
    scoreA += 2
    homeScore.textContent = scoreA
}
window.incrementByTwoA = incrementByTwoA
function incrementByThreeA () {
    scoreA += 3
    homeScore.textContent = scoreA
}
window.incrementByThreeA = incrementByThreeA

let guestScore = document.getElementById("guestscore")
let scoreB = 0

function incrementByOneB () {
    scoreB += 1
    guestScore.textContent = scoreB
}
window.incrementByOneB = incrementByOneB
function incrementByTwoB () {
    scoreB += 2
    guestScore.textContent = scoreB
}
window.incrementByTwoB = incrementByTwoB
function incrementByThreeB () {
    scoreB += 3
    guestScore.textContent = scoreB
}
window.incrementByThreeB = incrementByThreeB
function setToZero () {
    scoreA = 0
    homeScore.textContent = scoreA
    scoreB = 0
    guestScore.textContent = scoreB
}
window.setToZero = setToZero