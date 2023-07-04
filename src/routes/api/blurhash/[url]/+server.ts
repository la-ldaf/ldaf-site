import { encode } from "blurhash";
import jpeg from "jpeg-js";
import getErrorMessage from "$lib/util/getErrorMessage";
import getErrorMessageFromResponse from "$lib/util/getErrorMessageFromResponse";
import { CONTENTFUL_IMAGE_API_ENDPOINT, CONTENTFUL_SPACE_ID } from "$env/static/private";

export const GET = async ({ params: { url: imageURL } }) => {
  let parsedImageURL: URL;
  try {
    parsedImageURL = new URL(decodeURIComponent(imageURL));
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: { message: `Could not construct a URL from ${imageURL}: ${getErrorMessage(err)}` },
      }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
  if (!imageURL.startsWith(`${CONTENTFUL_IMAGE_API_ENDPOINT}/${CONTENTFUL_SPACE_ID}`)) {
    return new Response(
      JSON.stringify({ error: { message: `${imageURL} is not a URL to an LDAF image` } }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  // TODO: check if the blurhash is in Redis already and return it from there if so

  parsedImageURL.searchParams.set("q", "25");
  parsedImageURL.searchParams.set("w", "100");
  parsedImageURL.searchParams.set("fm", "jpg");
  const imageResponse = await fetch(parsedImageURL, { headers: { "Content-Type": "image/jpeg" } });
  if (!imageResponse.ok) {
    const errorMessage = await getErrorMessageFromResponse(imageResponse);
    return new Response(
      JSON.stringify({
        error: {
          message: `Received a ${
            imageResponse.status
          } error response when requesting image from ${parsedImageURL.toString()} to convert to blurhash: ${errorMessage}`,
        },
      }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  let blurhash: string, width: number, height: number;
  try {
    const buffer = await imageResponse.arrayBuffer();
    let data: Uint8Array;
    ({ width, height, data } = jpeg.decode(buffer, { useTArray: true }));
    blurhash = encode(new Uint8ClampedArray(data), width, height, 4, 4);
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: {
          message: `Got the following error when trying to create the blurhash: ${getErrorMessage(
            err
          )}`,
        },
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  // TODO: cache the blurhash to Redis

  return new Response(blurhash, {
    headers: { "Content-Type": "text/plain", "Cache-Control": "max-age=31536000" }, // cache for one year
  });
};
