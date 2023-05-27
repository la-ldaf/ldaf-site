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
  sameSite?: string;
};

export const setCookie = (key: string, val: string, options: CookieOptions = {}) => {
  const { path, maxAge } = {
    path: "/",
    sameSite: "lax",
    maxAge: 100,
    ...options,
  };
  document.cookie = [
    `${encodeURIComponent(key)}=${encodeURIComponent(val)}`,
    "secure",
    `samesite=${sameSite}`,
    "samesite=lax",
    `path=${path}`,
    `max-age=${maxAge}`,
  ].join("; ");
};

export const deleteCookie = (key: string) =>
  (document.cookie = `${key}=; max-age=0; path=/; domain=`);
