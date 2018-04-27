const Alexa = require('alexa-sdk');

var APP_ID = undefined;

var SKILL_NAME = 'Hello World';
var RESPONSE_MESSAGE = 'Hello!';


var data = [
    'UK' = {
        text: 'I would recommend a carling. In UK'
    },

    'IRELAND' = {
        text: 'I would recommend a guiness. In Ireland'
    }
]

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alex.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function() {
        this.emit(':ask', 'I can suggest a drink from a random country!');
    },
    'MakeRecommendation': function() {
        for(var i = 0; i < data.length; i++) {
           this.emit(':tell', data[i].text);
        }
    }
}