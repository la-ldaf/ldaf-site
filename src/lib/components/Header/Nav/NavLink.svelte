<script lang="ts">
  import Link from "$lib/components/Link";
  import classNames from "$lib/util/classNames";
  export let href: string | undefined = undefined;
  export let current = false;
  $: classes = classNames("usa-nav-link", current && "usa-current");
</script>

<Link {href} class={classes}><span><slot /></span></Link>
