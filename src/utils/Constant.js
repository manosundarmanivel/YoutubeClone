const API_KEY = "AIzaSyDiAFlAguIBSTcaNKKgjpSNHpdIeNBQbOw";
export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;
export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_LIVE_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=25&q=news&type=video&key=" +
  API_KEY;
export const YOUTUBE_LIVE_DETAILS =
  "https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails,snippet&key=" +
  API_KEY +
  "&id=";
export const YOUTUBE_LIVE_COMMENT =
  "https://www.googleapis.com/youtube/v3/liveChat/messages?part=snippet,authorDetails&maxResults=2000&key=" +
  API_KEY +
  "&liveChatId=";
export const RELATED_VIDEOD_API =
  " https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&regionCode=IN&type=video&key=" +
  API_KEY +
  "&relatedToVideoId=";
export const COMMENT_LIST_API = "https://www.googleapis.com/youtube/v3/commentThreads?key="+API_KEY+"&textFormat=plainText&part=snippet&maxResults=50&videoId="

export const SEARCH_VIDEO_BY_KEYWORD_API = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key="+API_KEY+"&q="
export const initalData = {
  kind: "youtube#video",
  etag: "xG3nrr5jeD2utrcAinQ11h8QPdA",
  id: "tDVFs8qm1F4",
  snippet: {
    publishedAt: "2023-07-20T12:22:51Z",
    channelId: "UC8Z-VjXBtDJTvq6aqkIskPg",
    title:
      "🔴LIVE: Polimer News | Chandrayaan 3 | PM Modi | MKStalin | DMK | MinisterPonmudi | EdRaid",
    description:
      "🔴LIVE: Polimer News | Chandrayaan 3 | PM Modi | MKStalin | DMK | MinisterPonmudi | EdRaid\n\n#PolimerNews​​​​​​​​​​​​​​​​​​​​​​​​​​​ #headlinestodaynews #chandrayaan3  #pmmodi #dmk #mkstalin #delhi #yamunariver #flood #annamalaicase  #senthilbalaji #senthilbalajidismiss #rnravi #dmk #cmmkstalin #tnpolitics #todayheadlines #morningnews #tamilnadunews #tamilnaduheadlines  #morningheadlines #tamilnews #afternoonnews #eveningnews #digvijayakumar #edraid  #rahulgandhicasejudgement #viralvideo #sports #chennai \n\n\nWatch Polimer News, Tamil Nadu’s No. 1 news channel, live! Catch breaking news and live reports as they emerge around the world. Stay updated on the latest stories from the worlds of politics, entertainment, sports, business, social media and so much more. Polimer News is your trusted source for crisp and unbiased news. Watch now!. \n\n#PolimerNews | #Polimer | #TamilNews\n\n... to know more watch the full video &  Stay tuned here for the latest Tamil News updates...\n\nAndroid: https://goo.gl/T2uStq\n\niOS: https://goo.gl/svAwa8\n\nPolimer News App Download: https://goo.gl/MedanX\n\nSubscribe: https://www.youtube.com/c/polimernews\n\nWebsite: https://www.polimernews.com\n\nLike us on: https://www.facebook.com/polimernews\n\nFollow us on: https://twitter.com/polimernews\n\n\nAbout Polimer News:\n\nPolimer News brings unbiased News and accurate information to the socially conscious common man.\n\nPolimer News has evolved as a 24 hours Tamil News satellite TV channel. Polimer is the second-largest MSO in Tamil Nadu, catering to millions of TV viewing homes across ten districts.\n\nFounded by Mr. P.V. Kalyana Sundaram, the company currently runs eight basic cable TV channels in various TN and Polimer TV channels, a fully integrated Tamil GEC reaching millions of Tamil viewers worldwide.\n\nThe channel facilitates the production of art in Chennai. Besides a library of more than 350 exclusive movies, the channel also beams 8 hours of original content every day.\n\nPolimer News extends its vision to various genres, including reality. In short, it aims to become a strong and competitive channel in the GEC space of the Tamil television scenario.\n\nThe biggest strength of the channel is its people, who are a bunch of best talents in its role.  A clear vision backed by the best brains gives Polimer a clear cut edge over its competitors in the crowded Tamil TV landscape.",
    thumbnails: {
      default: {
        url: "https://i.ytimg.com/vi/tDVFs8qm1F4/default_live.jpg",
        width: 120,
        height: 90,
      },
      medium: {
        url: "https://i.ytimg.com/vi/tDVFs8qm1F4/mqdefault_live.jpg",
        width: 320,
        height: 180,
      },
      high: {
        url: "https://i.ytimg.com/vi/tDVFs8qm1F4/hqdefault_live.jpg",
        width: 480,
        height: 360,
      },
    },
    channelTitle: "Polimer News",
    tags: [
      "polimer news",
      "polimer",
      "polimer tv",
      "பாலிமர் செய்திகள்",
      "polimer news tamil",
      "பாலிமர் நியூஸ்",
      "polimer news today",
      "tamil news polimer",
      "polimer news online",
      "tamil news headlines",
      "tamil nadu news",
      "news today tamil",
      "tamil latest news",
      "headlines today",
      "today headlines",
      "breaking news",
      "viral news",
      "today news tamil",
      "news tamil",
      "news",
      "latest news",
      "news in tamil",
      "tamil news online",
      "tamil news today",
      "tamil news",
      "polimernews",
      "polimer youtube",
      "polimernews youtube",
    ],
    categoryId: "25",
    liveBroadcastContent: "live",
    localized: {
      title:
        "🔴LIVE: Polimer News | Chandrayaan 3 | PM Modi | MKStalin | DMK | MinisterPonmudi | EdRaid",
      description:
        "🔴LIVE: Polimer News | Chandrayaan 3 | PM Modi | MKStalin | DMK | MinisterPonmudi | EdRaid\n\n#PolimerNews​​​​​​​​​​​​​​​​​​​​​​​​​​​ #headlinestodaynews #chandrayaan3  #pmmodi #dmk #mkstalin #delhi #yamunariver #flood #annamalaicase  #senthilbalaji #senthilbalajidismiss #rnravi #dmk #cmmkstalin #tnpolitics #todayheadlines #morningnews #tamilnadunews #tamilnaduheadlines  #morningheadlines #tamilnews #afternoonnews #eveningnews #digvijayakumar #edraid  #rahulgandhicasejudgement #viralvideo #sports #chennai \n\n\nWatch Polimer News, Tamil Nadu’s No. 1 news channel, live! Catch breaking news and live reports as they emerge around the world. Stay updated on the latest stories from the worlds of politics, entertainment, sports, business, social media and so much more. Polimer News is your trusted source for crisp and unbiased news. Watch now!. \n\n#PolimerNews | #Polimer | #TamilNews\n\n... to know more watch the full video &  Stay tuned here for the latest Tamil News updates...\n\nAndroid: https://goo.gl/T2uStq\n\niOS: https://goo.gl/svAwa8\n\nPolimer News App Download: https://goo.gl/MedanX\n\nSubscribe: https://www.youtube.com/c/polimernews\n\nWebsite: https://www.polimernews.com\n\nLike us on: https://www.facebook.com/polimernews\n\nFollow us on: https://twitter.com/polimernews\n\n\nAbout Polimer News:\n\nPolimer News brings unbiased News and accurate information to the socially conscious common man.\n\nPolimer News has evolved as a 24 hours Tamil News satellite TV channel. Polimer is the second-largest MSO in Tamil Nadu, catering to millions of TV viewing homes across ten districts.\n\nFounded by Mr. P.V. Kalyana Sundaram, the company currently runs eight basic cable TV channels in various TN and Polimer TV channels, a fully integrated Tamil GEC reaching millions of Tamil viewers worldwide.\n\nThe channel facilitates the production of art in Chennai. Besides a library of more than 350 exclusive movies, the channel also beams 8 hours of original content every day.\n\nPolimer News extends its vision to various genres, including reality. In short, it aims to become a strong and competitive channel in the GEC space of the Tamil television scenario.\n\nThe biggest strength of the channel is its people, who are a bunch of best talents in its role.  A clear vision backed by the best brains gives Polimer a clear cut edge over its competitors in the crowded Tamil TV landscape.",
    },
    defaultAudioLanguage: "ta",
  },
  liveStreamingDetails: {
    actualStartTime: "2023-07-20T20:05:29Z",
    scheduledStartTime: "2023-07-20T12:22:51Z",
    concurrentViewers: "2502",
  },
};
