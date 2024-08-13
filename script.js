const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Frequentemente uso palavras complexas e abstratas na minha fala e escrita",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Usa palavras complexas frequentemente "
            },
            {
                texto: "Não",
                afirmacao: "Não usa palavras complexas frequentemente"
            }
        ]
    },
    {
        enunciado: "Tento ser a pessoa que espalha entusiasmo",
        alternativas: [
            {
                texto: "Sim, eu tento",
                afirmacao: "Tenta ser essa pessoa"
            },
            {
                texto: "Não costumo ser assim",
                afirmacao: "Não costuma ser esse tipo de pessoa"
            }
        ]
    },
    {
        enunciado: "Eu quero ser uma pessoa manipulativa e que influencia os outros quando quero",
        alternativas: [
            {
                texto: "Não faço isso",
                afirmacao: "Não faz isso"
            },
            {
                texto: "Costumo fazer isso",
                afirmacao: "Faz isso"
            }
        ]
    },
    {
        enunciado: "Acho natural assumir o controle quando outros estão estagnados e as coisas estão atrasadas",
        alternativas: [
            {
                texto: "Sim, detesto atrasos em planejamentos e ver as pessoas sem fazer nada para mudar isso",
                afirmacao: "Acha natural assumir o controle"
            },
            {
                texto: "Não, deixo que a situação permaneça do jeito estagnado que está",
                afirmacao: "Permaneço estagnado"
            }
        ]
    },
    {
        enunciado: "Mostro minha impaciência quando outros estão no caminho do progresso"
        alternativas:[    
        {
                texto: "Tento disfarçar a impaciência, mas fico impaciente",
                afirmacao: "Sim"
            },
            {
                texto: "Não costumo me importar com isso",
                afirmacao: "Não"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();