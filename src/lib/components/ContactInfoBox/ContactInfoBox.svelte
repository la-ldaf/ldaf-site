<script lang="ts">
  import "./ContactInfo.scss";

  import type { Maybe, ContentTypeLocation, Contact } from "$lib/services/contentful/schema.js";

  import Section from "./ContactInfoSection.svelte";
  import classNames from "$lib/util/classNames";

  export let address: Maybe<ContentTypeLocation> | undefined;
  export let contacts: Maybe<Contact>[] | undefined;

  $: validContacts = contacts && contacts.filter((contact): contact is Contact => !!contact);
  $: hasPhone = validContacts && validContacts.some((contact) => !!(contact && contact.phone));
  $: hasEmail = validContacts && validContacts.some((contact) => !!(contact && contact.email));

  let className = "";
  export { className as class };
  $: classes = classNames("border radius-md padding-2 maxw-mobile-lg", className);
</script>

<div class={classes}>
  <h2 class="margin-0 margin-bottom-1">Contact info</h2>
  {#if address}
    <Section>
      <svelte:fragment slot="label">Mailing address</svelte:fragment>
      <svelte:fragment slot="info">
        {@const { streetAddress1, streetAddress2, city, state, zip } = address}
        {streetAddress1}{streetAddress2 ? `, ${streetAddress2}` : ""}
        <br />
        {city}, {state}
        {zip}
      </svelte:fragment>
    </Section>
  {/if}
  {#if validContacts && hasPhone}
    <Section>
      <svelte:fragment slot="label">Phone</svelte:fragment>
      <svelte:fragment slot="info">
        {#each validContacts as { sys, entityName, phone } (sys.id)}
          {#if phone}
            <span class="font-sans-3xs">{entityName}</span>
            <br />
            {phone}
          {/if}
        {/each}
      </svelte:fragment>
    </Section>
  {/if}
  {#if validContacts && hasEmail}
    <Section>
      <svelte:fragment slot="label">Email</svelte:fragment>
      <svelte:fragment slot="info">
        {#each validContacts as { sys, entityName, email } (sys.id)}
          {#if email}
            <span class="font-sans-3xs">{entityName}</span>
            <br />
            {email}
          {/if}
        {/each}
      </svelte:fragment>
    </Section>
  {/if}
</div>
