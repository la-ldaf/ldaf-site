import gql from "graphql-tag";
export default gql`
  fragment AssetProps on Asset {
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
