<script lang="ts">
  import classNames from "$lib/util/classNames";

  let className: string | undefined = undefined;
  export { className as class };
</script>

<div role="img" class={classNames("ldaf-img", "ldaf-img__container", className)} />
