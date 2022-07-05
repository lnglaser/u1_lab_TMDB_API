const API_KEY = '47893fbd952716415198c6fd99cfc5dc'
const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original'

let button = document.querySelector('#search')
const input = document.querySelector('#search-input')
const movieList = document.querySelector('.movie-list')

let movieResult = "";
let moviePoster = null;

const renderList = (movies) => {
    
    movies.forEach((movie) => {
        //console.log(movie)
        console.log(movie.title, movie.original_title, movie.backdrop_path);
            movieResult = document.createElement('div');
            movieResult.classList.add('search-result')
            movieResult.innerText = movie.title;
            movieList.appendChild(movieResult)

            moviePoster = document.createElement('img');
            moviePoster.src = IMAGE_BASE_PATH + movie.poster_path;
            movieList.appendChild(moviePoster)
            //movieResult.innerHTML =
    })
}

button.addEventListener('click', async () => {
    //assign created divs to blank values
    //movieResult.remove('div')

    let movieTitle = input.value
    console.log(movieTitle)
    let response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${movieTitle}&api_key=${API_KEY}`)

    renderList(response.data.results);
})