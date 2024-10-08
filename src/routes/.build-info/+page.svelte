<script lang="ts">
  import Link from "$lib/components/Link";
  export let data;
  const {
    CONTENTFUL_DEFAULT_ENVIRONMENT,
    VERCEL_ENV,
    VERCEL_GIT_REPO_OWNER,
    VERCEL_GIT_REPO_SLUG,
    VERCEL_GIT_COMMIT_SHA,
    VERCEL_GIT_PULL_REQUEST_ID,
  } = data;

  const githubBaseUrl = `https://github.com/${VERCEL_GIT_REPO_OWNER}/${VERCEL_GIT_REPO_SLUG}`;
  const githubCommitUrl = `${githubBaseUrl}/commit/${VERCEL_GIT_COMMIT_SHA}`;
  const githubPullUrl = `${githubBaseUrl}/pull/${VERCEL_GIT_PULL_REQUEST_ID}`;

  const metaSiteUrl = `https://meta-site-${VERCEL_GIT_PULL_REQUEST_ID}-ldaf.vercel.app`;
  const unitCoverageUrl = `${metaSiteUrl}/unit-test-coverage`;
  const e2eReportUrl = `${metaSiteUrl}/e2e-test-report`;
  const bundleVisualizerUrl = `${metaSiteUrl}/bundle-visualizer`;
  const lighthouseUrl = `${metaSiteUrl}/lighthouse`;
  const storybookUrl = `https://storybook-${VERCEL_GIT_PULL_REQUEST_ID}-ldaf.vercel.app`;
</script>

<svelte:head>
  <meta name="robots" content="noindex nofollow" />
</svelte:head>

<div class="usa-section grid-container">
  <main id="main-content">
    <p>
      {#if CONTENTFUL_DEFAULT_ENVIRONMENT}
        Contentful environment: <code>{CONTENTFUL_DEFAULT_ENVIRONMENT}</code>
      {:else}
        Could not output Contentful environment information.
      {/if}
    </p>

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

    {#if VERCEL_GIT_PULL_REQUEST_ID}
      <p>
        Link to PR in GitHub: <Link href={githubPullUrl}>{githubPullUrl}</Link>
      </p>
      <p>
        Link to meta-site for PR: <Link href={metaSiteUrl}>{metaSiteUrl}</Link>
      </p>
      <ul>
        <li>
          Link to unit test coverage report: <Link href={unitCoverageUrl}>{unitCoverageUrl}</Link>
        </li>
        <li>
          Link to end-to-end test report: <Link href={e2eReportUrl}>{e2eReportUrl}</Link>
        </li>
        <li>
          Link to bundle visualizer: <Link href={bundleVisualizerUrl}>{bundleVisualizerUrl}</Link>
        </li>
        <li>
          Link to Lighthouse reports: <Link href={lighthouseUrl}>{lighthouseUrl}</Link>
        </li>
        <li>
          Link to Storybook: <Link href={storybookUrl}>{storybookUrl}</Link>
        </li>
      </ul>
    {:else}
      <p>This preview is not associated with a pull request.</p>
    {/if}
  </main>
</div>
