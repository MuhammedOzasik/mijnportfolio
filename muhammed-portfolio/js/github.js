document.addEventListener('DOMContentLoaded', () => {
  // GitHub API URL'i
  const username = 'MuhammedOzasik'; // GitHub kullanıcı adınızı buraya yazın
  const apiUrl = `https://api.github.com/users/${username}`;

  // DOM elemanlarını seçiyoruz
  const avatar = document.getElementById('avatar');
  const usernameElement = document.getElementById('username');
  const bio = document.getElementById('bio');
  const userLocation = document.getElementById('location');  // location ismini değiştirdim
  const repos = document.getElementById('repos');
  const githubLink = document.getElementById('github-link');

  // Eğer HTML elemanları sayfada yoksa hata vermesin
  if (!avatar || !usernameElement || !bio || !userLocation || !repos || !githubLink) {
    console.warn("Bazı DOM elemanları bulunamadı. Lütfen HTML'de gerekli id'leri kontrol edin.");
    return;
  }

  // GitHub API'sinden kullanıcı bilgilerini çekiyoruz
 fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Kullanıcı bilgileri alınamadı');
        }
        return response.json();
    })
    .then(data => {
        avatar.src = data.avatar_url;
        usernameElement.textContent = data.login;
        bio.textContent = data.bio || 'Biyografi bulunamadı';
        userLocation.querySelector('span').textContent = data.location || 'Konum bilgisi yok';
        repos.querySelector('span').textContent = data.public_repos;
        githubLink.href = data.html_url;
    })
    .catch(error => {
        console.error('Hata: ', error);
        alert('Bir şeyler yanlış gitti. Lütfen tekrar deneyin.');
    });

});
