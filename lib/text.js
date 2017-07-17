'use strict';

var request = require('request'),
  config = require('./config'),
  content = 'what in tarnation is your problem';

var rootPath = '/contentmoderator/moderate/v1.0/ProcessText';
// screen path
var screenPath = '/Screen';
//var detectPath = '/detect';
var languagePath = '/DetectLanguage';

var text = function text(key, host) {

  function _return(error, response, resolve, reject) {
    if (error) {
      return reject(error);
    }

    if (response.statusCode !== 200 && response.statusCode !== 202) {
      reject(response.body.error || response.body);
    }

    return resolve(response.body);
  };

  // figure out how to add options later i guess?
  function screen(options, content) {
    console.log(options);
    request({
      // header params, content type is optional, sub key is required.
      headers: {
        'Content-Type': 'text/plain',
        'Ocp-Apim-Subscription-Key': key
      },
      // params that go into url that need to be abstracted out: location, language (optional), autocorrect (optional), PII (personal identifiable info, optional), listId (term list for matching, optional),  
      uri: 'https://eastus2.api.cognitive.microsoft.com/contentmoderator/moderate/v1.0/ProcessText/Screen/?language=eng&PII=true',
      // request body supports raw requests with these MIME types: text/html, text/xml, text/markdown, text/plain
      body: content,
      method: 'POST'
    }, function (err, res, body) {
      if (err) {
        console.log(err);
      }
      else {
        console.log(res.body);
      }
    });

  };




  return {
    screen: screen
    //language: language DONT FORGET TO ADD COMMAS BACK IN
  };
};

module.exports = text;