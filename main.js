const btn = document.querySelector('.next-joke');
const jokeBody = document.querySelector('.joke-content');

const apiUrl = 'https://icanhazdadjoke.com/';

const apiRequest = async (url) => {
    const response = await fetch(url, {
        headers: {
            'Accept': 'application/json',
        }
    });
    if (!response.ok) {
        console.error('Could not fetch response from API');
        return;
    }
    return await response.json();
}

const fetchData = async () => {
    const data = await apiRequest(apiUrl);
    jokeBody.textContent = data.joke;

}

fetchData().catch(console.error);

btn.addEventListener('mouseover', function (e) {
    const rect = this.getBoundingClientRect();
    const xPos = (e.clientX - rect.left);
    const yPos = (e.clientY - rect.top);
    this.style.setProperty(`--x-pos`, `${xPos}px`);
    this.style.setProperty(`--y-pos`, `${yPos}px`);
} );

btn.addEventListener('click', async () => {
    await fetchData();
})