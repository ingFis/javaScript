let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let instrucao =  document.querySelector('.d-2');
let ladoDireito = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0;

let numero = '';

let candidato = [];


function comecarEtapa(){
    let etapa = etapas[etapaAtual];

    let numerosHtml = '';

    // Repetir os quadrados
    for(let i = 0; i < etapa.numeros; i++){
        if(i === 0){
            numerosHtml += '<div class="numero pisca"></div>';
        }else
            numerosHtml += '<div class="numero"></div>';
    }

    seuVotoPara.style.display = 'none'
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    ladoDireito.innerHTML = '';
    instrucao.style.display = 'none';

    numeros.innerHTML = numerosHtml;
}

function atualizarInterface(){
    let etapa = etapas[etapaAtual];

    candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero){
            return true;
        }else{
            return false;
        }
    })

    if(candidato.length > 0){
        preencherCandidato(candidato)
    }
    
}

function preencherCandidato(candidato){
    candidato = candidato[0];

    seuVotoPara.style.display = 'block';
    descricao.innerHTML = `Nome: ${candidato.nome}<br> Partido: ${candidato.partido}`
}


function clicou(num){
    let elNumero = document.querySelector('.numero.pisca');

    if(elNumero != null){
        elNumero.innerHTML = num;
        numero = `${numero}${num}`;

        elNumero.classList.remove('pisca');

        if(elNumero.nextElementSibling !== null){
            elNumero.nextElementSibling.classList.add('pisca');
        }else{
            atualizarInterface();
        }
    }
}

function branco(){
    alert('clicou em BRANCO');
}

function corrige(){
    alert('clicou em CORRIGE');
}

function confirma(){
    alert('clicou em CONFIRMA')
}


comecarEtapa()