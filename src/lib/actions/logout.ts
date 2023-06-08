import { get } from "svelte/store";
import { browser } from "$app/environment";
import { page } from "$app/stores";
import userInfo from "$lib/stores/userInfo";
import userToken from "$lib/stores/userToken";

let logout: (() => void) | undefined;

if (browser) {
  logout = () => {
    userToken?.set(null);
    userInfo?.set(null);
    const url = get(page)?.url;
    if (!url) return window.location.reload();
    const refreshURL = new URL(url);
    refreshURL.searchParams.delete("preview");
    window.location.href = refreshURL.toString();
  };
}

export default logout;
