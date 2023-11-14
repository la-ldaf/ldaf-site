import type { Handle } from "@sveltejs/kit";

const handleCurrentUser = (async ({ event, resolve }) => {
  const {
    locals: { getKVClient },
  } = event;

  const ldafUserToken =
    event.cookies.get("ldafUserToken") ??
    event.request.headers.get("Authorization")?.match(/^Bearer ([^ ]+)/)?.[1];

  setCurrentUser: {
    if (ldafUserToken) {
      try {
        const kvClient = await getKVClient();
        const userInfo = await kvClient.getUserInfoByToken(ldafUserToken);
        if (userInfo === null) {
          event.cookies.delete("ldafUserToken");
          break setCurrentUser;
        }
        event.locals.currentUser = userInfo;
      } catch (err) {
        console.error(err);
      }
    }
  }

  return resolve(event);
}) satisfies Handle;

export default handleCurrentUser;
