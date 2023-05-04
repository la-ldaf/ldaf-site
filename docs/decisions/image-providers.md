# Decision Doc - Image Providers

## Providers

We have access to three image APIs:

- Contentful
- Imgix
- Vercel

### [Contentful](https://www.contentful.com/developers/docs/references/images-api/)

- where our media would go by default
- the second most flexible API
- can resize without a list of up-front sizes
- can return source image size
- charges based on monthly number of source images (up to 50k included in our plan) and monthly asset bandwidth (up to 2.5TB included in our plan)

### [Imgix](https://docs.imgix.com/apis/rendering)

- the most flexible and featureful API
- the only API to support blurhashes (but this can potentially be replaced by a serverless function)
- can resize without a list of up-front sizes
- charges based on monthly number of source images (up to 1k included in our free plan)
- has a Contentful app that appears to replace Contentful's asset management with an asset manager that uploads directly to the configured Imgix source
- can proxy another API, but this has the potential to balloon source image count

### [Vercel](https://vercel.com/docs/concepts/image-optimization)

- is hosted at the same domain as the site
- is served from the same edge CDN as the site
- least flexible API
- resizing requires an up-front list of desired sizes at build time
- charges based on monthly number of source images (up to 5k included in our plan)
- can proxy another API, but this has the potential to balloon source image count

## Possible setups

With Contentful as the media source:

- `browser <-> contentful`
- `browser <-> vercel <-> contentful`
- `browser <-> imgix <-> contentful`
- `browser <-> vercel <-> imgix <-> contentful`

With Imgix as the media source (using Imgix's Contentful app):

- `browser <-> imgix`
- `browser <-> vercel <-> imgix`

On the server side, we will use the following techniques if using Contentful as the media source:

- sizes: `server <-> contentful`
- blurhashes: `server <-> imgix <-> contentful` or `server <-> custom serverless function <-> contentful`

...and `server <-> imgix` for both sizes and blurhashes if using Imgix as the media source.

## Imgix vs Contentful as media source

- We're already paying for Contentful
- Contentful's paid plan has much higher source image limits than Imgix's free plan
- Contentful's media editor is more robust and has more features than the Imgix addon (it lets you resize the source image itself, for instance)
- If we used Imgix as the source we would need to figure out a service to host the source images and pay for it (Imgix only hosts the transformations)
- It's architecturally simpler to keep the media with the content
- Using Imgix in front of Contentful (instead of as the source) allows Imgix to be removed or replaced more easily

For all these reasons, it seems clear that Contentful is the better choice as a source of images. The Imgix add-on would be more appropriate if we had a requirement to host the images outside of Contentful somewhere, if we had an existing source of images we wanted to keep using, or if we wanted to use a second source of images in addition to Contentful.

## Advantages of using Imgix

- Imgix has many more processing features than other services
- Imgix supports blurhashes natively
- Imgix supports client hints (this is browser-dependent and requires that Imgix handles requests directly from the browser)

## Advantages of using Vercel

- We're already using Vercel hosting
- Images will be served from the same domain as the site
- Images will be cached in the same edge CDN as the site (but with different cache rules to maximize image caching)
