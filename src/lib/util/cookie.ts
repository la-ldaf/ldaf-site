export const getCookieEntries = (): [string, string][] =>
  document.cookie
    .split(";")
    .map((entry) => entry.split("=").map((keyOrVal) => keyOrVal.trim()) as [string, string]);
export const getCookieMap = () => new Map(getCookieEntries());
export const getCookie = (key: string): string | undefined => {
  const val = getCookieMap().get(encodeURIComponent(key));
  if (!val) return;
  return decodeURIComponent(val);
};

export type CookieOptions = {
  path?: string;
  maxAge?: number;
  sameSite?: "None" | "Lax";
};

export const setCookie = (key: string, val: string, options: CookieOptions = {}) => {
  const { path, maxAge, sameSite } = {
    path: "/",
    sameSite: "Lax",
    maxAge: 100,
    ...options,
  } as const;
  document.cookie = [
    `${encodeURIComponent(key)}=${encodeURIComponent(val)}`,
    `Path=${path}`,
    `Max-Age=${maxAge}`,
    `SameSite=${sameSite}`,
    "Secure",
  ].join("; ");
};

export const deleteCookie = (
  key: string,
  { path, maxAge, sameSite }: CookieOptions = { path: "/", maxAge: 0, sameSite: "Lax" }
) =>
  (document.cookie = [
    `${encodeURIComponent(key)}=`,
    `Path=${path}`,
    `Max-Age=${maxAge}`,
    `SameSite=${sameSite}`,
    "Secure",
  ].join("; "));
