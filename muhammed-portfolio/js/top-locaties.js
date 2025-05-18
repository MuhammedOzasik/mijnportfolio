// js/top-locaties.js
document.addEventListener('DOMContentLoaded', function() {
  const maps = {};

  // Initialiseer kaarten
  const initMaps = () => {
    // Groenplaats Antwerpen
    maps.mapGroenplaats = L.map('mapGroenplaats').setView([51.2186, 4.4016], 16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(maps.mapGroenplaats);
    L.marker([51.2186, 4.4016]).addTo(maps.mapGroenplaats)
      .bindPopup('Groenplaats Antwerpen');
    
    // Antwerpen Meir
    maps.mapMeir = L.map('mapMeir').setView([51.2182, 4.4062], 16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(maps.mapMeir);
    L.marker([51.2182, 4.4062]).addTo(maps.mapMeir)
      .bindPopup('Antwerpen Meir');
    
    // Brugge
    maps.mapBrugge = L.map('mapBrugge').setView([51.2085, 3.2267], 16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(maps.mapBrugge);
    L.marker([51.2085, 3.2267]).addTo(maps.mapBrugge)
      .bindPopup('Brugge Markt');
    
    // Dinant
    maps.mapDinant = L.map('mapDinant').setView([50.2604, 4.9127], 16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(maps.mapDinant);
    L.marker([50.2604, 4.9127]).addTo(maps.mapDinant)
      .bindPopup('Dinant Centrum');
    
    // The Lobster House
    maps.mapLobsterHouse = L.map('mapLobsterHouse').setView([50.8479, 4.3546], 16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(maps.mapLobsterHouse);
    L.marker([50.8479, 4.3546]).addTo(maps.mapLobsterHouse)
      .bindPopup('The Lobster House');
    
    // Mado Restaurant
    maps.mapMado = L.map('mapMado').setView([51.1906, 4.3785], 16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(maps.mapMado);
    L.marker([51.1906, 4.3785]).addTo(maps.mapMado)
      .bindPopup('Mado Restaurant');

    // Haritalar görünür olduğunda boyutlarını düzelt
    Object.keys(maps).forEach(mapId => {
      const mapDiv = document.getElementById(mapId);
      const card = mapDiv.closest('.location-card');
      card.addEventListener('mouseenter', () => {
        setTimeout(() => {
          maps[mapId].invalidateSize();
        }, 200); // küçük gecikme geçiş efekti için daha iyi sonuç verir
      });
    });
  };

  // Voorkom herinitialisatie wanneer tabblad verborgen is
  let initDone = false;
  
  const initializeWhenVisible = () => {
    if (!initDone && document.visibilityState === 'visible') {
      initMaps();
      initDone = true;
      document.removeEventListener('visibilitychange', initializeWhenVisible);
    }
  };

  // Initialiseer kaarten wanneer pagina zichtbaar is
  document.addEventListener('visibilitychange', initializeWhenVisible);
  
  // Eerste initialisatie poging
  if (document.visibilityState === 'visible') {
    initMaps();
    initDone = true;
  } else {
    document.addEventListener('visibilitychange', initializeWhenVisible);
  }
});