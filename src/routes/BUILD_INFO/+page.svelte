<script>
  import Link from "$lib/components/Link";
  export let data;
  const { VERCEL_ENV, VERCEL_GIT_REPO_OWNER, VERCEL_GIT_REPO_SLUG, VERCEL_GIT_COMMIT_SHA } = data;
  const githubUrl = `https://github.com/${VERCEL_GIT_REPO_OWNER}/${VERCEL_GIT_REPO_SLUG}/commit/${VERCEL_GIT_COMMIT_SHA}`;
</script>

<section class="usa-section">
  <div class="grid-container">
    <p>
      {#if VERCEL_ENV}
        Vercel environment: <code>{VERCEL_ENV}</code>
      {:else}
        Could not output Vercel environment information.
      {/if}
    </p>
    <p>
      {#if VERCEL_GIT_REPO_OWNER && VERCEL_GIT_REPO_SLUG && VERCEL_GIT_COMMIT_SHA}
        Build commit SHA: <code>{VERCEL_GIT_COMMIT_SHA}</code>
        <br />
        Link to commit in GitHub: <Link href={githubUrl}>{githubUrl}</Link>
      {:else}
        Could not output git information.
      {/if}
    </p>
  </div>
</section>
