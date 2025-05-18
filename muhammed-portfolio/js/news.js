const topStoriesUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json';
const newsItemURL = 'https://hacker-news.firebaseio.com/v0/item/';

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        throw error;
    }
};

const showTopStories = async () => {
    const list = document.getElementById('nieuwsLijst');
    list.innerHTML = ''; // Eski içerikleri temizle

    try {
        const storyIds = await fetchData(topStoriesUrl);
        let count = 0;

        for (const storyId of storyIds) {
            if (count >= 5) break;
            const storyData = await fetchData(`${newsItemURL}${storyId}.json`);

            if (storyData.url) {
                const listItem = document.createElement('li');
                listItem.classList.add('list-group-item');

                const link = document.createElement('a');
                link.textContent = storyData.title;
                link.href = `https://news.ycombinator.com/item?id=${storyId}`;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';

                listItem.appendChild(link);
                list.appendChild(listItem);

                count++;
            }
        }
    } catch (error) {
        console.error('An error occurred:', error);
        list.innerHTML = '<li class="list-group-item text-danger">Nieuws kon niet worden geladen. Probeer het later opnieuw.</li>';
    }
};

showTopStories();
