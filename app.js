//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigoSorteio = [];
let amigoNome = document.getElementById("amigo"); 

function adicionar() {
    let amigo = amigoNome.value;
    if (amigo == ""){
        alert("Digite o nome de um amigo");
    }
    else {
        if(!amigoSorteio.includes(amigo)){
            amigoSorteio.push(amigo);
            alert("Amigo adicionado com sucesso!!");
        }
        else{
            let opcao = prompt("Verifique o Nome!!\n  Digite:\n 1 - Adicionar \n 2 - Cancelar");
            if(opcao == 1 ){
                amigoSorteio.push(amigo);
                alert("Nome adcionado !");
            }
            else{
                alert("Nome não adcionado!");
            
            }
       
        }
        limparCampo ()
    }
    amigoSorteio.value = "";

    exibirListaDeAmigos();
    
}
function  exibirListaDeAmigos() {
    let nomesDeAmigos = document.getElementById("lista-amigos");
    nomesDeAmigos.innerHTML = "";

    amigoSorteio.forEach
    (
        amigo => 
        {
            let participante = document.createElement('li');
            participante.textContent = amigo;
            nomesDeAmigos.appendChild(participante);
        }
    );
}

function sortearNomeSecreto(){ 
    let nomeSorteado = Math.floor(Math.random() * amigoSorteio.length);
    return nomeSorteado;
}

function selecionarAmigoSecreto(nomeSecreto){
    return amigoSorteio[nomeSecreto];
}

function limparCampo () {
    amigo  = document.querySelector('input');
    amigo.value = '';
}
function sorteadorDeAmigo(){
    
    if(amigoSorteio.length == 0){
        alert('Não há amigos para o sorteio!');
        return 0;
    }

    let amigoSecreto = selecionarAmigoSecreto(sortearNomeSecreto());
    document.getElementById('resultado').innerHTML = amigoSecreto;
    responsiveVoice.speak(amigoSecreto, 'Brazilian Portuguese Female', {rate:1.2});
}   