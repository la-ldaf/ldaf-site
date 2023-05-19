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

  import GraphicList from "$lib/components/landingPage/GraphicList.svelte";
  import Hero from "$lib/components/landingPage/Hero.svelte";
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
  console.log(Object.keys(data));
  // console.log(JSON.stringify(data.content, null, 2));
</script>

<!-- <Hero />
<section class="grid-container usa-section">
  <div class="grid-row grid-gap">
    <div class="tablet:grid-col-4">
      <h2 class="font-heading-xl margin-top-0 tablet:margin-bottom-0">
        A tagline highlights your approach
      </h2>
    </div>
    <div class="tablet:grid-col-8 usa-prose">
      <p>
        The tagline should inspire confidence and interest, focusing on the value that your overall
        approach offers to your audience. Use a heading typeface and keep your tagline to just a few
        words, and don’t confuse or mystify.
      </p>
      <p>
        Use the right side of the grid to explain the tagline a bit more. What are your goals? How
        do you do your work? Write in the present tense, and stay brief here. People who are
        interested can find details on internal pages.
      </p>
      <a class="usa-button usa-button--big" href="/">Call to action</a>
    </div>
  </div>
</section>
<GraphicList />
<section id="test-section-id" class="usa-section">
  <div class="grid-container">
    <h2 class="font-heading-xl margin-y-0">Section heading</h2>
    <p class="usa-intro">
      Everything up to this point should help people understand your agency or project: who you are,
      your goal or mission, and how you approach it. Use this section to encourage them to act.
      Describe why they should get in touch here, and use an active verb on the button below. “Get
      in touch,” “Learn more,” and so on.
    </p>
    <a class="usa-button usa-button--big" href="/">Call to action</a>
    <Image
      alt=""
      src={sampleImage}
      sources={imageSources}
      blurhash={sampleImageBlurhash}
      width={sampleImageWidth}
      height={sampleImageHeight}
      mean={sampleImageMean}
    />
  </div>
</section> -->

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

<style>
  .construction-sign {
    max-width: 175px;
  }
</style>
