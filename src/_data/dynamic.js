/*
 * Third-party modules 
 */

// const axios = require('axios');
const chalk = require('chalk');
const { config } = require('dotenv');

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
  const { parsed: env } = config();
  const isIgnoreCache = env.BYPASS_CACHE === 'true';

  if (!env.AIRTABLE_AUTH_TOKEN) {
    console.warn(chalk.black.bgYellow('NOTE: No AIRTABLE_AUTH_TOKEN found in ".env" file. The "{{ dynamic }}" object will be populated with mock data.'))

    return {
      groups: transformGroupsData(AIRTABLE_GROUP_API_MOCK),
      meta: {
        bypassCache: isIgnoreCache,
      }
    }
  } 

  console.log(chalk.black.bgGreen('AIRTABLE_AUTH_TOKEN found in ".env" file. The "{{ dynamic }}" object will be populated with production data.'));
  const { data } = await Promise.resolve({ data: AIRTABLE_GROUP_API_MOCK });

  return {
    groups: transformGroupsData(data),
    meta: {
      bypassCache: isIgnoreCache,
    }
  }
};

