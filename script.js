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
            {
                texto: "Costumo fazer isso",
                afirmacao: "Faz isso"
        ]
    },
    {
        enunciado: "Acho natural assumir o controle quando outros estão estagnados e as coisas estão atrasadas",
        alternativas: [
            {
                texto: "Sim, detesto atrasos em planejamentos e ver as pessoas sem fazer nada para mudar isso",
                afirmacao: "Acha natural assumir o controle"
            {
                texto: "Não, deixo que a situação permaneça do jeito estagnado que está",
                afirmacao: "Permaneço estagnado"
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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