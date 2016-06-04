var events   = ["direct_message","direct_mention","mention","ambient"];
var commands = [
  {
    patterns: ["ultimo encontro","último encontro"], 
    events: events,
    text: 'SHOW DE BOLA. Quer saber? Venha conferir :P \n No último encontro fizemos um brainstorm das próximas atividades que serão: HACKEAR A TOTAL! :smiling_imp:'
  }, {
    patterns: ["proximo encontro","próximo encontro"],
    events: events,
    text: 'O próximo encontro será no dia 04/06 às 14:00 - estamos até barganhando um coffe break...'
  }, {
    patterns: ["evento"],
    events: events,
    text: 'Dia 31/05 as 18:00 teremos Aniversariantes do mês!! Vai ter :cake: :cake: :cake: :cake: :cake: :cake: :cake: \n Dia 03/06 as 13h teremos um bate-papo na sala do Oikos sobre a "Importância dos Testes de Software" \n Dia 04/06 as 14:00 acontecerá também o próximo encontro dos #loucosporconhecimento \n'
  }
];

module.exports = commands;