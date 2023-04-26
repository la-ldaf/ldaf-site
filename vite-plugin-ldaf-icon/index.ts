import path from "path";
import { glob } from "glob";

const iconListRegex = /^\$icons$/;
const iconRegex = /^\$icons\/([\w-]+)$/;

const vitePluginLDAFIcon = async () => {
  const iconPaths = await glob("./node_modules/@uswds/uswds/dist/img/**/*.svg");
  const iconNamesAndPathsWithinImgDir = iconPaths.map((iconPath) => {
    const iconPathWithinImg = iconPath.replace(/^node_modules\/@uswds\/uswds\/dist\/img\//, "");
    return [path.basename(iconPath).split(".")[0].replace(/^.+\//, ""), iconPathWithinImg];
  });
  const iconNames = iconNamesAndPathsWithinImgDir.map(([name]) => name);
  const iconPathsWithinImgByName = Object.fromEntries(iconNamesAndPathsWithinImgDir);
  return {
    name: "vite-plugin-ldaf-icon",
    resolveId: (id: string) => (id.match(iconRegex) || id.match(iconListRegex)) && id,
    load: async (id: string) => {
      const iconListMatch = id.match(iconListRegex);
      if (iconListMatch)
        return `\
export const names = ${JSON.stringify(iconNames)};
export const namesToPaths = ${JSON.stringify(iconPathsWithinImgByName)};
`;

      const idMatch = id.match(iconRegex);
      if (!idMatch) return;
      const [, name] = idMatch;
      return `\
import svgSrc from "@uswds/uswds/img/${iconPathsWithinImgByName[name]}?src";
export const name = ${JSON.stringify(name)};
export const url = \`data:image/svg+xml;charset=utf8,$\{svgSrc.replace("#", "%23")}\`;
`;
    },
  };
};

export default vitePluginLDAFIcon;
