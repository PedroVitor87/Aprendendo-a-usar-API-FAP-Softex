//Selecionando elementos HTML com classes e armazenando em variáveis
const mostrarNaTela = document.querySelector('.chucknorris'); 
const compraBitcoin = document.querySelector('.transacao');
const elemento_HTML = document.querySelector('.elemento-HTML');
const apiGithub = document.querySelector('.api-github');

function APIChucknorris(){
    fetch('https://api.chucknorris.io/jokes/random') //Fazendo a requisição à API
    .then(response => response.json()) //Convertendo a resposta para formato JSON
    .then(frase => {
        mostrarNaTela.innerHTML = `
                                <h3 >Frase:</h3> ${frase.value}
        `
    })
    .catch(err => console.log(err)); //Manipulando erros se houver
}

function APIdeBitcoin() {
    fetch('https://blockchain.info/ticker') //Fazendo a requisição à API
        .then(response => response.json())
        .then(mensagem => {
            compraBitcoin.innerHTML = `
                                    <h4 style="font-weight: normal; text-align: center;">Última transação em Reais: $ ${mensagem.BRL.last.toFixed(2)}</h4>
            `
        })
        .catch(error => {
            console.error('Erro ao obter valor da Bitcoin:', error); //Manipulando erros se houver
        });
}

function mostrarAPI() {
    fetch('https://api.github.com/users/origamid/followers') //Fazendo a requisição à API
        .then(response => response.json())
        .then(usuarios => {
            usuarios.forEach(usuario => { //Itera sobre cada elemento na lista.
                const card = document.createElement('div'); //Criando elemento HTML <div>
                card.classList.add('card'); //Adcionando a classe card a cada div

                card.innerHTML = `
                    <img src="${usuario.avatar_url}" alt="${usuario.login}" />
                    <h3>ID: ${usuario.id}</h3>
                    <h3>Nome: ${usuario.login}</h3>
                `; //Definindo o conteúdo de cada card com id, nome e foto
                apiGithub.appendChild(card); //Adicionando o card ao elemento com a classe "api-github" no HTML
            });
        })
        .catch(error => {
            console.error('Erro ao obter seguidores:', error); //Manipulando erros se houver
        });
}

APIdeBitcoin() //Chamando a função que utiliza a API da blockchain
mostrarAPI()