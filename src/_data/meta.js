/*
 * Third-party modules 
 */

// const axios = require('axios');
const chalk = require('chalk');
const { config } = require('dotenv');
const { v4: createId } = require('uuid');

/*
 * Primary export
 */

module.exports = async () => {
  const { parsed: env } = config();

  if (env.BYPASS_CACHE === 'true') {
    console.warn(chalk.black.bgCyan('Service worker offline cache is bypassed.'))
  } else {
    console.log(chalk.black.bgCyan('Service worker offline cache is active in build.'))
  }

  return {
    cache_bypassed: env.BYPASS_CACHE === 'true',
    unique_build_id: createId(),
  }
};

