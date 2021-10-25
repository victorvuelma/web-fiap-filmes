const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const type = urlParams.get("type");

const body = document.querySelector("body");

const getUrl =
  "https://api.themoviedb.org/3/" +
  type +
  "/" +
  id +
  "?language=pt-BR&api_key=c3c2b0c5bc1a998367f9ed02a2156799";

const getCreditsUrl =
  "https://api.themoviedb.org/3/" +
  type +
  "/" +
  id +
  "/credits?language=pt-BR&api_key=c3c2b0c5bc1a998367f9ed02a2156799";

fetch(getUrl).then((getResponse) =>
  getResponse.json().then((getJson) => {
    body.appendChild(Header(getJson));

    document.title = "FIAP Filmes - " + (getJson.title || getJson.name);

    fetch(getCreditsUrl).then((creditsResponse) =>
      creditsResponse.json().then((creditsJson) => {
        body.appendChild(Main(getJson, creditsJson));
      })
    );
  })
);
