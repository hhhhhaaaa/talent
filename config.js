function configuration() {
  let config = {};

  function getEnv() {
    return process.env.NODE_ENV;
  }

  function makeConfig() {
    if (getEnv() === 'development') {
      console.log('Entering Development');
      require('dotenv').config({ path: __dirname + './.env' });
    } else if (getEnv() === 'test') {
      console.log('Entering Test');
      require('./test/testHelper.js');
    }
    // Dotenv reads env file and puts in on the env.

    config = {
      port: process.env.PORT,
    };
    return config;
  }

  function getConfig() {
    return config;
  };

  makeConfig();

  return {
    getConfig,
    getEnv,
  };
};
