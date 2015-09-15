var isNode = require('detect-node');
var path = require('path');

function determineConfiguration(configurationEnvironmentKey){
  var configurationFilePath;
  var configuration;
  var defaultConfigurationEnvironmentKey = 'CONFIGURATION_FILE_PATH';

  if(typeof configurationEnvironmentKey === 'undefined'){
    configurationEnvironmentKey = defaultConfigurationEnvironmentKey;
  }

  if (isNode) {

    if(!(configurationEnvironmentKey in process.env)){
      return null;
    }else{
      configurationFilePath = process.env[configurationEnvironmentKey];
      configuration = require('./' + path.relative(__dirname, configurationFilePath));

      return configuration;
    }
  }else{
    
    if(!(configurationEnvironmentKey in window)){
      return null;
    }else{
      return window[configurationEnvironmentKey]
    }
  }
}

module.exports = determineConfiguration;