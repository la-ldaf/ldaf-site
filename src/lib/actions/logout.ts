import { browser } from "$app/environment";
import { page } from "$app/stores";
import managementClient from "$lib/stores/managementClient";
import userInfo from "$lib/stores/userInfo";
import userToken from "$lib/stores/userToken";

let refreshURL: string | undefined = undefined;

let logout: (() => void) | undefined;

if (browser) {
  page.subscribe(($page) => {
    const newSearchParams = new URLSearchParams($page.url.searchParams);
    newSearchParams.delete("preview");
    refreshURL = `${$page.url.pathname}${newSearchParams.toString()}${$page.url.hash}`;
  });

  logout = () => {
    userToken?.set(undefined);
    userInfo?.set(undefined);
    managementClient?.set(undefined);
    if (refreshURL) {
      window.location.href = refreshURL;
    } else {
      window.location.reload();
    }
  };
}

export default logout;
