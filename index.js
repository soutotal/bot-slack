var Botkit = require('botkit');
var controller = Botkit.slackbot();
var bot = controller.spawn({
  token: process.env.token
})

bot.startRTM(function(err,bot,payload) {
  if (err) {
    throw new Error('Could not connect to Slack');
  }
});

//prepare the webhook
controller.setupWebserver(process.env.PORT || 3001, function(err, webserver) {
    controller.createWebhookEndpoints(webserver, bot, function() {
        // handle errors...
    });
});

function reply (patterns, eventos, text) {
  controller.hears(
    patterns,
    eventos,
    function(bot,message) {
      bot.reply(message, text);
    }
  );
}

reply(
  ["ultimo encontro","último encontro"], 
  ["direct_message","direct_mention","mention","ambient"],
  'SHOW DE BOLA. Quer saber? Venha conferir :P \n No último encontro fizemos um brainstorm das próximas atividades que serão: HACKEAR A TOTAL! :smiling_imp:'
);

reply(
  ["proximo encontro","próximo encontro"],
  ["direct_message","direct_mention","mention","ambient"],
  'O próximo encontro será no dia 04/06 às 14:00 - estamos até barganhando um coffe break...'
);

reply(
  ["evento"],
  ["direct_message","direct_mention","mention","ambient"],
  'Dia 31/05 as 18:00 teremos Aniversariantes do mês!! Vai ter :cake: :cake: :cake: :cake: :cake: :cake: :cake: \n Dia 03/06 as 13h teremos um bate-papo na sala do Oikos sobre a "Importância dos Testes de Software" \n Dia 04/06 as 14:00 acontecerá também o próximo encontro dos #loucosporconhecimento \n'
);