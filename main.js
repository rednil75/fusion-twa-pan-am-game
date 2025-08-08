let year = 1985;
let money = 100000000;
let reputation = 50;
let fleet = 20;

function advanceYear() {
  year++;
  document.getElementById('year').innerText = year;

  // Exemple d'événements simples
  const fuelCost = Math.floor(Math.random() * 10000000);
  money -= fuelCost;
  fleet += Math.random() > 0.5 ? 1 : 0;
  reputation += Math.random() > 0.8 ? -5 : 1;

  updateStats();
}

function updateStats() {
  document.getElementById('money').innerText = money.toLocaleString();
  document.getElementById('reputation').innerText = reputation;
  document.getElementById('fleet').innerText = fleet;
}
