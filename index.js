function determineConfiguration(configurationEnvironmentKey){
  var configurationFilePath;
  var configuration;

  if(!(configurationEnvironmentKey in process.env)){
    return null;
  }else{
    configurationFilePath = process.env[configurationEnvironmentKey];
    configuration = require(configurationFilePath);

    return configuration;
  }
}

module.exports = determineConfiguration;