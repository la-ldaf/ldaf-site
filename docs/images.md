# Images

- We use the Contentful Image API to resize images and convert their formats
- `imageServices`
- blurhashes
- `width` and `height`
- sources
- `sizes` and size types
- `renderedWidths`

## Props

Required:

- `height`
- `width`

Optional:

- `fit` (defaults to `true`)
- `sizeType` (defaults to `"static"`)
- `canUpscaleImage` (defaults to `sizeType === "full-bleed"`)
