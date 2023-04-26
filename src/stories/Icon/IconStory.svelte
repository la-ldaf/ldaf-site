<script lang="ts">
  import Icon from "$lib/components/Icon";
  import { getIconSrcByName } from "./icons";

  export let name: string;

  const setSrc = async (name: string) => {
    const rawSrc = await getIconSrcByName(name);
    const onelineSrc = rawSrc.replaceAll(/\s+/g, " ");
    const escapedSrc = onelineSrc.replaceAll("#", "%23");
    const url = `data:image/svg+xml;charset=utf8,${escapedSrc}`;
    src = url;
  };

  let src: string;
  $: setSrc(name);
</script>

<Icon {src} {...$$restProps} />
