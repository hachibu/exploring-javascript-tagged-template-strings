var createTag = require('../create-tag'),
    gql       = require('graphql-tag');

console.log(
  gql`{
    users {
      name
    }
  }`
);
