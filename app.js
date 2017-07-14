'use strict';

var request = require('request'),
    config = require('./config'),data = 'what the fuck is your problem';

request({
  headers: {
    'Content-Type': 'text/plain',
    'Ocp-Apim-Subscription-Key': config.KEY
  },
  uri: 'https://eastus2.api.cognitive.microsoft.com/contentmoderator/moderate/v1.0/ProcessText/Screen/?language=eng&PII=true',
  body: data,
  method: 'POST'
}, function (err, res, body) {
  if (err) {
    console.log(err);
  }
  else {
    console.log(res);
  }
});
