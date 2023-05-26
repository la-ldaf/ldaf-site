export const getCookieEntries = (): [string, string][] =>
  document.cookie
    .split(";")
    .map((entry) => entry.split("=").map((keyOrVal) => keyOrVal.trim()) as [string, string]);
export const getCookieMap = () => new Map(getCookieEntries());
export const getCookie = (key: string) =>
  decodeURIComponent(getCookieMap().get(encodeURIComponent(key)));

export type CookieOptions = {
  path?: "/";
  maxAge?: number;
};

export const setCookie = (key: string, val: string, options: CookieOptions = {}) => {
  console.log({ key, val });
  const { path, maxAge } = {
    path: "/",
    maxAge: 100,
    ...options,
  };
  document.cookie = [
    `${encodeURIComponent(key)}=${encodeURIComponent(val)}`,
    "Secure",
    `path=${path}`,
    `max-age=${maxAge}`,
  ].join("; ");
};

export const deleteCookie = (key: string) => (document.cookie = `${key}=;`);
