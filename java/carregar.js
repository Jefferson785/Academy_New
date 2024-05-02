const pessoas = JSON.parse(localStorage.getItem("pessoas"))

pessoas.forEach( pessoa => card(pessoa))

function card(pessoa) {
    //template literals
    const content = `
        <div class="nes-container with-title is-centered">
        <p class="title">${pessoa.nome}</p>
            <p>${pessoa.nome}</p>

            <a href="#" class="nes-badge is-splited">
            <span class="is-dark">Kg:</span>
            <span class="is-error">${pessoa.peso}</span>
            </a>

            <a href="#" class="nes-badge is-splited">
            <span class="is-dark">Cm:</span>
            <span class="is-error">${pessoa.altura}</span>
            </a>
        </div>
    `

    const card = document.createElement("div")
    card.innerHTML = content

    document
        .querySelector("#lista-de-pessoas")
        .appendChild(card)
}