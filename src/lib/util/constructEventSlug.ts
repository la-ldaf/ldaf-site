const constructEventSlug = (date: Date, slug: string): string =>
  `${date.toISOString().split("T")[0]}-${slug}`;

export default constructEventSlug;
