const lijst = document.getElementById('muzieklijst');
  const audioPlayer = document.getElementById('audioPlayer');

  fetch('https://itunes.apple.com/search?term=eminem&country=us&entity=song&limit=5')
    .then(response => response.json())
    .then(data => {
      data.results.forEach(song => {
        const li = document.createElement('li');
        li.textContent = `${song.trackName} - ${song.artistName}`;
        li.style.cursor = 'pointer';

        li.addEventListener('click', () => {
          audioPlayer.src = song.previewUrl;
          audioPlayer.play();
        });

        lijst.appendChild(li);
      });
    })
    .catch(err => console.error(err));