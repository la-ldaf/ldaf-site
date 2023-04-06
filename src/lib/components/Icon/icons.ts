const modules = import.meta.glob<{ default: string }>(
  "/node_modules/@uswds/uswds/dist/img/usa-icons/*.svg",
  {
    as: "dataurl",
    eager: true,
  }
);

const icons = Object.fromEntries(
  Object.entries(modules).map(([path, icon]) => [
    // Grabs the last item in the array, which is the icon filename + svg extension
    path.split("/").slice(-1)[0].split(".")[0],
    icon,
  ])
);

export default icons;
