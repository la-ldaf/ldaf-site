export default (url: string | URL): string | undefined => {
  const parsed = new URL(url);
  if (parsed.hostname.includes("youtube.com")) return parsed.searchParams.get("v") ?? undefined;
  if (parsed.hostname.includes("youtu.be")) return parsed.pathname.split("/")[1];
};
