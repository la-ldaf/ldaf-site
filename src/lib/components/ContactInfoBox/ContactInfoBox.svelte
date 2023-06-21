<script lang="ts">
  import "./ContactInfo.scss";
  import Section from "./ContactInfoSection.svelte";
  import CopyToClipboard from "$lib/components/CopyToClipboard";
  import Link from "$lib/components/Link";
  import classNames from "$lib/util/classNames";

  import type {
    Maybe,
    ContentTypeLocation,
    Contact,
    Sys,
  } from "$lib/services/contentful/schema.js";

  export let address:
    | Maybe<
        Pick<
          ContentTypeLocation,
          "name" | "streetAddress1" | "streetAddress2" | "city" | "state" | "zip"
        >
      >
    | undefined;
  export let contacts:
    | Maybe<
        Pick<Contact, "entityName" | "phone" | "phoneExt" | "email"> & { sys: Pick<Sys, "id"> }
      >[]
    | undefined;

  $: validContacts = contacts?.filter((contact): contact is Contact => !!contact);

  const removePhoneFormatting = (phone: string): string => phone.replaceAll(/[^0-9]/g, "");

  let className = "";
  export { className as class };
  $: classes = classNames("border radius-md padding-2 maxw-mobile-lg", className);
</script>

<div class={classes}>
  <h2 class="margin-0 margin-bottom-1">Contact info</h2>
  {#if address}
    <strong class="display-block margin-bottom-1">Mailing address</strong>
    {@const { name, streetAddress1, streetAddress2, city, state, zip } = address}
    <Section>
      <svelte:fragment slot="label">{name}</svelte:fragment>
      <svelte:fragment slot="info">
        {streetAddress1}{streetAddress2 ? `, ${streetAddress2}` : ""}
        <br />
        {city}, {state}
        {zip}
      </svelte:fragment>
    </Section>
  {/if}
  {#if validContacts}
    <strong class="display-block margin-bottom-1">Contact</strong>
    {#each validContacts as { sys, entityName, phone, phoneExt, email } (sys.id)}
      <Section>
        <svelte:fragment slot="label">{entityName}</svelte:fragment>
        <svelte:fragment slot="info">
          {#if phone}
            <Link href="tel:+1{removePhoneFormatting(phone)}{phoneExt ? `;${phoneExt}` : ''}">
              {phone}{phoneExt ? `, ext. ${phoneExt}` : ""}
            </Link><br />
          {/if}
          {#if email}
            <Link href="mailto:{email}">{email}</Link>
            <CopyToClipboard contentToCopy={email} successMessage="Address copied to clipboard!" />
          {/if}
        </svelte:fragment>
      </Section>
    {/each}
  {/if}
</div>
