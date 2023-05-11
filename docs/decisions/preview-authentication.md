# Decision Doc - Preview Authentication

## Considerations

- How do users authenticate with the preview with a given strategy? Ideally it would be automatic.
- What are the security implications of the strategy? Under what circumstances could unauthenticated users x

## How does live preview tie into this?

Live preview is straightforward to set up without any additional authentication, because it reacts to `message` events sent from the embedding window to the embedded iframe. It seems possible to use this without using the preview API from the server at all, assuming that the live update SDK receives the preview content when it initially connects (TODO: confirm this).

## Possible approaches:

- Static token in URL
- Personal access tokens
- OAuth 2.0
- Not using external previewing, only live previewing

### Static token in URL

The simplest approach is to generate a private token of some sort, store it in an environment variable in Vercel, include it as part of the URL template set in the Contentful UI to generate preview URLs, then require it to be present before loading unpublished content with the Contentful Preview API key that is present on the server.

For example, if our Contentful Preview API token was `abc`, we might generate a second token `xyz`. Then, we would request a page on the LDAF site with a URL like the following:

```
https://new.ldaf.la.gov/some/page?preview&preview_token=xyz
```

Then, the server side would make a request to the Contentful Preview API with the `abc` token to retrieve the previewed content.

[The Contentful preview setup instructions for previewing in a ][contentful-preview-setup-instructions] explicitly instruct developers not to use this approach:

> Important: for security reasons, you should never include an access token in the preview URL. Instead, implement the authentication process in your client app.

It's unclear whether this is intended to refer specifically to Contentful's API tokens or _any_ access token. If it is the former, these instructions are compatible with this strategy, since we are generating a separate token that can not be used to call the API directly, only to preview specific pages on the site by setting it as a preview token. If it is the latter then they are instructing us not to use this strategy.

_However_, they link to [a (now-outdated) Next.js doc][old-nextjs-preview-instructions] that explicitly instruct developers to generate a static token (separate from the Contentful Preview API token), set it as an environment variable in your app, and then pass it as part of the preview URL in the headless CMS:

> First, you should create a secret token string using a token generator of your choice. This secret will only be known by your Next.js app and your headless CMS. This secret prevents people who don’t have access to your CMS from accessing preview URLs.
>
> Second, if your headless CMS supports setting custom preview URLs, specify the following as the preview URL. This assumes that your preview API route is located at pages/api/preview.js.
>
> ```
> https://<your-site>/api/preview?secret=<token>&slug=<path>
> ```
>
> - `<your-site>` should be your deployment domain.
> - `<token>` should be replaced with the secret token you generated.
> - `<path>` should be the path for the page that you want to preview. If you want to preview /posts/foo, then you should use &slug=/posts/foo.

As mentioned, the Next.js doc linked by Contentful is outdated, but the [new version of the same doc][new-nextjs-preview-instructions] contains the exact same instructions.

One major downside of this strategy is that, unlike the "Personal access tokens" or "OAuth 2.0" strategies, this would use a single Contentful Preview API access token for all users, so all users in the LDAF Contentful app would be able to see previews of any page, even those they might not have permissions for. If we want to keep unpublished content private _within LDAF itself_ this will be a problem, but otherwise won't be.

### Personal access tokens

Each Contentful user has access to [personal access tokens][contentful-personal-access-tokens] in the Contentful dashboard. We could create an interface on the LDAF site that allows users to "sign in" by entering a personal access token, and then use that personal token to talk to the Contentful Preview API.

The easiest way to implement this would be to store the token in the browser and talk directly to the Contentful API without any server-side logic involved. If we wanted to talks to the preview API from the server instead, we would need to figure out a way to transmit the token to and store the token securely on the server side.

Unlike the "Static token in URL" strategy, and like the "OAuth 2.0" strategy, each user would have a unique token that would inherit their permissions.

### OAuth 2.0

Contentful supports [creating an OAuth 2.0 app][contentful-oauth-2] to authenticate to your application using Contentful's authentication. This would allow any user who can authenticate to Contentful to authenticate to the LDAF site using their Contentful login. We would then get a token through that process that could be used to talk to the preview API.

As in the "Personal access tokens" strategy, the easiest way to implement this would be to store the token in the browser and talk directly to the Contentful Preview API.

Unlike the "Static token in URL" strategy, and like the "Personal access tokens" strategy, each user would have a unique token that would inherit their permissions.

[contentful-preview-setup-instructions]: https://www.contentful.com/developers/docs/tutorials/general/content-preview/#preview-content-in-the-online-environment
[old-nextjs-preview-instructions]: https://nextjs.org/docs/pages/building-your-application/configuring/preview-mode#securely-accessing-it-from-your-headless-cms
[new-nextjs-preview-instructions]: https://nextjs.org/docs/pages/building-your-application/configuring/draft-mode#securely-accessing-it-from-your-headless-cms
[contentful-live-preview-tutorial]: https://www.contentful.com/developers/docs/tutorials/general/live-preview/
[contentful-live-preview-github]: https://github.com/contentful/live-preview
[contentful-personal-access-tokens]: https://app.contentful.com/account/profile/cma_tokens
[contentful-oauth-2]: https://www.contentful.com/developers/docs/extensibility/oauth/
