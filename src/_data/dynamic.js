const axios = require("axios");

module.exports = async () => {
  console.log( "Fetching dynamic data count…" );
  const { data: { stargazers_count: count } } = await axios('https://api.github.com/repos/11ty/eleventy');
  return { count };
};