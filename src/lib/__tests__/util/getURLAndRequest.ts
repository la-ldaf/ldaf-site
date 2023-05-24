const getURLAndRequest = (url: string) => ({ url: new URL(url), request: new Request(url) });
export default getURLAndRequest;
