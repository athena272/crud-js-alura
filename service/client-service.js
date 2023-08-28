const table = document.querySelector('[data-tabela')

const createNewRow = (nome, email) => {
    const newRowClient = document.createElement('tr')
    const content = `
    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a>
            </li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>`

    newRowClient.innerHTML = content

    return newRowClient
}


const listClients = () => {
    const promise = new Promise((resolve, reject) => {
        const http = new XMLHttpRequest()
        http.open('GET', 'http://localhost:3000/profile')

        http.onload = () => {
            if (http.status >= 400) {
                reject(JSON.parse(http.response))

            } else {
                resolve(JSON.parse(http.response))
            }
        }

        http.send()
    })

    return promise
}

listClients().then(data => {

    data.forEach(element => {
        table.appendChild(createNewRow(element.nome, element.email))
    })
})