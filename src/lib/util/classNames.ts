const classNames = (...args: (string | null | undefined | false)[]) =>
  args.filter(Boolean).join(" ");

export default classNames;
