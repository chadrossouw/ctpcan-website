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
