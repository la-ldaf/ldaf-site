# Decision Doc - [US Web Design System](https://designsystem.digital.gov/) (USWDS) as Design System/CSS Framework

## Decision and Evaluation Criteria

In constrast to the wide net our engineering team cast when considering potential front-end frameworks, the only option given heavy consideration was USWDS. Among the five [design principles](https://designsystem.digital.gov/design-principles/) detailed by USWDS, there's two that were given a higher degree of consideration in making and validation our decision to use it: continuity and accessibility.

### Continuity

A reasonable analogy to make here is [Bootstrap](https://getbootstrap.com/). Much as Bootstrap was once the de facto CSS framework used by countless websites, USWDS has positioned itself as the go-to styling and design solution for federal government websites. Whereas Bootstrap was maligned over time for its relatively rigid appearance, resulting in a profliferation of visually homogenous sites, we consider that same characteristic less of a negative for USWDS. One USWDS design principle is to [promote continuity](https://designsystem.digital.gov/design-principles/#promote-continuity-2), detailed with the broader goal to "minimize disruption, and provide a consistent experience throughout services; over time; and across agencies, platforms, and devices." Using USWDS places LDAF's site within a visual identity many will already be implicitly familiar with via interactions on other modern US government websites.

Another angle to view continuity is internally, as many of our engineers and designers have experience working with USWDS. Beginning to build with familiar tooling has a few notable advantages:

1. **We're not starting from scratch.** Designers are provided a [full set of design assets](https://designsystem.digital.gov/documentation/getting-started-for-designers/) available across a variety of file formats and platforms, and engineers have a large set of [common components](https://designsystem.digital.gov/components/overview/) as a starting point. While there's plenty of additional customization and tooling to add on top of the base components, its a strong pre-established foundation from which to begin.
2. **Continuity can be a part of hand-offs and personnel changes, too.** There are plenty of people not on the LDAF team that are familiar with USWDS and have worked with it in varying capacities. This could mean one less area of context to build up when someone new is orienting themselves within the LDAF project architecture.

### Accessibility

Per USWDS' principle to **[Embrace Accessibility](https://designsystem.digital.gov/design-principles/#embrace-accessibility-2)**: "Accessibility affects everybody; build it into every decision." This goes beyond evalution criteria and is [baked into our wider ethos](https://adhoc.team/playbook-accessibility/). Given USWDS' excellent accessibility baked into it from the start, it makes our duty as designers and engineers to build everything with accessibility in the forefront that much easier.

### Battle-Tested

Lastly, while this isn't a direct design principle of USWDS, it's reached a point of maturity where it's relatively proven as a reliable and fully-featured solution. The ecosystem is such that we're confident it will be maintained and improved up in the future

## Alternative Solutions

While not really a truly different overall style solution, we chose to avoid the official compilation tool, [`uswds-compile`](https://github.com/uswds/uswds-compile). It's built with [gulp](https://gulpjs.com/), and rather than introduce another build tool into the mix, we chose to incorporate necessary compilation steps into our [vite](https://vitejs.dev/) config, the build-in bundling tool for Sveltekit.

## Potential Trade-offs

### File Size

One initial stumbling block we hit when attempting to integrate USWDS into our code base was the large overall size of the library. We alleviated this by utilizing [PurgeCSS](https://purgecss.com/), tooling that removes any styles that are declared but unused. After [examining the different CSS file sizes](https://gist.github.com/hinzed1127/7baf4149a1a1e18d92e9b75fc3e9a907) in a production build of an early iteration of the site scaffolding (basic landing page and a few subroutes), the gzipped size of individual pages came in comfortably under 10 kilobytes, a number we will monitor but is acceptable if it stays in that range.

## Global Styles vs Modularity

Svelte's idiomatic preference for styling follows the trends of lots of modern web development, with the [standard approach](https://svelte.dev/docs#component-format-style) showing a preference towards component-level over global styles. This required a little bit of configuration to play nicely with vite.

Another side effect of this approach is more friction in utilizing certain Sass features inside of compoment-level styles. A notable example is [`@extend`](https://sass-lang.com/documentation/at-rules/extend), which to use inside a component's individual `.scss` file requires importing USWDS' `uswds-core` module and [any relevant `usa-*` module](https://designsystem.digital.gov/components/packages/#included-packages-2) into the component CSS. While workable, it is nonethless a less ergonomic trade-off.

Ultimately, we decided that the design of USWDS as a global set of styles makes sense given its intended usage, as well as its inception predating the spread of a more modular CSS-in-JS approaches. With that in mind, the amount of configuration required to make it work for our purposes is relatively minimal, overall.
