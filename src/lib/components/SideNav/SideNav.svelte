<script lang="ts">
  import Link from "$lib/components/Link";
</script>

<nav aria-label="Side navigation,,,">
  <p><strong>In this section</strong></p>
  <ul class="usa-sidenav">
    <li class="usa-sidenav__item">
      <a href="javascript:void(0);">Parent link</a>
    </li>
    <li class="usa-sidenav__item">
      <a href="javascript:void(0);" class="usa-current">Current page</a>
      <ul class="usa-sidenav__sublist">
        <li class="usa-sidenav__item">
          <a href="javascript:void(0);">Child link</a>
        </li>
        <li class="usa-sidenav__item">
          <a href="javascript:void(0);">Child link</a>
          <ul class="usa-sidenav__sublist">
            <li class="usa-sidenav__item">
              <a href="javascript:void(0);">Grandchild link</a>
            </li>
            <li class="usa-sidenav__item">
              <a href="javascript:void(0);" class="usa-current">Grandchild link</a>
            </li>
            <li class="usa-sidenav__item">
              <a href="javascript:void(0);">Grandchild link</a>
            </li>
          </ul>
        </li>
        <li class="usa-sidenav__item">
          <a href="javascript:void(0);">Child link</a>
        </li>
      </ul>
    </li>
    <li class="usa-sidenav__item">
      <a href="javascript:void(0);">Parent link</a>
    </li>
  </ul>
</nav>
