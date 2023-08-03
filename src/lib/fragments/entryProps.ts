import gql from "graphql-tag";
export default gql`
  fragment EntryProps on Entry {
    __typename
    ... on PageMetadata {
      sys {
        id
      }
    }

    ... on ImageWrapper {
      sys {
        id
      }
      __typename
      internalTitle
      altText
      linkedImage {
        title
        description
        contentType
        fileName
        size
        url
        width
        height
      }
      imageCategory {
        categoryName
        categoryDescription
      }
    }
    ... on Contact {
      sys {
        id
      }
      __typename
      entityName
      phoneExt
      email
      # location {
      #   name
      #   streetAddress1
      #   streetAddress2
      #   city
      #   state
      #   zip
      # }
    }
  }
`;
