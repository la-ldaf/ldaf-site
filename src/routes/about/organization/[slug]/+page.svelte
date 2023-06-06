<script lang="ts">
  import Breadcrumb from "$lib/components/Breadcrumb";
  import SideNav from "$lib/components/SideNav";
  import ContactInfoBox from "$lib/components/ContactInfoBox";
  import ContentfulRichText from "$lib/components/ContentfulRichText";
  import { page } from "$app/stores";

  export let data;
  $: ({
    pageTitle,
    subheading,
    description,
    servicesAndPrograms,
    mailingAddress,
    contactsCollection,
  } = data);

  const breadcrumbs = [
    { id: "0", title: "Breadcrumb", link: "/" },
    { id: "1", title: "Breadcrumb", link: "/" },
    { id: "2", title: "Breadcrumb", link: "/" },
  ];

  $: sidenav = [
    { id: "0", title: "SideNav Link", link: "/", isCurrent: false },
    {
      id: "1",
      title: "SideNav Link",
      link: "/",
      isCurrent: false,
      children: [
        { id: "0", title: "Child Link", link: "/", isCurrent: false },
        { id: "1", title: "Child Link", link: "/", isCurrent: false },
        { id: "2", title: "Child Link", link: "/", isCurrent: false },
        { id: "3", title: "Child Link", link: "/", isCurrent: false },
        { id: "4", title: "Child Link", link: "/", isCurrent: false },
        { id: "5", title: pageTitle || "", link: $page.url.pathname, isCurrent: true },
      ],
    },
    { id: "2", title: "SideNav Link", link: "/", isCurrent: false },
    { id: "3", title: "SideNav Link", link: "/", isCurrent: false },
    { id: "4", title: "SideNav Link", link: "/", isCurrent: false },
    { id: "5", title: "SideNav Link", link: "/", isCurrent: false },
    { id: "6", title: "SideNav Link", link: "/", isCurrent: false },
  ];
</script>

<div class="grid-container">
  <Breadcrumb path={breadcrumbs} currentPageTitle={pageTitle || ""} />
  <div class="grid-row grid-gap">
    <div class="desktop:grid-col-3 margin-bottom-2">
      <SideNav tree={sidenav} />
    </div>
    <main class="desktop:grid-col-9 margin-top-2 usa-prose" id="main-content">
      <h1>{pageTitle}</h1>
      <p class="usa-intro">
        {subheading}
      </p>
      {#if description}
        <ContentfulRichText document={description?.json} />
      {/if}
      {#if servicesAndPrograms}
        <h2>Services</h2>
        <ContentfulRichText document={servicesAndPrograms?.json} />
      {/if}
      <div />
      {#if mailingAddress || contactsCollection}
        <ContactInfoBox
          address={mailingAddress}
          contacts={contactsCollection?.items}
          class="margin-top-6"
        />
      {/if}
    </main>
  </div>
</div>
