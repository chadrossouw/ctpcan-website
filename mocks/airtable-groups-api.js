const faker = require('faker');

const CLUSTERS = [
  'Community Action Networks (A-H)',
  'Community Action Networks (I-O)',
  'Network Action Issues',
  'Community Action Networks (P-Z)',
]

faker.seed(1)

const RESPONSE = {
  offset: faker.random.uuid(),
  records: new Array(50).fill(undefined).map(() => ({
    id: faker.random.uuid(),
    createdTime: faker.date.past(),
    fields: {
      'Group Name': faker.commerce.productName(),
      Recid: faker.lorem.slug(),
      Cluster: faker.random.arrayElement(CLUSTERS),
      'Link to Contact Group': faker.internet.url(),
      'Last Modified Time': faker.date.recent(),
      'Link to sign-up as volunteer': faker.internet.url(),
    }
  }))
}

module.exports = RESPONSE;