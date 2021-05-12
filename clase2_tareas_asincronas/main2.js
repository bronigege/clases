// Hacer una petición a la página de pokemon https://pokeapi.co/api/v2/pokemon

fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => {
        const body = document.body

        for (let item of data) {
            const h1 = document.createElement('h1')
            const p = document.createElement('p')
            h1.innerText = item.name
            p.innerText = item.region
            body.appendChild(h1)
            body.appendChild(p)
        }
        console.log(data)
    });

