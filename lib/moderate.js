'use strict';

var image = require('./image.js'),
  text = require('./text.js'),
  moderate = {};

moderate.region = {
  EAST_US_2: 'eastus2',
  SOUTHEAST_ASIA: 'southeastasia',
  WEST_CENTRAL_US: 'westcentralus',
  WEST_EUROPE: 'westeurope',
  WEST_US: 'westus'
};

moderate.hostFromRegion = function(region) {
  return 'https://' + region + '.api.cognitive.microsoft.com';
};

moderate.Client = function(key, hostOrRegion) {
  if (!key || key === '') {
    return console.error('Tried to initialize Cognitive Services client without API key');
  }

  var bingHost = (hostOrRegion || 'https://api.cognitive.microsoft.com').replace('\/$', '');

  // If hostOrRegion is a simple string, assume it's a region, otherwise treat it as a host.
  // If hostOrRegion is not defined, use westus for the region, for backwards compatibility.
  var host;
  if (hostOrRegion) {
    var re = /^[a-z]\w+$/;
    host = hostOrRegion.match(re) ? moderate.hostFromRegion(hostOrRegion) : hostOrRegion.replace('\/$', '');
  } else {
    host = moderate.hostFromRegion(moderate.region.WEST_US);
  }

  this._key = key;
  this.image = image(key, host);
  this.text = face(key, host);

};

module.exports = moderate;
