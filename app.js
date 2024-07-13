let listaDeNumerosSorteado = [];
let numeroMaximoLimite = 100;
let numeroSecreto = gerarNumeroAletorio();
let tentativas = 1;
//  let titulo = document.querySelector('h1');
//  titulo.innerHTML = 'Jogo do número secreto';

//  let paragrafo = document.querySelector('p');
//  paragrafo.innerHTML = 'Escolha um número entre 1 e 100';

 function exibirTextoNaTela(tag, texto){
    let paragrafo = document.querySelector(tag);
    paragrafo.innerHTML = texto;
 }
 function mensagemInicial(){
   exibirTextoNaTela('h1', 'Jogo do número secreto');
   exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
 }
 

 function verificarChute(){
      let chute = document.querySelector('input').value;
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

      if(chute == numeroSecreto){
         exibirTextoNaTela('h1', 'Acertou!');
         exibirTextoNaTela('p', `Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!` );

         document.getElementById('reiniciar').removeAttribute('disabled');
      }else{
         if(numeroSecreto > chute){
            exibirTextoNaTela('p', `O número secreto é maior ${chute}.`);
         }else{
            exibirTextoNaTela('p', `O número secreto é menor ${chute}.`);
         }
         tentativas ++;
         limparCampo();
      }
   }

 function gerarNumeroAletorio(){
   let numeroEscolhido = parseInt(Math.random() * numeroMaximoLimite + 1);
   let quantidadeElementos = listaDeNumerosSorteado.length;

   if(quantidadeElementos == numeroMaximoLimite){
      listaDeNumerosSorteado = [];
   }
   if(listaDeNumerosSorteado.includes(numeroEscolhido)){
      return gerarNumeroAletorio();
   }else{
      listaDeNumerosSorteado.push(numeroEscolhido);
      console.log(listaDeNumerosSorteado);
      return numeroEscolhido;
   }
 }

 function limparCampo(){
   chute = document.querySelector('input');
   chute.value = '';
 }

 function reiniciarJogo(){
   numeroSecreto = gerarNumeroAletorio();
   limparCampo();
   tentativas = 1;
   mensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled', true);
 }

 mensagemInicial();