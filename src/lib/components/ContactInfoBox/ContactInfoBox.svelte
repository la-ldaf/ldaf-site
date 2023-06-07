<script lang="ts">
  import "./ContactInfo.scss";
  import Section from "./ContactInfoSection.svelte";
  import CopyToClipboard from "$lib/components/CopyToClipboard";
  import classNames from "$lib/util/classNames";

  import type { Maybe, ContentTypeLocation, Contact } from "$lib/services/contentful/schema.js";

  export let address: Maybe<ContentTypeLocation> | undefined;
  export let contacts: Maybe<Contact>[] | undefined;

  $: validContacts = contacts && contacts.filter((contact): contact is Contact => !!contact);

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
    {#each validContacts as { sys, entityName, phone, email } (sys.id)}
      <Section>
        <svelte:fragment slot="label">{entityName}</svelte:fragment>
        <svelte:fragment slot="info">
          {#if phone}
            {phone} <br />
          {/if}
          {#if email}
            <a href="mailto:{email}">{email}</a>
            <CopyToClipboard content={email} />
          {/if}
        </svelte:fragment>
      </Section>
    {/each}
  {/if}
</div>
