<script lang="ts">
  import "./page.scss";
  import ContentfulRichText from "$lib/components/ContentfulRichText";
  // import VideoCard from "$lib/components/VideoCard";

  import {
    src as underConstructionGif,
    width as underConstructionWidth,
    height as underConstructionHeight,
  } from "$lib/assets/under-construction.gif?as=metadata&imagetoolsMetadata";

  // vite-imagetools doesn't support converting to an animated avif on the fly, so i did it ahead of
  // time and added it to the repo. it's only 12kb.
  import underConstructionAvif from "$lib/assets/under-construction.avif";

  import landingImage from "$lib/assets/commissioner-strain-with-farmer.jpg?quality=85&imagetools";
  import landingImageMobile from "$lib/assets/commissioner-strain-with-farmer.jpg?quality=85&w=412&imagetools";
  import landingImageWebP from "$lib/assets/commissioner-strain-with-farmer.jpg?format=webp&quality=85&imagetools";
  import landingImageWebpMobile from "$lib/assets/commissioner-strain-with-farmer.jpg?format=webp&quality=85&w=412&imagetools";
  import landingImageAvif from "$lib/assets/commissioner-strain-with-farmer.jpg?format=avif&quality=85&imagetools";
  import landingImageAvifMobile from "$lib/assets/commissioner-strain-with-farmer.jpg?format=avif&quality=85&w=412&imagetools";
  import landingImageBlurhash, {
    width as landingImageWidth,
    height as landingImageHeight,
    mean as landingImageMean,
  } from "$lib/assets/commissioner-strain-with-farmer.jpg?blurhash";

  import Image from "$lib/components/Image";

  export let data;
</script>

<main id="main-content">
  <Image
    class="main-image"
    alt=""
    loading="eager"
    src={landingImage}
    sources={[
      { type: "image/avif", srcset: [landingImageAvif, [landingImageAvifMobile, 412]] },
      { type: "image/webp", srcset: [landingImageWebP, [landingImageWebpMobile, 412]] },
      { type: "image/jpeg", srcset: [landingImage, [landingImageMobile, 412]] },
    ]}
    blurhash={landingImageBlurhash}
    width={landingImageWidth}
    height={landingImageHeight}
    sizeType="full-bleed"
    mean={landingImageMean}
    preserveAspectRatio={false}
    style="object-position: 0 25%"
  />
  <section class="grid-container homepage-greeting maxw-tablet">
    <ContentfulRichText document={data.title} />
    <div class="grid-row">
      <div class="grid-col-4 construction-sign-container">
        <Image
          src={underConstructionGif}
          sources={[
            { type: "image/avif", srcset: [underConstructionAvif] },
            { type: "image/gif", srcset: [underConstructionGif] },
          ]}
          alt="Under construction sign swinging in the wind"
          width={underConstructionWidth}
          height={underConstructionHeight}
        />
      </div>
      <div class="grid-col-8 padding-left-4">
        <ContentfulRichText document={data.body} />
      </div>
    </div>
  </section>
  <!-- TODO: Uncomment when working on homepage, provide data from Contentful. -->
  <!--
  <div class="grid-container margin-top-2">
    <VideoCard url="https://www.youtube.com/watch?v=3HRGzFjA_cU" variation="hero" />
  </div>
  -->
</main>
