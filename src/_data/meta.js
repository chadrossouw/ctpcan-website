/*
 * Third-party modules 
 */

// const axios = require('axios');
const chalk = require('chalk');
const { v4: createId } = require('uuid');
require('dotenv').config();

/*
 * Primary export
 */

module.exports = async () => {
  const ENABLE_OFFLINE_CACHE = process.env && process.env.ENABLE_OFFLINE_CACHE;

  if (ENABLE_OFFLINE_CACHE === 'true') {
    console.log(chalk.black.bgCyan('"ENABLE_OFFLINE_CACHE" is set, therefore service worker offline cache is active in build.'))
  } else {
    console.warn(chalk.black.bgCyan('"ENABLE_OFFLINE_CACHE" is not set, therefore service worker is disabled.'))
  }

  return {
    cache_bypassed: ENABLE_OFFLINE_CACHE === 'true',
    unique_build_id: createId(),
  }
};

