type Breadcrumb = {
  id: string;
  title: string | null | undefined;
  link: string | null | undefined;
};
type Breadcrumbs = Array<Breadcrumb>;

export default Breadcrumbs;
