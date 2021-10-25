function CardFilme(dados) {
  const filme = document.createElement("session");
  filme.classList.add("filme");

  const poster = document.createElement("img");
  poster.classList.add("poster");
  poster.src = "https://image.tmdb.org/t/p/w200/" + dados.poster_path;
  poster.alt = "Poster " + dados.title || dados.name;

  const titulo = document.createElement("p");
  titulo.classList.add("titulo");
  titulo.innerHTML = dados.title || dados.name;

  const nota = document.createElement("div");
  nota.classList.add("nota");

  const icone = document.createElement("span");
  icone.classList.add("material-icons");
  icone.innerHTML = "star";

  const valor_nota = document.createElement("p");
  valor_nota.innerHTML = dados.vote_average;

  nota.appendChild(icone);
  nota.appendChild(valor_nota);

  const botao = document.createElement("a");
  botao.classList.add("botao");
  botao.innerHTML = "Detalhes";
  botao.href = "detalhes.html?id=" + dados.id + "&type=" + dados.media_type;

  filme.appendChild(poster);
  filme.appendChild(titulo);
  filme.appendChild(nota);
  filme.appendChild(botao);

  return filme;
}
