<script lang="ts">
  import "./page.scss";
  import ContentfulRichText from "$lib/components/ContentfulRichText";
  import underConstructionGif from "$lib/assets/under-construction.gif";
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

  import type { Source } from "$lib/components/Image";

  const imageSources: Source[] = [
    { type: "image/avif", srcset: [landingImageAvif, [landingImageAvifMobile, 412]] },
    { type: "image/webp", srcset: [landingImageWebP, [landingImageWebpMobile, 412]] },
    { type: "image/jpeg", srcset: [landingImage, [landingImageMobile, 412]] },
  ];

  export let data;
</script>

<main id="main-content">
  <Image
    class="main-image"
    alt=""
    loading="eager"
    src={landingImage}
    sources={imageSources}
    blurhash={landingImageBlurhash}
    width={landingImageWidth}
    height={landingImageHeight}
    mean={landingImageMean}
    style="object-position: 0 25%"
  />
  <section class="grid-container homepage-greeting maxw-tablet">
    <ContentfulRichText document={data.title} />
    <div class="grid-row">
      <div class="grid-col-4 construction-sign-container">
        <img
          class="construction-sign"
          alt="Under construction sign swinging in the wind"
          src={underConstructionGif}
        />
      </div>
      <div class="grid-col-8 padding-left-4">
        <ContentfulRichText document={data.body} />
      </div>
    </div>
  </section>
</main>
