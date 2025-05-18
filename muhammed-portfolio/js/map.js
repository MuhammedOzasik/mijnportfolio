 // Leaflet map initialization
    var map = L.map('map').setView([51.21944789858252, 4.400868464334788], 13); // Location: Antwerp, Belgium

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker to the map
    L.marker([51.21944789858252, 4.400868464334788]).addTo(map)
      .bindPopup('Dit is mijn locatie in Antwerpen')
      .openPopup();