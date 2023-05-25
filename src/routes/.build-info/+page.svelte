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

  const metaSiteUrl = `https://meta-site-${VERCEL_GIT_PULL_REQUEST_ID}-ldaf.vercel.app`;
  const unitCoverageUrl = `${metaSiteUrl}/unit-test-coverage`;
  const e2eReportUrl = `${metaSiteUrl}/e2e-test-report`;
  const bundleVisualizerUrl = `${metaSiteUrl}/bundle-visualizer`;
  const storybookUrl = `${metaSiteUrl}/storybook`;
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
          Link to Storybook: <Link href={storybookUrl}>{storybookUrl}</Link>
        </li>
      </ul>
    {:else}
      <p>This preview is not associated with a pull request.</p>
    {/if}
  </div>
</section>
