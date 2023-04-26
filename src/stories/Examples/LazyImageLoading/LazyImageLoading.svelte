<script lang="ts">
  import Image from "$lib/components/Image";
  import type { LazyLoading } from "$lib/components/Image/types";
  import { RootIntersectionObserver } from "$lib/components/IntersectionObserver";

  import sampleImage from "../../../sample.jpg";
  import sampleImageBlurhash, {
    width as sampleImageWidth,
    height as sampleImageHeight,
    mean as sampleImageMean,
  } from "../../../sample.jpg?blurhash";

  export let lazyLoadingType: LazyLoading = "intersectionObserver";

  let images: {
    src: string;
    blurhash: string;
    mean: { r: number; g: number; b: number };
    width: number;
    height: number;
  }[] = [];
  let thisContainer: HTMLDivElement;
  let thisEndOfList: HTMLDivElement;

  let observer: IntersectionObserver;

  const image = {
    src: sampleImage,
    blurhash: sampleImageBlurhash,
    mean: sampleImageMean,
    width: sampleImageWidth,
    height: sampleImageHeight,
  };
  $: if (thisContainer && thisEndOfList && !observer) {
    observer = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting) {
        images.push(image, image, image, image, image);
        images = images;
      }
    });
    observer.observe(thisEndOfList);
  }

  $: if (observer && images) {
    // re-observe each time images changes
    observer.unobserve(thisEndOfList);
    observer.observe(thisEndOfList);
  }
</script>

<RootIntersectionObserver rootMargin="0px 0px -75% 0px">
  <div class="container" bind:this={thisContainer}>
    <div class="highlight-border" />
    {#each images as { src, blurhash, mean, width, height }}
      <Image alt="" {lazyLoadingType} {src} {blurhash} {mean} {width} {height} />
    {/each}
    <div class="end" bind:this={thisEndOfList} />
  </div>
</RootIntersectionObserver>

<style lang="scss">
  .container {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    gap: 50px;
    overflow-y: scroll;
  }
  .end {
    width: 100%;
    height: 50px;
  }
  .highlight-border {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 75vh;
    border-bottom: 1px solid green;
    z-index: 1;
    pointer-events: none;
  }
</style>
