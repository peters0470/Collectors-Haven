import gql from 'graphql-tag';



export const ADD_ITEM = gql`
  mutation addItem($collection: [ID]!) {
    addItem(collection: $collection) {
        _id
        name
        description
        condition
        priceBought
      
      
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_COLLECTION = gql`
  mutation addCollection($name: String!) {
    addCollection(name: $name) {
        name
    }    
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;