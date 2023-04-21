<script lang="ts">
  import Icon from "$lib/components/Icon";
  import { namesToPaths } from "$icons";

  export let name: string;

  const setSrc = async (name: string) => {
    const pathWithinImg = namesToPaths[name];
    const request = await fetch(`./node_modules/@uswds/uswds/dist/img/${pathWithinImg}`);
    const rawSrc = await request.text();
    const onelineSrc = rawSrc.replaceAll(/\s+/g, " ");
    const escapedSrc = onelineSrc.replaceAll("#", "%23");
    const url = `data:image/svg+xml;charset=utf8,${escapedSrc}`;
    src = url;
  };

  let src: string;
  $: setSrc(name);
</script>

<Icon {src} {...$$restProps} />
