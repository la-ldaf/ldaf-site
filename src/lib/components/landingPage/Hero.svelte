<script lang="ts">
  import "./Hero.scss";

  import heroImg from "@uswds/uswds/img/hero.jpg?quality=75&imagetools";
  import heroImgMobile from "@uswds/uswds/img/hero.jpg?quality=75&w=412&imagetools";
  import heroImgWebp from "@uswds/uswds/img/hero.jpg?webp&quality=75&imagetools";
  import heroImgWebpMobile from "@uswds/uswds/img/hero.jpg?webp&quality=75&w=412&imagetools";
  import heroImgBlurhash, {
    width as heroImgWidth,
    height as heroImgHeight,
    mean as heroImgMean,
  } from "@uswds/uswds/img/hero.jpg?blurhash";
  import Image, {
    generateSourcesFromFixedSetOfImages,
    type FixedSetOfImages,
  } from "$lib/components/Image";

  const images = [
    { format: "image/jpeg", size: "original", src: heroImg },
    { format: "image/jpeg", size: 412, src: heroImgMobile },
    { format: "image/webp", size: "original", src: heroImgWebp },
    { format: "image/webp", size: 412, src: heroImgWebpMobile },
  ] satisfies FixedSetOfImages;

  const imageSources = generateSourcesFromFixedSetOfImages(images);
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
    mean={heroImgMean}
    loading="eager"
  />
</section>
