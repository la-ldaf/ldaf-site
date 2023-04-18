const usaIconModules = import.meta.glob<{ default: string }>(
  "/node_modules/@uswds/uswds/dist/img/usa-icons/*.svg",
  {
    as: "dataurl",
    eager: true,
  }
);

const usaBgIconModules = import.meta.glob<{ default: string }>(
  "/node_modules/@uswds/uswds/dist/img/usa-icons-bg/*.svg",
  {
    as: "dataurl",
    eager: true,
  }
);

const allIconModules = { ...usaIconModules, ...usaBgIconModules };

const icons = Object.fromEntries(
  Object.entries(allIconModules).map(([path, icon]) => [
    // Grabs the last item in the array, which is the icon filename + svg extension
    path.split("/").slice(-1)[0].split(".")[0],
    icon,
  ])
);

export default icons;
