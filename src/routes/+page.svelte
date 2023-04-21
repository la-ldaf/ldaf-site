<script lang="ts">
  import sampleImage from "../sample.jpg?quality=75";
  import sampleImageMobile from "../sample.jpg?quality=75&w=412";
  import sampleImageWebp from "../sample.jpg?webp&quality=75";
  import sampleImageWebpMobile from "../sample.jpg?webp&quality=75&w=412";
  import sampleImageBlurhash, {
    width as sampleImageWidth,
    height as sampleImageHeight,
    mean as sampleImageMean,
  } from "../sample.jpg?blurhash";
  import GraphicList from "$lib/components/landingPage/GraphicList.svelte";
  import Hero from "$lib/components/landingPage/Hero.svelte";
  import Image from "$lib/components/Image";
</script>

<Hero />
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
      sources={[
        { type: "image/webp", srcset: [sampleImageWebp, [sampleImageWebpMobile, 412]] },
        { type: "image/jpeg", srcset: [sampleImage, [sampleImageMobile, 412]] },
      ]}
      blurhash={sampleImageBlurhash}
      width={sampleImageWidth}
      height={sampleImageHeight}
      mean={sampleImageMean}
    />
  </div>
</section>
