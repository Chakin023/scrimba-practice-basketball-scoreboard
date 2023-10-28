let hScore = 0
let gScore = 0

let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

function home1Point() {
    hScore += 1
    homeScoreEl.textContent = hScore;
}

function home2Points() {
    hScore += 2
    homeScoreEl.textContent = hScore;
}

function home3Points() {
    hScore += 3
    homeScoreEl.textContent = hScore;
}

function guest1Point() {
    gScore += 1
    guestScoreEl.textContent = gScore;
}

function guest2Points() {
    gScore += 2
    guestScoreEl.textContent = gScore;
}

function guest3Points() {
    gScore += 3
    guestScoreEl.textContent = gScore;
}

function reset() {
    hScore = 0
    gScore = 0
    homeScoreEl.textContent = hScore;
    guestScoreEl.textContent = gScore;
}