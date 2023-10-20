import { CONTENTFUL_MANAGEMENT_API_ENDPOINT } from "$env/static/private";
import type { CurrentUser } from "$lib/types";
import getErrorMessageFromResponse from "$lib/util/getErrorMessageFromResponse";
import { error } from "@sveltejs/kit";

export default async ({
  token,
  fetch = global.fetch,
  apiEndpoint = CONTENTFUL_MANAGEMENT_API_ENDPOINT,
}: {
  fetch: typeof global.fetch;
  token: string;
  apiEndpoint: string;
}): Promise<CurrentUser> => {
  const currentUserResponse = await fetch(`${apiEndpoint}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!currentUserResponse.ok) {
    const errorMessage = await getErrorMessageFromResponse(currentUserResponse);
    throw error(currentUserResponse.status, {
      message: `${currentUserResponse.status}${
        currentUserResponse.statusText ? ` ${currentUserResponse.statusText}` : ""
      }: ${errorMessage}`,
    });
  }

  const {
    email,
    firstName,
    lastName,
    avatarUrl,
  }: {
    email: string;
    firstName: string;
    lastName: string;
    avatarUrl: string;
  } = await currentUserResponse.json();

  return {
    email,
    name: `${firstName} ${lastName}`,
    avatarURL: avatarUrl,
  };
};
