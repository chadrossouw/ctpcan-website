/**
 * Third-party modules
 */

const { config } = require('dotenv');
const chalk = require('chalk');

/*
 * Exported 11ty config 
 */

module.exports = (eleventy) => {
  const { parsed: env } = config();
  const isIgnoreCache = env.BYPASS_CACHE === 'true';

  if (isIgnoreCache) {
    console.warn(chalk.black.bgCyan('NOTE: Service worker offline cache is bypassed due to BYPASS_CACHE set to "true"'))
  } else {
    console.log(chalk.black.bgCyan('Service worker offline cache is active in build.'))
  }
  
  eleventy.addPassthroughCopy({ 'src/static': './' });

  return {
    dir: {
      input: 'src/pages',
      output: 'dist',
      data: '../_data',
      includes: '../_includes'
    },
  };
};
