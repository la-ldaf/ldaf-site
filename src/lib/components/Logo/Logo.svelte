<script lang="ts">
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

  import stackedCommissionerLogo from "$lib/assets/ldaf-stacked-strain-full-color-rgb-176px.png?quality=85&imagetools";
  import {
    width as stackedCommissionerLogoWidth,
    height as stackedCommissionerLogoHeight,
  } from "$lib/assets/ldaf-stacked-strain-full-color-rgb-176px.png?blurhash";
  import stackedCommissionerLogo2x from "$lib/assets/ldaf-stacked-strain-full-color-rgb-352px.png?quality=85&imagetools";
  import stackedCommissionerLogoWebp from "$lib/assets/ldaf-stacked-strain-full-color-rgb-176px.png?format=webp&quality=85&imagetools";
  import stackedCommissionerLogoWebp2x from "$lib/assets/ldaf-stacked-strain-full-color-rgb-352px.png?format=webp&quality=85&imagetools";
  import stackedCommissionerLogoAvif from "$lib/assets/ldaf-stacked-strain-full-color-rgb-176px.png?format=avif&quality=85&imagetools";
  import stackedCommissionerLogoAvif2x from "$lib/assets/ldaf-stacked-strain-full-color-rgb-352px.png?format=avif&quality=85&imagetools";

  import horizWideCommissionerLogo from "$lib/assets/ldaf-horiz-wide-strain-white-rgb-600px.png?quality=85&imagetools";
  import {
    width as horizWideCommissionerLogoWidth,
    height as horizWideCommissionerLogoHeight,
  } from "$lib/assets/ldaf-horiz-wide-strain-white-rgb-600px.png?blurhash";
  import horizWideCommissionerLogo2x from "$lib/assets/ldaf-horiz-wide-strain-white-rgb-1200px.png?quality=85&imagetools";
  import horizWideCommissionerLogoWebp from "$lib/assets/ldaf-horiz-wide-strain-white-rgb-600px.png?format=webp&quality=85&imagetools";
  import horizWideCommissionerLogoWebp2x from "$lib/assets/ldaf-horiz-wide-strain-white-rgb-1200px.png?format=webp&quality=85&imagetools";
  import horizWideCommissionerLogoAvif from "$lib/assets/ldaf-horiz-wide-strain-white-rgb-600px.png?format=avif&quality=85&imagetools";
  import horizWideCommissionerLogoAvif2x from "$lib/assets/ldaf-horiz-wide-strain-white-rgb-1200px.png?format=avif&quality=85&imagetools";

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

  import Image from "$lib/components/Image";
  import type { Placement } from "./logoOptions";

  const logoMap: Record<
    Placement,
    {
      logo: string;
      logo2x: string;
      width: number;
      height: number;
      logoWebp: string;
      logoWebp2x: string;
      logoAvif: string;
      logoAvif2x: string;
    }
  > = {
    "mobile-header-main": {
      logo: textLogo,
      logo2x: textLogo2x,
      width: textLogoWidth,
      height: textLogoHeight,
      logoWebp: textLogoWebp,
      logoWebp2x: textLogoWebp2x,
      logoAvif: textLogoAvif,
      logoAvif2x: textLogoAvif2x,
    },
    "mobile-header-menu": {
      logo: stackedCommissionerLogo,
      logo2x: stackedCommissionerLogo2x,
      width: stackedCommissionerLogoWidth,
      height: stackedCommissionerLogoHeight,
      logoWebp: stackedCommissionerLogoWebp,
      logoWebp2x: stackedCommissionerLogoWebp2x,
      logoAvif: stackedCommissionerLogoAvif,
      logoAvif2x: stackedCommissionerLogoAvif2x,
    },
    "desktop-header": {
      logo: horizWideCommissionerLogo,
      logo2x: horizWideCommissionerLogo2x,
      width: horizWideCommissionerLogoWidth,
      height: horizWideCommissionerLogoHeight,
      logoWebp: horizWideCommissionerLogoWebp,
      logoWebp2x: horizWideCommissionerLogoWebp2x,
      logoAvif: horizWideCommissionerLogoAvif,
      logoAvif2x: horizWideCommissionerLogoAvif2x,
    },
    "mobile-footer": {
      logo: stackedLogo,
      logo2x: stackedLogo2x,
      width: stackedLogoWidth,
      height: stackedLogoHeight,
      logoWebp: stackedLogoWebp,
      logoWebp2x: stackedLogoWebp2x,
      logoAvif: stackedLogoAvif,
      logoAvif2x: stackedLogoAvif2x,
    },
    "desktop-footer": {
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

  export let placement: Placement = "mobile-header-main";

  const { logo, logo2x, width, height, logoWebp, logoWebp2x, logoAvif, logoAvif2x } =
    logoMap[placement];
</script>

<!-- TODO: Replace alt value with content from CMS. -->
<!-- The alt text for all logos should probably be the same; there probably
     isn't much of a need to differentiate the variations of the logo to a
     non-sighted user. -->
<Image
  src={logo}
  alt="Louisiana Department of Agriculture and Forestry logo"
  {width}
  {height}
  loading="eager"
  sources={[
    { type: "image/avif", srcset: [logoAvif, [logoAvif2x, width * 2]] },
    { type: "image/webp", srcset: [logoWebp, [logoWebp2x, width * 2]] },
    { type: "image/png", srcset: [logo, [logo2x, width * 2]] },
  ]}
/>
