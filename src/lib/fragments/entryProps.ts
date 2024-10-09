// TODO: We're using this fragment in queries where we know we only need
// a subset of these properties (i.e., we're specifically targeting one
// of either ImageWrapper, Contact, or Call to Action). We should try to
// break this up into separate fragments for those different situations.
// It will both simplify queries and make what's requested more explicit.
import gql from "graphql-tag";
import assetProps from "$lib/fragments/assetProps"; 

export default gql`
  ${assetProps}
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
    ... on CallToAction {
      callToActionDestination {
        json
        links {
          assets {
            hyperlink {
              ...AssetProps
            }
          }
        }
      }
    }
    
    ... on EventEntry {
      sys {
        id
      }
      slug
      shortTitle
      eventDescription
      eventDateAndTime
    }
    
    ... on News {
      sys {
        id
      }
      type
      title
      subhead
      publicationDate
      slug
      byline
    }
  }
`;
