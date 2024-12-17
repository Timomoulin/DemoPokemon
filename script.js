async function fetchJSON(url) {
    let reponse = await fetch(url)
    let data = await reponse.json()
    return data
}

function affichePokemons(lesPokemons) {
    let chaineHTML = ""
    for (const unPokemon of lesPokemons) {
        chaineHTML +=/*html*/`
        <div class="col my-1">
        <div class="card" >
            <img src="${unPokemon.sprites.regular}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${unPokemon.name.fr}</h5>
                <p class="card-text">
                </p>
            </div>
        </div>
        </div>
        `
    }
    document.querySelector("#divPokemons").innerHTML=chaineHTML
}

fetchJSON("https://tyradex.vercel.app/api/v1/pokemon").then(
    function (data) {
        console.log(data)
        affichePokemons(data)
    }
)