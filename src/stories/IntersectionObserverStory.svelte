<script lang="ts">
  import IntersectionObserver, {
    RootIntersectionObserver,
  } from "$lib/components/IntersectionObserver";
  import classNames from "$lib/util/classNames";
  let numberOfChildren = 25;

  let viewElement: HTMLDivElement;
  let resolveViewElement: (viewElement: Element) => void;
  const viewElementPromise = new Promise<Element | undefined>(
    (resolve) => (resolveViewElement = resolve)
  );
  $: if (resolveViewElement && viewElement) resolveViewElement(viewElement);
  let childElements: HTMLDivElement[] = [];
</script>

<RootIntersectionObserver rootMargin="-25% 0px -25% 0px" root={viewElementPromise}>
  <div class="view" bind:this={viewElement}>
    <div class="viewBorder" />
    {#each { length: numberOfChildren } as _, i}
      <IntersectionObserver let:intersecting target={childElements[i]}>
        <div
          class={classNames("child", intersecting && "intersecting")}
          bind:this={childElements[i]}
        >
          Intersecting: {intersecting}
        </div>
      </IntersectionObserver>
    {/each}
  </div>
</RootIntersectionObserver>

<style>
  .view {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .viewBorder {
    position: fixed;
    top: 25%;
    left: 0;
    right: 0;
    bottom: 25%;
    border: 1px solid green;
    pointer-events: none;
  }

  .child {
    width: 100%;
    height: 50px;
    background: #eee;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .child.intersecting {
    background: #cec;
  }
</style>
