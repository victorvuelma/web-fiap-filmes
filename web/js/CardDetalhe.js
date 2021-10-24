function CardDetalhes(descricao){
    const detalhe = document.createElement("session")
    detalhe.classList.add("detalhe")

    const poster = document.createElement("img")
    poster.classList.add("poster")
    poster.src = "https://image.tmdb.org/t/p/w200/" + descricao.poster_path
    poster.alt = "Poster " + descricao.title || descricao.name

    const titulo = document.createElement("h2")
    titulo.classList.add("titulo")
    titulo.innerHTML = descricao.title || descricao.name

    const sinopse = document.createElement("p")
    sinopse.classList.add("sinopse")
    sinopse.innerHTML = descricao.overview || descricao.overview


    filme.appendChild(poster)
    filme.appendChild(titulo)
    filme.appendChild(sinopse)

    return detalhe
}
