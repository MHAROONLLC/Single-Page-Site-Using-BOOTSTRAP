document.addEventListener('DOMContentLoaded', function () {
    const getJokeBtn = document.getElementById('getJokeBtn');
    const jokeContainer = document.getElementById('jokeContainer');

    getJokeBtn.addEventListener('click', getChuckNorrisJoke);

    function getChuckNorrisJoke() {
        // API endpoint for Chuck Norris jokes
        const apiUrl = 'https://api.icndb.com/jokes/random';

        // Fetch a random Chuck Norris joke
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Display the joke in the container
                jokeContainer.innerHTML = data.value.joke;
            })
            .catch(error => {
                console.error('Error fetching Chuck Norris joke:', error);
            });
    }
});
