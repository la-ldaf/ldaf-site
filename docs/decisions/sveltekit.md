# Decision Doc - SvelteKit as Front-End Framework

## Background and Evaluation Criteria

Our engineering team had a greenfield opportunity when it came to choosing which front-end framework we would use to build the new LDAF site. The team evaluated a handful of options during a discovery phase in which we also researched various service providers for other parts of the stack, e.g. headless content management systems (CMS), hosting providers, etc. The front-end frameworks we considered included:

- [SvelteKit](https://kit.svelte.dev/)
- [Next.js](https://nextjs.org/)
- [Gatsby](https://www.gatsbyjs.com/)
- [Astro](https://astro.build/)
- [Eleventy](https://www.11ty.dev/)
- [Hugo](https://gohugo.io/)

The team considered a number of factors when evaluating front-end frameworks, including:

- the overall developer experience
- the team's estimated development velocity with a framework
- the industry usage and adoption rate of the framework
- fast build speed
- small bundle / payload size
- TypeScript support
- support for progressive enhancement
- support for client-side routing
- support for deferred static generation / incremental static regeneration
- support for previewing content changes from a CMS
- support for serverless functions for more complex interactions in the future

In the process of putting together these evaluation criteria, the team determined that end-user experience dwarfed all other factors and that accessibility should be top-of-mind in all our decisions. It also became the team's view that the site's load time should be viewed as an accessibility factor, since a site that loads slowly is not an accessible site. We felt that this was especially true for end-users of the LDAF site, since we knew through analytics that the majority of users were visiting the current site on mobile and felt it was safe to assume that many would be connecting from rural or otherwise low-connectivity areas.

As part of our evaluation process we spun up a handful of example sites to kick the tires on some of the frameworks. We also used this opportunity to evaluate design systems as well as the APIs of our CMS options so that we could simulate using the frameworks in a way that would more closely align with the final project setup. Each example site typically included a header with basic navigation, a homepage layout, a news article layout, and a basic informative page layout.

## The Decision

After consideration of the above factors and options, we ultimately landed on SvelteKit as our framework of choice. We chose SvelteKit primarily for what we expect will be the best end-user experience; SvelteKit's base payload size, optimization options, and support for progressive enhancement outshined the other options, while still providing a good developer experience and boasting impressive developer satisfaction and adoption rates from [the latest State of JS (2022)](https://2022.stateofjs.com/en-US/).

After we made this decision we spent a sprint focused on justifying our choice, so in addition to working on base-level components we chose features that would utilize the aspects of SvelteKit that we were apprehensive about from our example site work, such as utilizing global styling from the USWDS (which is a bit antithetical to Svelte's scoped styling model). By the end of that sprint we had overcome most of the initial setup struggles, resolved our USWDS payload size issues, and found workarounds for most of Svelte's shortcomings (such as the lack of support for setting `<slot/>` via the component API in tests and Storybook).

## Alternative Solutions

The team's prior front-end experience was heavily based in React, which informed a lot of our early decisions. The team's ideal framework was one that would be both fast for the end-user and fully-featured for developers.

During the discovery phase, Hugo and Eleventy were both ruled out despite their fast build speeds due to being rather feature-incomplete for the LDAF use-case, e.g. Eleventy felt akin to Jekyll and was rather bare-bones compared to other JS frameworks, and Hugo lacked much needed preview functionality.

The team ended up building example sites with Astro, Gatsby, Next.js, and SvelteKit, which gave us very useful hands-on experience needed to narrow our options further. At the end of this phase, we ruled out both Astro and Gatsby. Astro's build speed and fast load time (due to lack of a bulky JS framework) were appealing but overall the framework felt much like Eleventy in its simplicity. Astro leans heavily into no-JS, advocating for "islands" of interactivity, so there seemed to be little support for progressive enhancement features such as client-side routing. We felt that our development velocity would be hindered by having to build a lot of basic features from scratch. Gatsby, despite being a more mature framework, was eliminated primarily due to its large build size and slow initial load speed as well as its incredibly bulky configuration.

Left with the choice between Next.js and SvelteKit, the final phase involved connecting our example sites to our shortlist of headless CMS providers to glean some final experience before making our decision. We ultimately learned more about our CMS options here than our framework options, and the overall conclusion was that Next.js would be better for our development velocity while SvelteKit would be better for the end-user. Next.js 13 had been recently released with a handful of updates including a faster build process, directory-based routing, and easier-to-reason-about data fetching, but the bundle size for our Next.js example site was still an order of magnitude larger than that of our SvelteKit example. SvelteKit had recently launched its first official release with a very similar feature-set to that of Next.js 13, so the only real downside we were left with was a lack of experience with Svelte compared to our years of experience with React. Looking at things this way, we were essentially left with a decision between our overhead development time being spent on optimizing a bulky framework or learning a new framework.

While the team was at first roughly split between Next.js and SvelteKit, SvelteKit ultimately won out as it was the framework that best threaded the needle between a fast UX and a feature-complete development environment.

## Potential Trade-offs

As discussed above, the decision to move forward with SvelteKit does not come without some trade-offs; our known risks at time-of-writing include:

- The developer experience of SvelteKit is not as mature as that of other frameworks.
- Our development velocity may be hindered by speed bumps in using a relatively new framework (both to us and the industry).
- It may be more difficult to onboard new developers compared to other frameworks that are based in React.

We believe that these risks can be mitigated or are otherwise worth tolerating. Our current outlook is the following:

- A subpar developer experience now doesn't necessarily indicate a subpar developer experience in the future; all signs point to SvelteKit continuing to improve over time.
- No framework is going to beat out React any time soon, but Svelte and SvelteKit's adoption rate is high. Svelte as a project is relatively mature and SvelteKit has passed its 1.0 mark, which has resolved most of the prior complaints leveraged against it.
- In cases where we hit major road blocks in the development of a critical and complex feature, we can always use React for its original intended purpose and load a React application within a SvelteKit page.
