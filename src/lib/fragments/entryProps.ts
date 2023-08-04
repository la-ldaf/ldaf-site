import gql from "graphql-tag";
export default gql`
  fragment EntryProps on Entry {
    __typename
    sys {
      id
    }

    ... on ImageWrapper {
      internalTitle
      altText
      linkedImage {
        sys {
          id
        }
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
      entityName
      phoneExt
      email
      location {
        name
        streetAddress1
        streetAddress2
        city
        state
        zip
      }
    }
  }
`;
