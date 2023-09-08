import { YOUTUBE_API_KEY } from "$env/static/private";
import { getBlurhash } from "$lib/services/blurhashes";
import type { Client as KVClient } from "$lib/services/server/kv";

export type Thumbnail = {
  url: string;
  width: number;
  height: number;
};

export type Thumbnails = Record<string, Thumbnail>;

export type YoutubeVideoData = {
  publishedAt: string;
  channelId: string;
  channelTitle: string;
  title: string;
  description: string;
  categoryId: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  };
  thumbnails: Thumbnails;
  defaultAudioLanguage: string;
};

export const getYoutubeVideoData = async (
  videoID: string,
  { fetch, kvClient }: { fetch: typeof global.fetch; kvClient?: KVClient },
): Promise<YoutubeVideoData | undefined> => {
  const cachedData = await kvClient?.getYoutubeVideoDataByID(videoID);
  if (cachedData) return cachedData;
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoID}&key=${YOUTUBE_API_KEY}`,
  );
  if (!response) return;
  const data = await response.json();
  if (!data?.items || data?.items?.length === 0) return;
  const {
    items: [{ snippet }],
  } = data;
  await kvClient?.setYoutubeVideoDataByID(videoID, snippet);
  return snippet;
};

export const getYoutubeVideoDataWithBlurhash = async (
  videoID: string,
  { fetch, kvClient }: { fetch: typeof global.fetch; kvClient?: KVClient | undefined },
): Promise<(YoutubeVideoData & { blurhash?: string }) | undefined> => {
  const youtubeVideoData = await getYoutubeVideoData(videoID, { fetch, kvClient });
  if (!youtubeVideoData) return;
  const [smallestThumbnail] = Object.values(youtubeVideoData.thumbnails).sort(
    (a, b) => a.width - b.width,
  );
  const blurhash = await getBlurhash(smallestThumbnail.url, { fetch });
  return { ...youtubeVideoData, blurhash };
};
