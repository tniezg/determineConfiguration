var isNode = require('detect-node');

function determineConfiguration(configurationEnvironmentKey){
  var configurationFilePath;
  var configuration;

  if (isNode) {

    if(!(configurationEnvironmentKey in process.env)){
      return null;
    }else{
      configurationFilePath = process.env[configurationEnvironmentKey];
      configuration = require(configurationFilePath);

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