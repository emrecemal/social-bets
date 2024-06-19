document.getElementById('betForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let game = document.getElementById('game').value;
    let result = document.getElementById('result').value;
    let amount = document.getElementById('amount').value;

    let bet = { game, result, amount };
    addBetToLocalStorage(bet);
    displayBets();
});

function addBetToLocalStorage(bet) {
    let bets = localStorage.getItem('bets') ? JSON.parse(localStorage.getItem('bets')) : [];
    bets.push(bet);
    localStorage.setItem('bets', JSON.stringify(bets));
}

function displayBets() {
    let bets = localStorage.getItem('bets') ? JSON.parse(localStorage.getItem('bets')) : [];
    let betsList = document.getElementById('betsList');
    betsList.innerHTML = '';

    bets.forEach(bet => {
        let li = document.createElement('li');
        li.textContent = `${bet.game} - ${bet.result} - ${bet.amount} credits`;
        betsList.appendChild(li);
    });
}

window.onload = displayBets;
