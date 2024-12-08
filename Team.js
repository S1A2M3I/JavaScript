function hello() {
    const cskScore = document.getElementById('csk-score').value;
    const rcbScore = document.getElementById('rcb-score').value;
    let score;
    if (cskScore >= (2 * rcbScore) && cskScore > 50) {
        score = 'Team CSK wins!';
    } else if (rcbScore >= (2 * cskScore) && rcbScore > 50) {
        score = 'Team RCB wins!';
    } else {
        score = 'draw';
    }
    document.getElementById('result').innerHTML = 'Score: ' + score;
}