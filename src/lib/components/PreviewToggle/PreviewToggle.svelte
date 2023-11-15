<script lang="ts">
  import "./PreviewToggle.scss";
  import { page } from "$app/stores";
  import Icon from "$lib/components/Icon";
  import Button from "$lib/components/Button";
  import { url as toggleOnIcon } from "$icons/toggle_on";
  import { url as toggleOffIcon } from "$icons/toggle_off";
  import { url as loadingIcon } from "$icons/loader";
  import { goto } from "$app/navigation";

  $: isPreviewActive = $page.url.searchParams.get("preview") === "true";

  let isPreviewLoading = false;

  $: icon = isPreviewLoading ? loadingIcon : isPreviewActive ? toggleOnIcon : toggleOffIcon;
  $: iconDescription = isPreviewActive
    ? "Currently viewing preview content"
    : "Currently not viewing preview content";

  const toggle = async () => {
    isPreviewLoading = true;
    if (isPreviewActive) {
      const url = new URL($page.url);
      url.searchParams.delete("preview");
      await goto(url, { invalidateAll: true });
    } else {
      const url = new URL($page.url);
      url.searchParams.set("preview", "true");
      await goto(url, { invalidateAll: true });
    }
    isPreviewLoading = false;
  };
</script>

<Button class="preview-toggle-button" variant="text-only" unstyled on:click={toggle}>
  View preview content:
  <Icon class="preview-toggle-icon" src={icon} size={3} aria-label={iconDescription} />
</Button>
