<script lang="ts">
  import ldafLogo from "$lib/assets/ldaf-flat-logo-transparent-optimized.png?quality=85&imagetools";
  import { width, height } from "$lib/assets/ldaf-flat-logo-transparent-optimized.png?blurhash";
  import ldafLogo2x from "$lib/assets/ldaf-flat-logo-transparent-optimized-2x.png?quality=85&imagetools";
  import { width as width2x } from "$lib/assets/ldaf-flat-logo-transparent-optimized-2x.png?blurhash";
  import ldafLogoWebp from "$lib/assets/ldaf-flat-logo-transparent-optimized.png?format=webp&quality=85&imagetools";
  import ldafLogoWebp2x from "$lib/assets/ldaf-flat-logo-transparent-optimized-2x.png?format=webp&quality=85&imagetools";
  import ldafLogoAvif from "$lib/assets/ldaf-flat-logo-transparent-optimized.png?format=avif&quality=85&imagetools";
  import ldafLogoAvif2x from "$lib/assets/ldaf-flat-logo-transparent-optimized-2x.png?format=avif&quality=85&imagetools";
  import Image from "$lib/components/Image/Image.svelte";
</script>

<!-- TODO: Replace alt value with content from CMS. -->
<Image
  src={ldafLogo}
  alt="Louisiana Department of Agriculture and Forestry Home"
  {width}
  {height}
  loading="eager"
  sources={[
    { type: "image/avif", srcset: [ldafLogoAvif, [ldafLogoAvif2x, width2x]] },
    { type: "image/webp", srcset: [ldafLogoWebp, [ldafLogoWebp2x, width2x]] },
    { type: "image/png", srcset: [ldafLogo, [ldafLogo2x, width2x]] },
  ]}
/>
