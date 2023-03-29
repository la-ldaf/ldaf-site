const autoprefixer = require("autoprefixer");

const findRoot = (rule) => {
  let maybeRoot = rule;
  while (maybeRoot && maybeRoot.type !== "root") {
    maybeRoot = maybeRoot.parent;
  }
  return maybeRoot;
};

// removeFontFaceRules is a PostCSS plugin that removes all @font-face rules unless they are created
// by the root global stylesheet at src/app.scss
//
// USWDS does not allow you to omit @font-face declarations when you use uswds-core from another
// file (cf. https://github.com/uswds/uswds/issues/5206). Because SvelteKit splits CSS into layout
// and page files, the @font-face rules were being included on the page twice. This is extra CSS
// weight and even triggers extra font downloads in Firefox. To fix this, we take advantage of the
// fact that our global styles are set by a single src/app.scss file and remove every @font-face
// rule that doesn't originate in that file.
//
const removeFontFaceRules = () => ({
  postcssPlugin: "postcss-remove-font-face-rules",
  AtRule: {
    "font-face": (rule) => {
      const root = findRoot(rule);
      if (!root?.source?.input?.file?.endsWith("src/app.scss")) {
        rule.remove();
      }
    },
  },
});

removeFontFaceRules.postcss = true;

const config = {
  plugins: [autoprefixer, removeFontFaceRules],
};

module.exports = config;
