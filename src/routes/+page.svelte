<script lang="ts">
  import "./page.scss";
  import ContentfulRichText from "$lib/components/ContentfulRichText";
  import underConstructionGif from "$lib/assets/under-construction.gif";
  import landingImage from "$lib/assets/commissioner-strain-with-farmer.jpg?quality=75&imagetools";
  import landingImageMobile from "$lib/assets/commissioner-strain-with-farmer.jpg?quality=75&w=412&imagetools";
  import landingImageWebP from "$lib/assets/commissioner-strain-with-farmer.jpg?webp&quality=75&imagetools";
  import landingImageWebpMobile from "$lib/assets/commissioner-strain-with-farmer.jpg?webp&quality=75&w=412&imagetools";
  import landingImageBlurhash, {
    width as landingImageWidth,
    height as landingImageHeight,
    mean as landingImageMean,
  } from "$lib/assets/commissioner-strain-with-farmer.jpg?blurhash";

  import Image, {
    generateSourcesFromFixedSetOfImages,
    type FixedSetOfImages,
  } from "$lib/components/Image";

  const images = [
    { format: "image/jpeg", size: "original", src: landingImage },
    { format: "image/jpeg", size: 412, src: landingImageMobile },
    { format: "image/webp", size: "original", src: landingImageWebP },
    { format: "image/webp", size: 412, src: landingImageWebpMobile },
  ] satisfies FixedSetOfImages;

  const imageSources = generateSourcesFromFixedSetOfImages(images);

  export let data;
</script>

<Image
  class="main-image"
  alt=""
  src={landingImage}
  sources={imageSources}
  blurhash={landingImageBlurhash}
  width={landingImageWidth}
  height={landingImageHeight}
  mean={landingImageMean}
/>
<section class="grid-container maxw-tablet">
  <ContentfulRichText document={data.title} />
  <div class="grid-row">
    <img
      class="grid-col-4 construction-sign"
      alt="Under construction sign swinging in the wind"
      src={underConstructionGif}
    />
    <div class="grid-col-8 padding-left-4">
      <ContentfulRichText document={data.body} />
    </div>
  </div>
</section>
