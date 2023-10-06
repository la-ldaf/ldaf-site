<script lang="ts">
  import "./CardGroup.scss";

  import classNames from "$lib/util/classNames";

  export let size: "col-9" | "col-12" = "col-9";
  let className = "";
  export { className as class };

  $: groupClassNames = classNames("ldaf-card-group", `ldaf-card-group--size-${size}`, className);
</script>

<ul class={groupClassNames}>
  <slot />
</ul>
