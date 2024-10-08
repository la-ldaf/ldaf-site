# LDAF Engineering Process

This is a living document that attempts to outline the basic processes the Ad Hoc engineering team uses to deliver for the Louisiana Department of Agriculture and Forestry.

## Team structure

The Ad Hoc team consists of smaller sub-teams (sometimes single roles) each for product, engineering, research, and design. Only the engineering team is active on GitHub.

## Planning

We use GitHub issues for documenting and tracking all development work. We have issue templates for both feature requests and bug reports (these can be found in the [`.github/ISSUE_TEMPLATE/`](../.github/ISSUE_TEMPLATE/) directory).

**Note:** We previously used a private Jira account for product planning and management, which is why many older issues and pull requests reference Jira tickets. Since the initial launch of the site we have moved to using GitHub issues.

## Development

### Branches

We use `main` as our default, primary branch. It is protected so that no one can push directly to it and so that all pull requests that target the branch require at least approval from a maintainer on the "LDAF Engineers" team. As administrators of the repository, the engineering team can override these rules if needed.

Branches should be created off of `main` and use a naming convention of the contributor's preferred name as a prefix, a GitHub issue number, and a short description, all joined by forward slashes, e.g. `yourname/123/add-best-practices` (or just `yourname/add-best-practices` if an issue doesn't exist). Branches should be short-lived and scoped to a single pull request; we opt for feature flags over long-running feature branches.

The merge strategy used for all branches is squash merging. When merging, it's important to write a detailed commit message to represent the work completed. This typically should be the title of the pull request (see next section).

Branches that are merged successfully are automatically deleted but can be restored if needed.

### Pull requests

We have three different pull request templates, one each for [enhancements](../.github/pull_request_template.md) (the default), [bug fixes](../.github/PULL_REQUEST_TEMPLATE/bug.md), and [documentation updates](../.github/PULL_REQUEST_TEMPLATE/documentation.md). The naming convention for pull requests should include the GitHub issue number, e.g. `[Issue #12345] Add best practices documentation` (or `[No Issue] Add best practices documentation` if an issue doesn't exist), and this title should also be used as the commit message for the squashed merge commit (which should automatically append the pull request number and any other relevant GitHub issue numbers).

All pull requests, regardless of template, should include links to related GitHub issues and provide a summary of the proposed changes. The author should also make an effort to highlight particular aspects of the pull request that they would like feedback on (whether that be in the description or via a self-review).

When ready for review, the "LDAF Engineers" team should be assigned as reviewer. The pull request can be merged after one approval from any maintainer, although there will surely be some complex cases where it may be sensible to request multiple approvals (although this should be noted in the description).

We prioritize issue refinement and code review at least one day a week to ensure that both development and deployment of completed work is not being blocked.

<!--
## Deployment

This section intentionally left blank until we define (and refine) our deployment process. Here we will want to describe the process by which deployments are kicked off as well as how we create week-to-week change summaries.
-->
