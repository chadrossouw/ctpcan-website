/**
 * Third-party modules
 */

const { config } = require('dotenv');

/*
 * Exported 11ty config 
 */

module.exports = (eleventy) => {
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
