'use strict';

var request = require('request'),
    config = require('./config'),
    data = 'what the fuck is your problem';

request({
  // header params, content type is optional, sub key is required.
  headers: {
    'Content-Type': 'text/plain',
    'Ocp-Apim-Subscription-Key': config.KEY
  },
  // params that go into url that need to be abstracted out: location, language (optional), autocorrect (optional), PII (personal identifiable info, optional), listId (term list for matching, optional),  
  uri: 'https://eastus2.api.cognitive.microsoft.com/contentmoderator/moderate/v1.0/ProcessText/Screen/?language=eng&PII=true',
  // request body supports raw requests with these MIME types: text/html, text/xml, text/markdown, text/plain
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
