<script lang="ts">
  import Breadcrumb from "$lib/components/Breadcrumb";
  import SideNav from "$lib/components/SideNav";
  import ContentfulRichText from "$lib/components/ContentfulRichText";

  export let data;
  $: ({ officePageTitle, subheader, description, servicesAndPrograms } = data);
</script>

<section class="usa-section">
  <div class="grid-container">
    <Breadcrumb
      path={[
        { id: "0", title: "Breadcrumb", link: "/" },
        { id: "1", title: "Breadcrumb", link: "/" },
        { id: "2", title: "Breadcrumb", link: "/" },
      ]}
      currentPageTitle={officePageTitle || ""}
    />
    <div class="grid-row grid-gap">
      <div class="desktop:grid-col-3">
        <SideNav />
      </div>
      <main class="desktop:grid-col-9 usa-prose" id="main-content">
        <h1>{officePageTitle}</h1>
        <p class="usa-intro">
          {subheader}
        </p>
        {#if description}
          <ContentfulRichText document={description?.json} />
        {/if}
        {#if servicesAndPrograms}
          <h2>Services</h2>
          <ContentfulRichText document={servicesAndPrograms?.json} />
        {/if}
      </main>
    </div>
  </div>
</section>
