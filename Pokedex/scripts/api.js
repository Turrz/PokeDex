const btnSearch = document.getElementById("btnSearch");

btnSearch.addEventListener("click", () => {
    let pokemonName = document.getElementById("search").value;

    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`;

    fetch(url)
    .then(res => res.json())
    .then(res => {
        console.log(res);
    })
});
