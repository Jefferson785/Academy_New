document
    .querySelector("#botao-cadastrar")
    .addEventListener("click", (e) => {
        e.preventDefault()

        const form = document.querySelector("form")

        const pessoa = {
            nome: form.nome.value,
            peso: form.peso.value,
            altura: form.altura.value
        }
        salvar(pessoa)
    })

    function salvar(pessoa) {
        const pessoas = JSON.parse (localStorage.getItem('pessoas')) || []
        pessoas.push(pessoa)
        localStorage.setItem("pessoas", JSON.stringify(pessoas))

        window.location = "cadastros.html"
    }