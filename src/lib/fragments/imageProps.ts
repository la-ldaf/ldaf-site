import gql from "graphql-tag";
export default gql`
  fragment ImageProps on Asset {
    sys {
      id
    }
    contentType
    title
    description
    url
    width
    height
  }
`;
