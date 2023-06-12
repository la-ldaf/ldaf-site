import { CONTENTFUL_MANAGEMENT_API_ENDPOINT } from "$env/static/private";
import type { CurrentUser } from "$lib/contexts/currentUser";
import getErrorMessageFromResponse from "$lib/util/getErrorMessageFromResponse";
import { error } from "@sveltejs/kit";

export default async ({
  token,
  apiEndpoint = CONTENTFUL_MANAGEMENT_API_ENDPOINT,
}: {
  token: string;
  apiEndpoint: string;
}): Promise<CurrentUser> => {
  const currentUserResponse = await fetch(`${apiEndpoint}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!currentUserResponse.ok) {
    const errorMessage = getErrorMessageFromResponse(currentUserResponse);
    throw error(currentUserResponse.status, {
      message: `${currentUserResponse.status} ${currentUserResponse.statusText}: ${errorMessage}`,
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
