- [x] Browser conditions for bundlers - should specify browser condition when building a frontend bundle for the browser

  - This should be handled automatically by SvelteKit

- [x] Removal of CJS output

  - This shouldn't affect us

- [x] Stricter types for Svelte functions

  - [x] createEventDispatcher payload typing

  - [x] Action and ActionReturn must be typed if they receive a parameter

    - We don't have these types in any code merged to main

- [x] Custom Elements with Svelte

  - We're not using custom elements

- [x] `SvelteComponentTyped` is deprecated

- [x] `SvelteComponent` should be replaced with `typeof SvelteComponent<any>`

- [ ] Default slot bindings are no longer exposed to named slots and vice versa

- [ ] New eslint package
  - https://github.com/sveltejs/kit/issues/10242#issuecomment-1610798405
