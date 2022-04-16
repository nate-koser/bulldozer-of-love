'use strict';

var Alexa = require('alexa-sdk');                  
 					    
var handlers = {
  'LaunchRequest': function() {
    this.response.speak('Beep beep. Hello there little one. What is your name?')
        .listen('Can you please tell me your name?'); 
    this.emit(':responseReady');
  },

  'NameIntent': function () {
    var myName = this.event.request.intent.slots.name.value;
    if (myName == 'Ethan') {
        this.response.speak('Ethan. Vroom vroom. You are too cute! I know you love blue cars. Can you say, \'Hi bulldozer\'?').listen('Say \'Hi bulldozer\'!');
    }
    else if (myName == 'Ellie') {
        this.response.speak('Ellie. Vroom vroom. Such a cute girl! And so big. Can you say, \'Hi bulldozer\'?').listen('Say, \'Hi bulldozer\'!');
    }
    else {
        this.response.speak(myName + '... that's a great name! Honk honk. Can you say, \'Hi bulldozer\'?').listen('Say, \'Hi bulldozer\'!');
    }
    this.emit(':responseReady');
  },
  
  'GreetingIntent': function () {
    this.response.speak('Good job! Honk honk. Hey, do you want to know who loves you?').listen('Should I tell you who loves you?');
    this.emit(':responseReady');
  },
  
  
  'MomdadloveIntent': function () {
    this.response.speak('Your mom and dad love you! Beep beep!');
    this.emit(':responseReady');
  },
  
  'AMAZON.StopIntent': function() {
    this.response.speak('Ok, let\'s chat again soon. Vroom.');
    this.emit(':responseReady');
  },

  'AMAZON.CancelIntent': function() {
    this.response.speak('Ok, talk to you again soon. Vroom.');
    this.emit(':responseReady');
  },

  'SessionEndedRequest': function() {
    console.log('session ended!');
    this.emit(':saveState', true);
  }

}

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
