<script lang="ts">
  import Link from "$lib/components/Link";
  export let data;
  const {
    VERCEL_ENV,
    VERCEL_GIT_REPO_OWNER,
    VERCEL_GIT_REPO_SLUG,
    VERCEL_GIT_COMMIT_SHA,
    VERCEL_GIT_PULL_REQUEST_ID,
  } = data;

  const githubBaseUrl = `https://github.com/${VERCEL_GIT_REPO_OWNER}/${VERCEL_GIT_REPO_SLUG}`;
  const githubCommitUrl = `${githubBaseUrl}/commit/${VERCEL_GIT_COMMIT_SHA}`;
  const githubPullUrl = `${githubBaseUrl}/pull/${VERCEL_GIT_PULL_REQUEST_ID}`;

  const githubPagesBaseUrl = `https://${VERCEL_GIT_REPO_OWNER}.github.io/${VERCEL_GIT_REPO_SLUG}`;
  const coverageReportUrl = `${githubPagesBaseUrl}/pull/${VERCEL_GIT_PULL_REQUEST_ID}/unit-test-coverage`;
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
        Link to commit in GitHub: <Link href={githubCommitUrl}>{githubCommitUrl}</Link>
      {:else}
        Could not output git information.
      {/if}
    </p>
    <p>
      {#if VERCEL_GIT_PULL_REQUEST_ID}
        Link to PR in GitHub: <Link href={githubPullUrl}>{githubPullUrl}</Link>
        <br />
        Link to coverage report: <Link href={coverageReportUrl}>{coverageReportUrl}</Link>
      {:else}
        This preview is not associated with a pull request.
      {/if}
    </p>
  </div>
</section>
