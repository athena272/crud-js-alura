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

const listClients = async () => {
    try {
        const response = await fetch('https://athena272.github.io/crud-js-alura/db.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
};

const fetchClients = async () => {
    const data = await listClients()
    if (data && data.profile) {
        const { profile } = data;
        profile.forEach(element => {
            table.appendChild(createNewRow(element.nome, element.email));
        });
    }
}

fetchClients()