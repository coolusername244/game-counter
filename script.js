let mariaScore = 0; 
let leeScore = 0;
let totalScore = +leeScore + +mariaScore;

document.getElementById('lee').innerHTML = leeScore;
document.getElementById('maria').innerHTML = mariaScore;
document.getElementById('total').innerHTML = totalScore;

function leePoint() {
    leeScore++;
    document.getElementById('lee').innerHTML = leeScore;

}

function mariaPoint() {
    mariaScore++;
    document.getElementById('maria').innerHTML = mariaScore;
}