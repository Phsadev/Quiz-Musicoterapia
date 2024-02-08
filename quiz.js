const perguntas = [
  {
    pergunta: "Qual é o principal objetivo da musicoterapia?",
    respostas: [
      "Ajudar na aprendizagem de novos instrumentos",
      "Promover a expressão emocional, a comunicação e o bem-estar",
      "Treinar a voz para canto profissional",
    ],
    correta: 1
  },
  {
    pergunta: "Quais são os elementos essenciais da música utilizados na musicoterapia?",
    respostas: [
      "Harmonia, Melodia e Ritmo",
      "Compasso, Tonalidade e Acordes",
      "Tempo, Compasso e Intervalos",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a diferença entre improvisação e composição na musicoterapia?",
    respostas: [
      "Improvisação é criar músicas novas; Composição é tocar músicas existentes",
      "Improvisação é criar músicas no momento; Composição é planejar músicas com antecedência",
      "Improvisação é seguir uma partitura; Composição é criar músicas na hora",
    ],
    correta: 1
  },
  {
    pergunta: "O que é a receptividade musical na musicoterapia?",
    respostas: [
      "É a capacidade de tocar vários instrumentos",
      "É a disposição do paciente em ouvir e se envolver com a música",
      "É a habilidade do musicoterapeuta em selecionar músicas adequadas",
    ],
    correta: 1
  },
  {
    pergunta: "Quais são os benefícios da musicoterapia no tratamento de doenças mentais?",
    respostas: [
      "Redução do estresse apenas",
      "Estímulo da cognição e da comunicação",
      "Melhora apenas na motricidade fina",
    ],
    correta: 1
  },
  {
    pergunta: "Qual instrumento musical é frequentemente utilizado na musicoterapia para promover a relaxação?",
    respostas: [
      "Bateria",
      "Piano",
      "Flauta de Pan",
    ],
    correta: 2
  },
  {
    pergunta: "O que significa 'MT' em musicoterapia?",
    respostas: [
      "Musical Theory",
      "Music Treatment",
      "Music Therapy",
    ],
    correta: 2
  },
  {
    pergunta: "Quais são os estágios básicos de um processo de musicoterapia?",
    respostas: [
      "Avaliação, Planejamento, Execução e Avaliação",
      "Improvisação, Composição, Apresentação",
      "Interpretação, Ensino, Prática",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a importância do ritmo na musicoterapia?",
    respostas: [
      "Apenas para entretenimento",
      "Auxilia na coordenação motora e estimula a expressão emocional",
      "Aumenta a velocidade da execução musical",
    ],
    correta: 1
  },
  {
    pergunta: "O que é a musicoterapia ativa?",
    respostas: [
      "Apenas ouvir música",
      "Participar ativamente na criação ou execução da música",
      "Discutir sobre músicas",
    ],
    correta: 1
  },
];


const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas



for (const item of perguntas) {
const quizItem = template.content.cloneNode(true)
quizItem.querySelector('h3').textContent = item.pergunta

for(let resposta of item.respostas) {
const dt = quizItem.querySelector('dl dt').cloneNode(true)
dt.querySelector('span').textContent = resposta
dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
dt.querySelector('input').value = item.respostas.indexOf(resposta)
dt.querySelector('input').onchange = (event) => {
  const estaCorreta = event.target.value == item.correta
  
  corretas.delete(item)
  if(estaCorreta) {
    corretas.add(item)
  }

  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

}


quizItem.querySelector('dl').appendChild(dt)
}

quizItem.querySelector('dl dt').remove()


quiz.appendChild(quizItem)
}
