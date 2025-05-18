document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "42fc229441eeaada1e131d1de0aef35c";
  const lat = 51.2194;   // Antwerpen enlemi
  const lon = 4.4025;    // Antwerpen boylamı
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&units=metric&lang=nl&appid=${apiKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("Netwerkfout");
      return response.json();
    })
    .then(data => {
      // data.current içinde sıcaklık ve hava durumu bilgisi var
      const temp = Math.round(data.current.temp);
      const description = data.current.weather[0].description;
      const weerTekst = `Het is momenteel ${temp}°C met ${description} in Antwerpen.`;
      document.getElementById("weer").textContent = weerTekst;
    })
    .catch(error => {
      document.getElementById("weer").textContent = "Kan de weerinformatie niet laden.";
      console.error("Weerfout:", error);
    });
});
