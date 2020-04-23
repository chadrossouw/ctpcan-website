/*
 * Third-party modules 
 */

const axios = require('axios');
const chalk = require('chalk');
require('dotenv').config();

/*
 * Local modules 
 */

const AIRTABLE_GROUP_API_MOCK = require('../../mocks/airtable-groups-api');

/*
 * Helper functions
 */

/**
 * @param {import('./dynamic.types').GroupsInput} apiResponse 
 * @returns {import('./dynamic.types').GroupsOutput}
 */
const transformGroupsData = ({ records }) => {
  return records.map(({ fields }) => ({
    name: fields["Group Name"],
    link: fields["Link to Contact Group"],
  }))
}

/*
 * Primary export
 */

module.exports = async () => {
  const AIRTABLE_AUTH_TOKEN = process.env && process.env.AIRTABLE_AUTH_TOKEN;


  if (!AIRTABLE_AUTH_TOKEN) {
    console.warn(chalk.black.bgYellow('No "AIRTABLE_AUTH_TOKEN" found in ".env" file. The "{{ dynamic }}" object has been populated with mock data.'))

    return {
      groups: transformGroupsData(AIRTABLE_GROUP_API_MOCK),
    }
  } 

  console.log(chalk.black.bgGreen('"AIRTABLE_AUTH_TOKEN" found in ".env" file. The "{{ dynamic }}" object has been populated with production data.'));
  const { data } = await axios.get(`https://api.airtable.com/v0/app68ZSxKJJR3AoCB/Groups?api_key=${AIRTABLE_AUTH_TOKEN}`)

  return {
    groups: transformGroupsData(data),
  }
};

