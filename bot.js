var Botkit = require('botkit');
var controller = Botkit.slackbot();
var bot = controller.spawn({token: process.env.token});

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

var reply = function(patterns, eventos, text) {
  controller.hears(
    patterns,
    eventos,
    function(bot,message) {
      bot.reply(message, text);
    }
  );
}

var replyall = function(commands){
  for (var i = 0; i < commands.length; i++) {
    var command = commands[i];
    reply(command.patterns, command.events, command.text);  
  }
}




module.exports = replyall;