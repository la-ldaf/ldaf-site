<script lang="ts">
  import Image from "$lib/components/Image";

  import textLogo from "$lib/assets/ldaf-logo-type-white-rgb-300px.png?quality=85&imagetools";
  import {
    width as textLogoWidth,
    height as textLogoHeight,
  } from "$lib/assets/ldaf-logo-type-white-rgb-300px.png?blurhash";
  import textLogo2x from "$lib/assets/ldaf-logo-type-white-rgb-600px.png?quality=85&imagetools";
  import textLogoWebp from "$lib/assets/ldaf-logo-type-white-rgb-300px.png?format=webp&quality=85&imagetools";
  import textLogoWebp2x from "$lib/assets/ldaf-logo-type-white-rgb-600px.png?format=webp&quality=85&imagetools";
  import textLogoAvif from "$lib/assets/ldaf-logo-type-white-rgb-300px.png?format=avif&quality=85&imagetools";
  import textLogoAvif2x from "$lib/assets/ldaf-logo-type-white-rgb-600px.png?format=avif&quality=85&imagetools";

  import horizWideCommissionerLogo from "$lib/assets/ldaf-horiz-wide-strain-full-color-rgb-600px.png?quality=85&imagetools";
  import {
    width as horizWideCommissionerLogoWidth,
    height as horizWideCommissionerLogoHeight,
  } from "$lib/assets/ldaf-horiz-wide-strain-full-color-rgb-600px.png?blurhash";
  import horizWideCommissionerLogo2x from "$lib/assets/ldaf-horiz-wide-strain-full-color-rgb-1200px.png?quality=85&imagetools";
  import horizWideCommissionerLogoWebp from "$lib/assets/ldaf-horiz-wide-strain-full-color-rgb-600px.png?format=webp&quality=85&imagetools";
  import horizWideCommissionerLogoWebp2x from "$lib/assets/ldaf-horiz-wide-strain-full-color-rgb-1200px.png?format=webp&quality=85&imagetools";
  import horizWideCommissionerLogoAvif from "$lib/assets/ldaf-horiz-wide-strain-full-color-rgb-600px.png?format=avif&quality=85&imagetools";
  import horizWideCommissionerLogoAvif2x from "$lib/assets/ldaf-horiz-wide-strain-full-color-rgb-1200px.png?format=avif&quality=85&imagetools";

  import stackedLogo from "$lib/assets/ldaf-stacked-white-rgb-600px.png?quality=85&imagetools";
  import {
    width as stackedLogoWidth,
    height as stackedLogoHeight,
  } from "$lib/assets/ldaf-stacked-white-rgb-600px.png?blurhash";
  import stackedLogo2x from "$lib/assets/ldaf-stacked-white-rgb-1200px.png?quality=85&imagetools";
  import stackedLogoWebp from "$lib/assets/ldaf-stacked-white-rgb-600px.png?format=webp&quality=85&imagetools";
  import stackedLogoWebp2x from "$lib/assets/ldaf-stacked-white-rgb-1200px.png?format=webp&quality=85&imagetools";
  import stackedLogoAvif from "$lib/assets/ldaf-stacked-white-rgb-600px.png?format=avif&quality=85&imagetools";
  import stackedLogoAvif2x from "$lib/assets/ldaf-stacked-white-rgb-1200px.png?format=avif&quality=85&imagetools";

  import horizLogo from "$lib/assets/ldaf-horiz-white-rgb-600px.png?quality=85&imagetools";
  import {
    width as horizLogoWidth,
    height as horizLogoHeight,
  } from "$lib/assets/ldaf-horiz-white-rgb-600px.png?blurhash";
  import horizLogo2x from "$lib/assets/ldaf-horiz-white-rgb-1200px.png?quality=85&imagetools";
  import horizLogoWebp from "$lib/assets/ldaf-horiz-white-rgb-600px.png?format=webp&quality=85&imagetools";
  import horizLogoWebp2x from "$lib/assets/ldaf-horiz-white-rgb-1200px.png?format=webp&quality=85&imagetools";
  import horizLogoAvif from "$lib/assets/ldaf-horiz-white-rgb-600px.png?format=avif&quality=85&imagetools";
  import horizLogoAvif2x from "$lib/assets/ldaf-horiz-white-rgb-1200px.png?format=avif&quality=85&imagetools";

  const logoMap = {
    text: {
      logo: textLogo,
      logo2x: textLogo2x,
      width: textLogoWidth,
      height: textLogoHeight,
      logoWebp: textLogoWebp,
      logoWebp2x: textLogoWebp2x,
      logoAvif: textLogoAvif,
      logoAvif2x: textLogoAvif2x,
    },
    "horiz-wide-commissioner": {
      logo: horizWideCommissionerLogo,
      logo2x: horizWideCommissionerLogo2x,
      width: horizWideCommissionerLogoWidth,
      height: horizWideCommissionerLogoHeight,
      logoWebp: horizWideCommissionerLogoWebp,
      logoWebp2x: horizWideCommissionerLogoWebp2x,
      logoAvif: horizWideCommissionerLogoAvif,
      logoAvif2x: horizWideCommissionerLogoAvif2x,
    },
    stacked: {
      logo: stackedLogo,
      logo2x: stackedLogo2x,
      width: stackedLogoWidth,
      height: stackedLogoHeight,
      logoWebp: stackedLogoWebp,
      logoWebp2x: stackedLogoWebp2x,
      logoAvif: stackedLogoAvif,
      logoAvif2x: stackedLogoAvif2x,
    },
    horiz: {
      logo: horizLogo,
      logo2x: horizLogo2x,
      width: horizLogoWidth,
      height: horizLogoHeight,
      logoWebp: horizLogoWebp,
      logoWebp2x: horizLogoWebp2x,
      logoAvif: horizLogoAvif,
      logoAvif2x: horizLogoAvif2x,
    },
  };
  type LogoMap = typeof logoMap;

  export let variant: keyof LogoMap = "text";

  const { logo, logo2x, width, height, logoWebp, logoWebp2x, logoAvif, logoAvif2x } =
    logoMap[variant];
</script>

<!-- TODO: Replace alt value with content from CMS. -->
<Image
  src={logo}
  alt="Louisiana Department of Agriculture and Forestry Home"
  {width}
  {height}
  loading="eager"
  sources={[
    { type: "image/avif", srcset: [logoAvif, [logoAvif2x, width * 2]] },
    { type: "image/webp", srcset: [logoWebp, [logoWebp2x, width * 2]] },
    { type: "image/png", srcset: [logo, [logo2x, width * 2]] },
  ]}
/>
