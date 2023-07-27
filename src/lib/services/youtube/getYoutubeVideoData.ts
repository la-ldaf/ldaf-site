import { PUBLIC_YOUTUBE_API_KEY } from "$env/static/public";

const getYoutubeVideoData = async (videoId: string) => {
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${PUBLIC_YOUTUBE_API_KEY}`
  );
  if (response) {
    const data = await response.json();
    if (data?.items && data.items.length > 0) {
      return data.items[0].snippet;
    }
  }
};

export default getYoutubeVideoData;
