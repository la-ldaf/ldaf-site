# Algolia-related endpoints

We probably need the following server endpoints:
  - `GET` all of the page metadata map (Louis' work uses this too)
  - `POST` individual updates from Contenful's webhook (update properties on the page metadata map as needed, eventually support other types here, as well)
  - `POST` reset algolia index
    - Options to either *update* or *replace* everything
      - Subtle but import distinction to determine.

Other implementation details:
  - Update objectID in Algolia records to match sys.id on Contentful content
    - This should make for easier updating of values
  - Filter and act accordingly based on Content type ids
    - Is there a way to do this with GraphQL or are we restricted to using `getContentTypes` on the Contentful JS client?
    - Right now, we only care about content types of type 'pageMetadata'. In the future, this will expand to probably other things (e.g. serviceGroup, serviceEntry, and topTier content types) that will have useful information not in the metaTitle and metaDescription.
