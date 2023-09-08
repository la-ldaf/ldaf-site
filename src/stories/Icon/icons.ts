const iconSrcByPath = import.meta.glob<{ default: string }>(
  "/node_modules/@uswds/uswds/dist/img/**/*.svg",
  { as: "src" },
);

const iconSrcByName = Object.fromEntries(
  Object.entries(iconSrcByPath).map(([path, getSrc]) => [
    path.split("/").slice(-1)[0].split(".")[0],
    getSrc,
  ]),
);

const getIconSrcByName = async (name: string) => {
  const { default: src } = await iconSrcByName[name]();
  return src;
};

const iconNames = Object.entries(iconSrcByName)
  .map(([name]) => name)
  .sort();

export { iconNames, getIconSrcByName };
