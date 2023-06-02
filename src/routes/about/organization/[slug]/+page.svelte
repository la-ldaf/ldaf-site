<script lang="ts">
  import Breadcrumb from "$lib/components/Breadcrumb";
  import SideNav from "$lib/components/SideNav";
  import ContentfulRichText from "$lib/components/ContentfulRichText";
  import { page } from "$app/stores";

  export let data;
  $: ({ officePageTitle, subheader, description, servicesAndPrograms, contactInfo } = data);

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
        { id: "5", title: officePageTitle || "", link: $page.url.pathname, isCurrent: true },
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
  <Breadcrumb path={breadcrumbs} currentPageTitle={officePageTitle || ""} />
  <div class="grid-row grid-gap">
    <div class="desktop:grid-col-3 margin-bottom-2">
      <SideNav tree={sidenav} />
    </div>
    <main class="desktop:grid-col-9 margin-top-2 usa-prose" id="main-content">
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
      <div />
      {#if contactInfo}
        <div class="margin-top-6 border radius-md padding-2 maxw-mobile-lg">
          <h2 class="margin-0 margin-bottom-1">Contact info</h2>

          <div class="grid-row grid-gap margin-bottom-1">
            <div class="tablet:grid-col-4">
              <strong>Mailing address</strong>
            </div>
            <div class="tablet:grid-col-8">
              {contactInfo.streetAddress},
              {contactInfo.suiteFloorEtc}
              <br />
              {contactInfo.city}, {contactInfo.state}
              {contactInfo.zipCode}
            </div>
          </div>
          <div class="grid-row grid-gap margin-bottom-1">
            <div class="tablet:grid-col-4">
              <strong>Phone</strong>
            </div>
            <div class="tablet:grid-col-8">
              {contactInfo.phoneNumber}
            </div>
          </div>
          <div class="grid-row grid-gap">
            <div class="tablet:grid-col-4">
              <strong>Email us</strong>
            </div>
            <div class="tablet:grid-col-8">
              {contactInfo.email}
            </div>
          </div>
        </div>
      {/if}
    </main>
  </div>
</div>
