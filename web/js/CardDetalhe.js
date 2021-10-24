function Header(descricao) {
  const hero = document.createElement("div");
  hero.id = "hero";
  hero.style =
    "--background-image: url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/" +
    descricao.backdrop_path +
    "')";

  const poster = document.createElement("img");
  poster.classList.add("poster");
  poster.src = "https://image.tmdb.org/t/p/w200/" + descricao.poster_path;
  poster.alt = "Poster " + descricao.title || descricao.name;
  hero.appendChild(poster);

  const detalhes = document.createElement("div");
  detalhes.classList.add("detalhes");

  const titulo = document.createElement("h2");
  titulo.innerHTML = descricao.title || descricao.name;
  detalhes.appendChild(titulo);

  const sinopse = document.createElement("p");
  sinopse.innerHTML = descricao.overview || descricao.overview;
  detalhes.appendChild(sinopse);

  hero.appendChild(detalhes);

  return hero;
}

function Main(descricao, credits) {
  const main = document.createElement("main");
  main.appendChild(Infos(descricao, credits));
  main.appendChild(FichaTecnica(descricao));

  return main;
}

function Infos(descricao, credits) {
  const infos = document.createElement("div");
  infos.classList.add("infos");

  const botoes = document.createElement("div");
  botoes.classList.add("botoes");
  infos.appendChild(botoes);

  const btnVoltar = document.createElement("a");
  btnVoltar.classList.add("botao");
  btnVoltar.href = "index.html";
  btnVoltar.innerHTML = "Voltar";
  botoes.appendChild(btnVoltar);

  const btnSite = document.createElement("a");
  btnSite.classList.add("botao");
  btnSite.href = descricao.homepage;
  btnSite.innerHTML = "Site";
  btnSite.target = "_blank";
  botoes.appendChild(btnSite);

  const elenco = document.createElement("h2");
  elenco.innerHTML = "Elenco";
  infos.appendChild(elenco);

  const atores = document.createElement("div");
  atores.classList.add("atores");
  infos.appendChild(atores);

  credits.cast.forEach((ator) => atores.appendChild(Ator(ator)));

  return infos;
}

function Ator(ator) {
  const div = document.createElement("div");
  div.classList.add("ator");

  const perfil = document.createElement("img");
  perfil.classList.add("perfil");
  perfil.alt = "Foto de " + ator.name;
  perfil.src = ator.profile_path
    ? "https://www.themoviedb.org/t/p/w600_and_h600_bestv2/" + ator.profile_path
    : "images/ator.png";
  div.appendChild(perfil);

  const descricao = document.createElement("div");
  descricao.classList.add("descricao");
  div.appendChild(descricao);

  const h3 = document.createElement("h3");
  h3.innerHTML = ator.name;
  descricao.appendChild(h3);

  const p = document.createElement("p");
  p.innerHTML = ator.character;
  descricao.appendChild(p);

  return div;
}

function FichaTecnica(descricao) {
  const aside = document.createElement("aside");

  const h2 = document.createElement("h2");
  h2.innerHTML = "Ficha Técnica";
  aside.appendChild(h2);

  console.log(descricao);

  const infos = [
    ...FichaTecnicaInfo(
      "Título Original",
      descricao.original_title || descricao.original_name
    ),
    ...FichaTecnicaInfo("Slogan", descricao.tagline),
    ...FichaTecnicaInfo("Idioma Original", descricao.original_language),
    ...FichaTecnicaInfo(
      "Lançamento",
      dayjs(descricao.release_date || descricao.first_air_date).format(
        "DD/MM/YYYY"
      )
    ),
    ...FichaTecnicaInfo("Nota", descricao.vote_average.toLocaleString("pt-BR")),
  ];

  infos.forEach((info) => aside.appendChild(info));

  return aside;
}

function FichaTecnicaInfo(titulo, descricao) {
  const h4 = document.createElement("h4");
  h4.innerHTML = titulo;

  const p = document.createElement("p");
  p.innerHTML = descricao;

  return [h4, p];
}
