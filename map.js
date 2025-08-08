const map = L.map('map').setView([51.505, -0.09], 2); // View at world scale

// TileLayer de base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Exemple de point pour un hub de Pan Am (New York)
L.marker([40.7128, -74.0060]).addTo(map)
  .bindPopup('Hub principal de Pan Am à New York')
  .openPopup();
