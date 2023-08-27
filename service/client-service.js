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

const table = document.querySelector('[data-tabela')

const http = new XMLHttpRequest()

http.open('GET', 'http://localhost:3000/profile')

http.send()

http.onload = () => {
    const data = JSON.parse(http.response)
    data.forEach(element => {
        table.appendChild(createNewRow(element.nome, element.email))
    });
}   