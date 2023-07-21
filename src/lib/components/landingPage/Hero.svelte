<script lang="ts">
  import "./Hero.scss";

  import heroImg from "@uswds/uswds/img/hero.jpg?quality=75&imagetools";
  import heroImgMobile from "@uswds/uswds/img/hero.jpg?quality=75&w=412&imagetools";
  import heroImgWebp from "@uswds/uswds/img/hero.jpg?format=webp&quality=75&imagetools";
  import heroImgWebpMobile from "@uswds/uswds/img/hero.jpg?format=webp&quality=75&w=412&imagetools";
  import heroImgAvif from "@uswds/uswds/img/hero.jpg?format=avif&quality=75&imagetools";
  import heroImgAvifMobile from "@uswds/uswds/img/hero.jpg?format=avif&quality=75&w=412&imagetools";
  import heroImgBlurhash, {
    width as heroImgWidth,
    height as heroImgHeight,
    mean as heroImgMean,
  } from "@uswds/uswds/img/hero.jpg?blurhash";
  import Image, { type Source } from "$lib/components/Image";

  const imageSources: Source[] = [
    { type: "image/avif", srcset: [heroImgAvif, [heroImgAvifMobile, 412]] },
    { type: "image/webp", srcset: [heroImgWebp, [heroImgWebpMobile, 412]] },
    { type: "image/jpeg", srcset: [heroImg, [heroImgMobile, 412]] },
  ];
</script>

<section class="usa-hero" aria-label="Introduction">
  <Image
    alt=""
    class="usa-hero__bg-img"
    src={heroImg}
    sources={imageSources}
    blurhash={heroImgBlurhash}
    width={heroImgWidth}
    height={heroImgHeight}
    fit
    mean={heroImgMean}
    loading="eager"
  />
</section>
