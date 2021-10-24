let url = "https://api.themoviedb.org/3/trending/movie/week?api_key=c3c2b0c5bc1a998367f9ed02a2156799"

const filmes = document.querySelector("#filmes")
fetch(url).then((resposta) => resposta.json().then((json) =>
        json.results.forEach(filme => filmes.appendChild(CardFilme(filme)))
))

url = "https://api.themoviedb.org/3/trending/tv/week?api_key=c3c2b0c5bc1a998367f9ed02a2156799"

const series = document.querySelector("#series")
fetch(url).then((resposta) => resposta.json().then((json) =>
        json.results.forEach(serie => series.appendChild(CardFilme(serie)))
))
