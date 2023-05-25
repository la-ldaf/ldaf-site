import managementClient from "$lib/stores/managementClient";
import userInfo from "$lib/stores/userInfo";
import userToken from "$lib/stores/userToken";

const logout = () => {
  userToken?.set(undefined);
  userInfo?.set(undefined);
  managementClient?.set(undefined);
};

export default logout;
