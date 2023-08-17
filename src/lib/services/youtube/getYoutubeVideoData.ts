import { YOUTUBE_API_KEY } from "$env/static/public";
import { getBlurhash } from "$lib/services/blurhashes";

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
  { fetch }: { fetch: typeof global.fetch }
): Promise<YoutubeVideoData | undefined> => {
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoID}&key=${YOUTUBE_API_KEY}`
  );
  if (response) {
    const data = await response.json();
    if (data?.items && data.items.length > 0) {
      return data.items[0].snippet;
    }
  }
};

export const getYoutubeVideoDataWithBlurhash = async (
  videoID: string,
  { fetch }: { fetch: typeof global.fetch }
): Promise<(YoutubeVideoData & { blurhash?: string }) | undefined> => {
  const youtubeVideoData = await getYoutubeVideoData(videoID, { fetch });
  if (!youtubeVideoData) return;
  const [smallestThumbnail] = Object.values(youtubeVideoData.thumbnails).sort(
    (a, b) => a.width - b.width
  );
  const blurhash = await getBlurhash(smallestThumbnail.url, { fetch });
  return { ...youtubeVideoData, blurhash };
};
