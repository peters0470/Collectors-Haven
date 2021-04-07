import gql from "graphql-tag";



export const QUERY_ALL_COLLECTION = gql`
  {
    collections {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
{
  user {
    _id
    username
    email
    collectionCount
    collection {
      _id
      name
      items{
        _id
        name
        description
        condition
        priceBought
      }
    }
      }
    }
  }
}
`;

//get items within a specific collection
export const QUERY_ITEMS = gql`
query getItems($collection: ID) {
  items(collection: $collection) {
    _id
    name
    description
    condition
    priceBought
    collection {
      _id
    }
  }
}
`;
//gets all items and their collection id
export const QUERY_ALL_ITEMS = gql`
  {
    items {
      _id
      name
      description
      condition
      priceBought
      collection{
        _id
      }
    }
  }
`;





